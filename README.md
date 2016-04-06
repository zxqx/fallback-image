# fallback-image

Load a fallback image if an image errors out.

[![Build Status](https://travis-ci.org/zakangelle/fallback-image.png?branch=master)](https://travis-ci.org/zakangelle/fallback-image)

## Installation

```
$ npm install fallback-image
```

## Usage

```js
import fallbackImage from 'fallback-image';

let imageEl = document.querySelector('img.horse-image');
fallbackImage(imageEl, './images/fallback-image.png');
```

## Test

Tests are done with [tape](https://github.com/substack/tape) by running:

```
$ npm test
```
