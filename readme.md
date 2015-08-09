# iso-15924 [![Build Status](https://img.shields.io/travis/wooorm/iso-15924.svg)](https://travis-ci.org/wooorm/iso-15924) [![Coverage Status](https://img.shields.io/codecov/c/github/wooorm/iso-15924.svg)](https://codecov.io/github/wooorm/iso-15924)

[ISO-15924](http://www.unicode.org/iso15924/) codes in an accessible format.

## Installation

[npm](https://docs.npmjs.com/cli/install):

```bash
npm install iso-15924
```

**iso-15924** is also available for [bower](http://bower.io/#install-packages),
[component](https://github.com/componentjs/component), and
[duo](http://duojs.org/#getting-started), and as an AMD, CommonJS, and globals
module, [uncompressed](iso-15924.js) and
[compressed](iso-15924.min.js).

## Usage

```js
var iso15924 = require('iso-15924');

iso15924.get('Latn');
/**
 * // you can also use the lower-case code (e.g., `latn`).
 * { code: 'Latn',
 *   numeric: '215',
 *   name: 'Latin',
 *   pva: 'Latin',
 *   date: '2004-05-01' }
 */

iso15924.get('501');
/**
 * { code: 'Hans',
 *   numeric: '501',
 *   name: 'Han (Simplified variant)',
 *   pva: '',
 *   date: '2004-05-29' }
 */

iso15924.has('Unic'); // false

iso15924.all(); // An object with 531 script-objects.
```

## API

See [the **datamap-interface** API](https://github.com/wooorm/datamap-interface).

## Support

See [support.md](support.md).

## License

[MIT](LICENSE) © [Titus Wormer](http://wooorm.com)
