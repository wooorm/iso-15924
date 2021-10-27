import fs from 'node:fs'
import https from 'node:https'
import concat from 'concat-stream'
import yauzl from 'yauzl'
import * as dsv from 'd3-dsv'
import {bail} from 'bail'
import not from 'not'

const headers = ['code', 'numeric', 'english', 'french', 'pva', 'age', 'date']
const other = []
let found = false

https
  .request(
    new URL('https://www.unicode.org/iso15924/iso15924.txt.zip'),
    onconnection
  )
  .end()

function onconnection(response) {
  response
    .pipe(fs.createWriteStream('archive.zip'))
    .on('close', onclose)
    .on('error', bail)
}

function onclose() {
  yauzl.open('archive.zip', {lazyEntries: true}, onopen)
}

function onopen(error, archive) {
  bail(error)

  read()

  archive.on('entry', onentry)
  archive.on('end', onend)

  function onentry(entry) {
    if (entry.fileName !== 'iso15924-utf8-20210217.txt') {
      other.push(entry.fileName)
      return read()
    }

    found = true
    archive.openReadStream(entry, onreadstream)
  }

  function onreadstream(error, rs) {
    bail(error)
    rs.pipe(concat(onconcat)).on('error', bail)
    rs.on('end', read)
  }

  function read() {
    archive.readEntry()
  }
}

function onend() {
  if (!found) {
    throw new Error('File not found, but these were: `' + other + '`')
  }
}

function onconcat(body) {
  let data = String(body).split('\n').filter(not(comment)).join('\n')

  data = dsv
    .dsvFormat(';')
    .parse(headers.join(';') + data)
    .map(function (script) {
      return {
        code: script.code,
        name: script.english,
        numeric: script.numeric,
        pva: script.pva || undefined,
        date: script.date
      }
    })

  fs.writeFile(
    'index.js',
    [
      '/**',
      ' * @typedef Script',
      ' * @property {string} name Name of script',
      ' * @property {string} code Four character ISO 15924 code',
      ' * @property {string} numeric Three character ISO 15924 code',
      ' * @property {string} [pva] Property value alias',
      ' * @property {string} date Date of addition (e.g., `2016-12-05`)',
      ' *',
      ' * @type {Script[]} List of scripts.',
      ' */',
      'export var iso15924 = ' + JSON.stringify(data, null, 2),
      ''
    ].join('\n'),
    bail
  )
}

function comment(line) {
  return line.charAt(0) === '#'
}
