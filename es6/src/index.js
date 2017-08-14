import R from 'ramda';

const f = R.curry(R.add(1))
console.log(f(10));

var ff = (obj) => console.log(obj)
var resultff = R.tap(ff, {x: "kenji"});
