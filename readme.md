# iso-15924

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

[ISO 15924][iso] codes.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`iso15924`](#iso15924)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This is the data of [ISO 15924][iso].

## When should I use this?

ISO 15924 represents scripts (such as Latin).
These scripts are often seen in BCP 47 language codes: `sr-Cyrl` (`sr` is ISO
639-1 for Serbian, `Cyrl` is ISO 15924 for Cyrillic).
This package is useful when you’re working with languages.

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install iso-15924
```

In Deno with [`esm.sh`][esmsh]:

```js
import {iso15924} from 'https://esm.sh/iso-15924@3'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {iso15924} from 'https://esm.sh/iso-15924@3?bundle'
</script>
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
  {code: 'Adlm', name: 'Adlam', numeric: '166', pva: 'Adlam', date: '2016-12-05'},
  {code: 'Afak', name: 'Afaka', numeric: '439', date: '2010-12-21'},
  {code: 'Aghb', name: 'Caucasian Albanian', numeric: '239', pva: 'Caucasian_Albanian', date: '2014-11-15'}
]
```

## API

This package exports the following identifier: `iso15924`.
There is no default export.

### `iso15924`

`Array<Script>` — List of scripts.

###### `Script`

`Object` with the following properties:

*   `name` (`string`) — script name
*   `code` (`string`) — four-character ISO 15924 code
*   `numeric` (`string`) — three-character ISO 15924 code
*   `pva` (`string?`) — property value alias
*   `date` (`string`) — date of addition

## Types

This package is fully typed with [TypeScript][].
The `Script` type is exported.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`wooorm/bcp-47`](https://github.com/wooorm/bcp-47)
    — parse and serialize BCP 47 language tags
*   [`wooorm/bcp-47-match`](https://github.com/wooorm/bcp-47-match)
    — match BCP 47 language tags with language ranges per RFC 4647
*   [`wooorm/bcp-47-normalize`](https://github.com/wooorm/bcp-47-normalize)
    — normalize, canonicalize, and format BCP 47 tags
*   [`wooorm/iso-3166`](https://github.com/wooorm/iso-3166)
    — ISO 3166 codes
*   [`wooorm/iso-639-3`](https://github.com/wooorm/iso-639-3)
    — ISO 639-3 codes
*   [`wooorm/iso-639-2`](https://github.com/wooorm/iso-639-2)
    — ISO 639-2 codes
*   [`wooorm/un-m49`](https://github.com/wooorm/un-m49)
    — UN M49 codes

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

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

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[iso]: https://unicode.org/iso15924/
