'use strict';

var test = require('tape');
var permute = require('../');

test('is a function', function(t) {

  t.equal(typeof permute, 'function');

  t.end();

});

test('throws if no arguments, or if not passed an array', function(t) {

  t.throws(function() {
    permute();
  });
  t.throws(function() {
    permute({});
  });

  t.end();

});

test('empty', function(t) {

  var arr = [];
  var iter = permute(arr);

  t.false(iter.hasNext());
  t.equals(iter.next(), null);

  t.end();

});

test('single element', function(t) {

  var a = { a: 0 };
  var arr = [ a ];

  var iter = permute(arr);

  t.true(iter.hasNext());
  var next = iter.next();
  t.notEquals(next, arr);
  t.looseEquals(next, arr);
  t.equals(next[0], a);

  t.false(iter.hasNext());
  t.equals(iter.next(), null);

  t.end();

});

test('multiple elements', function(t) {

  var a = { a: 0 };
  var b = { b: 1 };
  var c = { c: 2 };
  var d = { d: 3 };
  var arr = [a, b, c, d];

  var expected = [
    [ a, b, c, d ],
    [ a, b, d, c ],
    [ a, d, b, c ],
    [ d, a, b, c ],
    [ d, a, c, b ],
    [ a, d, c, b ],
    [ a, c, d, b ],
    [ a, c, b, d ],
    [ c, a, b, d ],
    [ c, a, d, b ],
    [ c, d, a, b ],
    [ d, c, a, b ],
    [ d, c, b, a ],
    [ c, d, b, a ],
    [ c, b, d, a ],
    [ c, b, a, d ],
    [ b, c, a, d ],
    [ b, c, d, a ],
    [ b, d, c, a ],
    [ d, b, c, a ],
    [ d, b, a, c ],
    [ b, d, a, c ],
    [ b, a, d, c ],
    [ b, a, c, d ]
  ];

  var iter = permute(arr);

  var i = 0;
  while (i < expected.length) {
    t.true(iter.hasNext());
    var next = iter.next();
    t.looseEquals(next, expected[i]);
    t.equals(next[0], expected[i][0]);
    t.equals(next[1], expected[i][1]);
    t.equals(next[2], expected[i][2]);
    t.equals(next[3], expected[i][3]);
    i++;
  }

  t.false(iter.hasNext());
  t.equals(iter.next(), null);

  t.end();

});


test('reset', function(t) {

  t.test('before having terminated', function(t) {

    var arr = [ 0, 1 ];

    var expected = [
      [ 0, 1 ],
      [ 1, 0 ],
    ];

    var iter = permute(arr);

    t.true(iter.hasNext());
    t.looseEquals(iter.next(), expected[0]);

    iter.reset();

    t.true(iter.hasNext());
    t.looseEquals(iter.next(), expected[0]);
    t.true(iter.hasNext());
    t.looseEquals(iter.next(), expected[1]);
    t.false(iter.hasNext());
    t.equals(iter.next(), null);

    t.end();

  });

  t.test('after having terminated', function(t) {

    var arr = [ 0, 1 ];

    var expected = [
      [ 0, 1 ],
      [ 1, 0 ],
    ];

    var iter = permute(arr);

    t.true(iter.hasNext());
    t.looseEquals(iter.next(), expected[0]);
    t.true(iter.hasNext());
    t.looseEquals(iter.next(), expected[1]);
    t.false(iter.hasNext());
    t.equals(iter.next(), null);

    iter.reset();

    t.true(iter.hasNext());
    t.looseEquals(iter.next(), expected[0]);
    t.true(iter.hasNext());
    t.looseEquals(iter.next(), expected[1]);
    t.false(iter.hasNext());
    t.equals(iter.next(), null);

    t.end();

  });

});
