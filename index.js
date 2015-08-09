'use strict';

/*
 * Dependencies.
 */

var Interface = require('datamap-interface');

/*
 * Data.
 */

var codes = require('./data/iso-15924.json');

/*
 * Expose codes, cased codes, and numeric codes..
 */

var dictionary = {};
var code;

for (code in codes) {
    dictionary[codes[code].numeric] = dictionary[codes[code].code] =
        dictionary[code] = codes[code];
}

/*
 * Expose ISO-15924.
 */

module.exports = new Interface(dictionary);
