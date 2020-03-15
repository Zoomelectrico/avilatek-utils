# @avilatek/utils

<p align="center" >
  <img src="https://avilatek.dev/assets/images/logo.png" alt="Avila Tek Logo" height="150px">
</p>

Hi there😎! This is a public repo from [Avila Tek](https://avilatek.dev) we called this `utils` because this little functions are used in our projects always and we're tired of writing this all the time so we decide to go and publish a package to [npm](https://npmjs.com/package). We hope that you find this useful and if you have any request or issue just remember to file and issue for it!

## Usage

So, this package as today has ZERO (0) dependencies, do all you need to do is:

```shell
npm i -S @avilatek/utils
```

To install this little baby with npm (if using yarn is just `yarn add @avilatek/utils`)

## Utilities Functions

At this moment we just have 5 utilities the are

1. [formatMoney](#format-money)
2. [randomID](#random-id)
3. [slug](#slug)
4. [uppertify](#uppertify)
5. [uuid (v4 RFC compliant)](#uuid)

### Format Money

This functions helps you to pass a number into a currency format

```javascript
import { formatMoney } from '@avilatek/utils';
// const { formatMoney } = require('@avilatek/utils');
const amount = 100000;
const formatted = formatMoney(data); // 1.000,00
const formatted2 = formatMoney(data, { decimalComa: false }); // 1,000.00
```

**Options**

| Name        | Default Value |  Type   |
| ----------- | :-----------: | :-----: |
| isInCents   |     true      | boolean |
| decimalComa |     true      | boolean |
| currency    |      ''       | string  |

### Random ID

This function generate a random noise of id valid string

```javascript
import { randomID } from '@avilatek/utils';
// const { randomID } = require('@avilatek/utils');
const len = 8;
const id = randomID(len); // 'a1b2c3d4'
```

**Param**

len: is the length of the generated string (number)

### Slug

This function generate a "pretty url" from a given string

```javascript
import { slug } from '@avilatek/utils';
// const { slug } = require('@avilatek/utils');
const text = 'Avila Tek';
const url = slug(text); // 'avila-tek'
```

### Uppertify

This function safely set to uppercase a given string

```javascript
import { uppertify } from '@avilatek/utils';
// const { uppertify } = require('@avilatek/utils');
const text = 'Avila Tek';
const upper = uppertify(text); // 'AVILA TEK';
const upper2 = uppertify(null); // '-';
```

### UUID

This function generate a RFC compliant UUID V4.

```javascript
import { uuid } from '@avilatek/utils';
// const { uuid } = require('@avilatek/utils');
const id = uppertify(text); // '10000000-1000-4000-8000-100000000000';
```

## Contributing

😮 You made is far!! If you read the hole thing and still want to contribute your are welcome all you need to do is read is read the community guideline and start with a pull request 🤩.

Any Doubts tweet me `@quevedodev` or [email us](mailto:info@avilatek.dev)
