# iso-15924 [![Build Status][build-badge]][build-page]

[ISO 15924][iso] codes in an accessible format, all of them.

## Installation

[npm][]:

```bash
npm install iso-15924
```

## Usage

```javascript
var iso15924 = require('iso-15924')

iso15924.length // => 197

console.log(iso15924.slice(0, 10))
```

Yields:

```js
[ { code: 'Adlm',
    name: 'Adlam',
    numeric: '166',
    pva: 'Adlam',
    date: '2016-12-05' },
  { code: 'Afak',
    name: 'Afaka',
    numeric: '439',
    pva: null,
    date: '2010-12-21' },
  { code: 'Aghb',
    name: 'Caucasian Albanian',
    numeric: '239',
    pva: 'Caucasian_Albanian',
    date: '2014-11-15' },
  { code: 'Ahom',
    name: 'Ahom, Tai Ahom',
    numeric: '338',
    pva: 'Ahom',
    date: '2015-07-07' },
  { code: 'Arab',
    name: 'Arabic',
    numeric: '160',
    pva: 'Arabic',
    date: '2004-05-01' },
  { code: 'Aran',
    name: 'Arabic (Nastaliq variant)',
    numeric: '161',
    pva: null,
    date: '2014-11-15' },
  { code: 'Armi',
    name: 'Imperial Aramaic',
    numeric: '124',
    pva: 'Imperial_Aramaic',
    date: '2009-06-01' },
  { code: 'Armn',
    name: 'Armenian',
    numeric: '230',
    pva: 'Armenian',
    date: '2004-05-01' },
  { code: 'Avst',
    name: 'Avestan',
    numeric: '134',
    pva: 'Avestan',
    date: '2009-06-01' },
  { code: 'Bali',
    name: 'Balinese',
    numeric: '360',
    pva: 'Balinese',
    date: '2006-10-10' } ]
```

## API

### `iso15924`

`Array.<Script>` — List of scripts.

### `Script`

`Object`:

*   `name` (`string`) — Script name
*   `code` (`string`) — Four-character ISO 15924 code
*   `numeric` (`string`) — Three-character ISO 15924 code
*   `pva` (`string?`) — Property Value Alias
*   `date` (`string`) — Date of addition

## Related

*   [`iso-639-2`](https://github.com/wooorm/iso-639-2)
    — ISO 639-2 codes
*   [`iso-639-3`](https://github.com/wooorm/iso-639-3)
    — ISO 639-3 codes

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/iso-15924.svg

[build-page]: https://travis-ci.org/wooorm/iso-15924

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[iso]: http://unicode.org/iso15924/
