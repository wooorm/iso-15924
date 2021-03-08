# iso-15924

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

[ISO 15924][iso] codes in an accessible format, all of them.

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install iso-15924
```

## Use

```js
import {iso15924} from 'iso-15924'

console.log(iso15924.length) // => 210

console.log(iso15924.slice(0, 3))
```

Yields:

```js
[
  {
    code: 'Adlm',
    name: 'Adlam',
    numeric: '166',
    pva: 'Adlam',
    date: '2016-12-05'
  },
  {
    code: 'Afak',
    name: 'Afaka',
    numeric: '439',
    date: '2010-12-21'
  },
  {
    code: 'Aghb',
    name: 'Caucasian Albanian',
    numeric: '239',
    pva: 'Caucasian_Albanian',
    date: '2014-11-15'
  }
]
```

## API

This package exports the following identifiers: `iso15924`.
There is no default export.

### `iso15924`

`Script[]` — List of scripts.

### `Script`

`Object` with the following properties:

*   `name` (`string`) — Script name
*   `code` (`string`) — Four-character ISO 15924 code
*   `numeric` (`string`) — Three-character ISO 15924 code
*   `pva` (`string?`) — Property Value Alias
*   `date` (`string`) — Date of addition

## Related

*   [`bcp-47`](https://github.com/wooorm/bcp-47)
    — Parse and serialize BCP 47 language tags
*   [`bcp-47-match`](https://github.com/wooorm/bcp-47-match)
    — Match BCP 47 language tags with language ranges per RFC 4647
*   [`bcp-47-normalize`](https://github.com/wooorm/bcp-47-normalize)
    — Normalize, canonicalize, and format BCP 47 tags
*   [`iso-3166`](https://github.com/wooorm/iso-3166)
    — ISO 3166 codes
*   [`iso-639-3`](https://github.com/wooorm/iso-639-3)
    — ISO 639-3 codes
*   [`iso-639-2`](https://github.com/wooorm/iso-639-2)
    — ISO 639-2 codes
*   [`un-m49`](https://github.com/wooorm/un-m49)
    — UN M49 codes

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://github.com/wooorm/iso-15924/workflows/main/badge.svg

[build]: https://github.com/wooorm/iso-15924/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/iso-15924.svg

[coverage]: https://codecov.io/github/wooorm/iso-15924

[downloads-badge]: https://img.shields.io/npm/dm/iso-15924.svg

[downloads]: https://www.npmjs.com/package/iso-15924

[size-badge]: https://img.shields.io/bundlephobia/minzip/iso-15924.svg

[size]: https://bundlephobia.com/result?p=iso-15924

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[iso]: https://unicode.org/iso15924/
