'use strict';

/*
 * Dependencies.
 */

var fs = require('fs');
var textToJSON = require('plain-text-data-to-json');

/*
 * Data.
 */

var data = textToJSON(fs.readFileSync('data/iso-15924.txt', 'utf8'), {
    'comment': '#',
    'delimiter': ';',
    'forgiving': 'fix'
});

/*
 * Clean.
 */

var dictionary;

dictionary = {};

Object.keys(data).sort().forEach(function (code) {
    var row = data[code].split(';');

    dictionary[code.toLowerCase()] = {
        'code': code,
        'numeric': row[0],
        'name': row[1],
        'pva': row[3],
        'date': row[4]
    };
});

/*
 * Write.
 */

fs.writeFileSync('data/iso-15924.json', JSON.stringify(dictionary, 0, 2));
