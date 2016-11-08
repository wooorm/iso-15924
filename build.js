'use strict';

/* Dependencies. */
var fs = require('fs');
var zlib = require('zlib');
var path = require('path');
var url = require('url');
var http = require('http');
var concat = require('concat-stream');
var zip = require('unzip').Parse;
var dsv = require('d3-dsv');
var bail = require('bail');
var xtend = require('xtend');

/* Core. */
http
  .request(xtend(
    url.parse('http://www.unicode.org/iso15924/iso15924.txt.zip'),
    {headers: {'accept-encoding': 'gzip,deflate'}}
  ), function (res) {
    res
      .pipe(zlib.createGunzip())
      .pipe(zip())
      .on('entry', function (entry) {
        if (path.basename(entry.path) !== 'iso15924-utf8-20160119.txt') {
          entry.autodrain();
          return;
        }

        entry
          .pipe(concat(function (body) {
            var data = String(body)
              .split('\n')
              .filter(function (line) {
                return line.charAt(0) !== '#';
              }).join('\n');

            data = [
              'code',
              'numeric',
              'english',
              'french',
              'pva',
              'date'
            ].join(';') + data;

            data = dsv.dsvFormat(';').parse(data).map(function (script) {
              return {
                code: script.code,
                name: script.english,
                numeric: script.numeric,
                pva: script.pva || null,
                date: script.date
              };
            });

            fs.writeFile('index.json', JSON.stringify(data, 0, 2) + '\n', bail);
          }))
          .on('error', bail);
      })
      .on('error', bail);
  })
  .end();
