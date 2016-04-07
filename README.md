# fallback-image

Load a fallback image if an image errors out.

[![Build Status](https://travis-ci.org/zakangelle/fallback-image.svg?branch=master)](https://travis-ci.org/zakangelle/fallback-image)

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

## Standalone

Generate a standalone build in `dist` (for use with `<script>` tags and AMD module loaders):

```sh
$ npm run build:standalone
```

## Test

Tests are done with [tape](https://github.com/substack/tape) by running:

```
$ npm test
```
