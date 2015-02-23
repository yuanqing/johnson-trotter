# Johnson-Trotter.js [![npm Version](http://img.shields.io/npm/v/johnson-trotter.svg?style=flat)](https://npmjs.com/package/johnson-trotter) [![Build Status](https://img.shields.io/travis/yuanqing/johnson-trotter.svg?branch=master&style=flat)](https://travis-ci.org/yuanqing/johnson-trotter) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/johnson-trotter.svg?style=flat)](https://coveralls.io/r/yuanqing/johnson-trotter)

> An implementation of the [Johnson-Trotter](http://en.wikipedia.org/wiki/Steinhaus-Johnson-Trotter_algorithm) permutation algorithm.

## Usage

To iterate over the permutations of a given array, simply do:

```js
var permute = require('johnson-trotter');

var arr = ['foo', 'bar', 'baz'];

var iter = permute(arr);
while (iter.hasNext()) {
  iter.next();
  //=> ['foo', 'bar', 'baz']
  //=> ['foo', 'baz', 'bar']
  //=> ['baz', 'foo', 'bar']
  //=> ['baz', 'bar', 'foo']
  //=> ['bar', 'baz', 'foo']
  //=> ['bar', 'foo', 'baz']
}
```

Note that:

- Permutations are generated on-the-fly on every call to `next`.
- Each permutation is a *new* array containing elements of the original array. The original array (ie. `arr` in our example) is unmodified.

## API

### var iter = permute(arr)

Initialises the iterator.

- `arr` &mdash; The array to generate permutations for.

### iter.hasNext()

Returns `true` if there are more permutations in the iteration.

### iter.next()

Returns the next permutation in the iteration, or `null` if there are no more permutations in the iteration. The returned array is a *new* array containing elements of the original array.

### iter.reset()

Resets the iterator.

## Installation

Install via [npm](https://npmjs.com/):

```
$ npm i --save johnson-trotter
```

## Changelog

- 0.1.0
  - Initial release

## License

[MIT](https://github.com/yuanqing/johnson-trotter/blob/master/LICENSE)
