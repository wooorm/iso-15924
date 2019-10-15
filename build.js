'use strict'

var fs = require('fs')
var zlib = require('zlib')
var URL = require('url').URL
var https = require('https')
var concat = require('concat-stream')
var yauzl = require('yauzl')
var dsv = require('d3-dsv')
var bail = require('bail')
var not = require('not')

var headers = ['code', 'numeric', 'english', 'french', 'pva', 'age', 'date']

var found = false

https
  .request(
    new URL('https://www.unicode.org/iso15924/iso15924.txt.zip'),
    {headers: {'Accept-Encoding': 'gzip,deflate'}},
    onconnection
  )
  .end()

function onconnection(res) {
  res
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('archive.zip'))
    .on('close', onclose)
    .on('error', bail)
}

function onclose() {
  yauzl.open('archive.zip', {lazyEntries: true}, onopen)
}

function onopen(err, archive) {
  bail(err)

  read()

  archive.on('entry', onentry)
  archive.on('end', onend)

  function onentry(entry) {
    if (entry.fileName !== 'iso15924-utf8-20190819.txt') {
      return read()
    }

    found = true

    archive.openReadStream(entry, onreadstream)
  }

  function onreadstream(err, rs) {
    bail(err)
    rs.pipe(concat(onconcat)).on('error', bail)
    rs.on('end', read)
  }

  function read() {
    archive.readEntry()
  }
}

function onend() {
  if (!found) {
    throw new Error('File not found')
  }
}

function onconcat(body) {
  var data = String(body)
    .split('\n')
    .filter(not(comment))
    .join('\n')

  data = dsv
    .dsvFormat(';')
    .parse(headers.join(';') + data)
    .map(function(script) {
      return {
        code: script.code,
        name: script.english,
        numeric: script.numeric,
        pva: script.pva || null,
        date: script.date
      }
    })

  fs.writeFile('index.json', JSON.stringify(data, null, 2) + '\n', bail)
}

function comment(line) {
  return line.charAt(0) === '#'
}
