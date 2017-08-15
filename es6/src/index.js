import R from 'ramda';

const f = R.curry(R.add(1))
console.log(f(10));

var ff = (obj) => console.log(obj)
var resultff = R.tap(ff, {x: "kenji"});


var pathed = R.path(['a', 'e'], {a: {b: 2, c: 9}});
console.log(pathed);

var obj = {
    body: {
        data: {
            name: 'morita'
        }
    }
};
const func = R.pathOr('', ['body', 'data', 'name']);
console.log(func(obj));


var duplicate = n => [n, n];
R.chain(duplicate, [1,2,3]);

