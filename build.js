'use strict'

var fs = require('fs')
var zlib = require('zlib')
var path = require('path')
var url = require('url')
var https = require('https')
var concat = require('concat-stream')
var zip = require('unzip').Parse
var dsv = require('d3-dsv')
var bail = require('bail')
var xtend = require('xtend')
var not = require('not')

var headers = ['code', 'numeric', 'english', 'french', 'pva', 'age', 'date']

var opts = xtend(
  url.parse('https://www.unicode.org/iso15924/iso15924.txt.zip'),
  {
    headers: {'accept-encoding': 'gzip,deflate'}
  }
)

var found = true

process.on('exit', onexit)

https.request(opts, onconnection).end()

function onexit() {
  if (!found) {
    throw new Error('File not found')
  }
}

function onconnection(res) {
  res
    .pipe(zlib.createGunzip())
    .pipe(zip())
    .on('entry', onentry)
    .on('error', bail)
}

function onentry(entry) {
  if (path.basename(entry.path) === 'iso15924-utf8-20171121.txt') {
    found = true
    entry.pipe(concat(onconcat)).on('error', bail)
  } else {
    entry.autodrain()
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
