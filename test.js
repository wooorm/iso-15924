'use strict';

/* eslint-env mocha */

/*
 * Dependencies.
 */

var assert = require('assert');
var iso15924 = require('./');

/*
 * Dependencies.
 */

var equal = assert.strictEqual;

/*
 * Tests.
 */

describe('iso15924.get(property)', function () {
    it('should get by cased code', function () {
        var result = iso15924.get('Latn');

        equal(result.code, 'Latn');
        equal(result.numeric, '215');
        equal(result.name, 'Latin');
        equal(result.pva, 'Latin');
        equal(result.date, '2004-05-01');
    });

    it('should get by uncased (lower-case) code', function () {
        var result = iso15924.get('latn');

        equal(result.code, 'Latn');
        equal(result.numeric, '215');
        equal(result.name, 'Latin');
        equal(result.pva, 'Latin');
        equal(result.date, '2004-05-01');
    });

    it('should get by number code', function () {
        var result = iso15924.get('215');

        equal(result.code, 'Latn');
        equal(result.numeric, '215');
        equal(result.name, 'Latin');
        equal(result.pva, 'Latin');
        equal(result.date, '2004-05-01');
    });

    it('should return null if am item is not in the database', function () {
        equal(iso15924.get('Wxyz'), null);
    });
});

describe('iso15924.has(property)', function () {
    it('should return if an item is in the database', function () {
        equal(iso15924.has('Latn'), true);
        equal(iso15924.has('Unic'), false);
    });

    it('should not fail on prototpe extending', function () {
        /* eslint-disable no-extend-native */
        Object.prototype.unicorn = 'mammal';

        assert(!iso15924.has('unicorn'));

        delete Object.prototype.unicorn;
        /* eslint-enable no-extend-native */
    });

    it('should not fail on native properties', function () {
        assert(!iso15924.has('toString'));
        assert(!iso15924.has('constructor'));
        assert(!iso15924.has('hasOwnProperty'));
    });
});

describe('iso15924.all()', function () {
    var all = iso15924.all();

    it('should return an object', function () {
        equal(typeof all, 'object');
    });

    it('should return all values in the datamap', function () {
        equal(Object.keys(all).length, 531);

        assert('Latn' in all);
        assert('latn' in all);
        assert('215' in all);
    });

    it('should be immutable', function () {
        all.unicorn = 'mammal';

        assert(!iso15924.has('unicorn'));

        assert(!('unicorn' in iso15924.all()));
    });
});
