import fs from 'node:fs/promises'
import fetch from 'node-fetch'
import * as dsv from 'd3-dsv'

const headers = ['code', 'numeric', 'english', 'french', 'pva', 'age', 'date']

const response = await fetch('https://www.unicode.org/iso15924/iso15924.txt')
const text = await response.text()

const data = dsv
  .dsvFormat(';')
  .parse(
    headers.join(';') +
      String(text)
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

await fs.writeFile(
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
    '/** @type {Array<Script>} */',
    'export const iso15924 = ' + JSON.stringify(data, null, 2),
    ''
  ].join('\n')
)
