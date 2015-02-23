'use strict';

var permute = require('../');

var iter = permute(['foo', 'bar', 'baz']);
while (iter.hasNext()) {
  iter.next();
  //=> [ 'foo', 'bar', 'baz' ]
  //=> [ 'foo', 'baz', 'bar' ]
  //=> [ 'baz', 'foo', 'bar' ]
  //=> [ 'baz', 'bar', 'foo' ]
  //=> [ 'bar', 'baz', 'foo' ]
  //=> [ 'bar', 'foo', 'baz' ]
}
