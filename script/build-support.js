'use strict';

/*
 * Dependencies.
 */

var scripts,
    fs,
    table;

scripts = require('..');
fs = require('fs');
table = require('markdown-table');

/*
 * Write.
 */

fs.writeFileSync('support.md',
    'Supported Codes\n' +
    '=================\n' +
    '\n' +
    'Unicode uses the “Property Value Alias” (Alias) as the script-name.\n' +
    'These Alias names are part of Unicode and are published\n' +
    'informatively next to ISO 15924.\n' +
    '\n' +
    table(
        [
            ['ISO-15924', 'Numeric', 'Name', 'Alias', 'Date']
        ].concat(scripts.keys().map(function (code) {
            var script = scripts.get(code);

            return [
                script.code,
                script.numeric,
                script.name,
                script.pva || '',
                script.date || ''
            ];
        })), {
            'align': 'l'
        }
    ) +
    '\n'
);
