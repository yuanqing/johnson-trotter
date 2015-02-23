'use strict';

var permute = require('../');

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
