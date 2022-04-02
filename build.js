import https from 'node:https'
import fs from 'node:fs'
import {URL} from 'node:url'
import concat from 'concat-stream'
import * as dsv from 'd3-dsv'
import {bail} from 'bail'

const headers = ['code', 'numeric', 'english', 'french', 'pva', 'age', 'date']

https
  .request(
    new URL('https://www.unicode.org/iso15924/iso15924.txt'),
    (response) => {
      response.pipe(concat(onconcat))
    }
  )
  .end()

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
