import R from 'ramda';
import _ from 'lodash';

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


const square = (x) => Math.pow(x, 2);
const isEven = (x) => x % 2 === 0;
const numbers = _.range(200);
const result = _.chain(numbers).map(square).filter(isEven).take(3).value();

console.log(result);



var rot13 = s =>
s.replace(/[a-zA-Z]/g, c=> String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c -26)
(c = c.charCodeAt(0) + 13) ? c : c - 26);

var discountCode = 'functional_js_50_off';
rot13(discountCode);

