import assert from 'node:assert'
import https from 'node:https'
import fs from 'node:fs'
import {URL} from 'node:url'
import concat from 'concat-stream'
import yauzl from 'yauzl'
import * as dsv from 'd3-dsv'
import {bail} from 'bail'

const headers = ['code', 'numeric', 'english', 'french', 'pva', 'age', 'date']
/** @type {string[]} */
const other = []
let found = false

https
  .request(
    new URL('https://www.unicode.org/iso15924/iso15924.txt.zip'),
    (response) => {
      response
        .pipe(fs.createWriteStream('archive.zip'))
        .on('close', onclose)
        .on('error', bail)
    }
  )
  .end()

function onclose() {
  yauzl.open('archive.zip', {lazyEntries: true}, (error, archive) => {
    bail(error)

    read()

    assert(archive, 'expected archive')

    archive.on('entry', (/** @type {import('yauzl').Entry} */ entry) => {
      if (entry.fileName !== 'iso15924-utf8-20210217.txt') {
        other.push(entry.fileName)
        return read()
      }

      found = true
      archive.openReadStream(entry, (error, rs) => {
        bail(error)
        assert(rs, 'expected read stream')
        rs.pipe(concat(onconcat)).on('error', bail)
        rs.on('end', read)
      })
    })

    archive.on('end', onend)

    function read() {
      assert(archive, 'expected archive')
      archive.readEntry()
    }
  })
}

/**
 * @param {Buffer} body
 */
function onconcat(body) {
  const data = dsv
    .dsvFormat(';')
    .parse(
      headers.join(';') +
        String(body)
          .split('\n')
          .filter((d) => d.charAt(0) !== '#')
          .join('\n')
    )
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
      ' */',
      '',
      '/** @type {Script[]} */',
      'export const iso15924 = ' + JSON.stringify(data, null, 2),
      ''
    ].join('\n'),
    bail
  )
}

function onend() {
  if (!found) {
    throw new Error('File not found, but these were: `' + other + '`')
  }
}
