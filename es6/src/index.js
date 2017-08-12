import R from 'ramda';

const f = R.curry(R.add(1))
console.log(f(10));