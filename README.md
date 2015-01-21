# fallback-image

Load a fallback image if an image errors out.

[![Build Status](https://travis-ci.org/zakangelle/fallback-image.png?branch=master)](https://travis-ci.org/zakangelle/fallback-image)

## Installation

```
$ npm install fallback-image
```

## Usage

```js
var fallbackImage = require('fallback-image');

var imageEl = document.querySelector('img.horse-image');
fallbackImage(imageEl, './fallback-image.png');
```

## Test

Tests are done with [tape](https://github.com/substack/tape) by running:

```
$ npm test
```
