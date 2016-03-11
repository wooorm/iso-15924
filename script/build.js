#!/usr/bin/env node
/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module iso15924:script
 * @fileoverview Crawl the list of scripts.
 */

'use strict';

/* eslint-env node */

/*
 * Dependencies.
 */

var fs = require('fs');
var path = require('path');
var http = require('http');
var concat = require('concat-stream');
var unzip = require('unzip');
var dsv = require('d3-dsv');

/*
 * Constants.
 */

var INPUT = 'http://www.unicode.org/iso15924/iso15924.txt.zip';
var ENTRY = 'iso15924-utf8-20160119.txt';
var OUTPUT = path.join(__dirname, '..', 'index.json');

/*
 * Core.
 */

http.request(INPUT, function (response) {
    response.pipe(unzip.Parse()).on('entry', function (entry) {
        if (path.basename(entry.path) !== ENTRY) {
            entry.autodrain();
            return;
        }

        entry.pipe(concat(function (body) {
            body = body.toString()
                .split('\n')
                .filter(function (line) {
                    return line.charAt(0) !== '#';
                }).join('\n');

            body = [
                'code',
                'numeric',
                'english',
                'french',
                'pva',
                'date'
            ].join(';') + body;

            var data = dsv.dsvFormat(';').parse(body).map(function (script) {
                return {
                    'code': script.code,
                    'name': script.english,
                    'numeric': script.numeric,
                    'pva': script.pva || null,
                    'date': script.date
                };
            });

            fs.writeFile(OUTPUT, JSON.stringify(data, 0, 2) + '\n');
        }));
    });
}).end();
