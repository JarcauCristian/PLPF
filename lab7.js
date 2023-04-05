const _ = require('underscore');

// const add = (a, b) => a + b;
// const mul = (a, b) => a * b;

// res = add(4, mul(5, 7))

// console.log(res);

// const users = [
//     { name: "Ana", age: 15 },
//     { name: "Ion", age: 19 },
//     { name: "Dan", age: 25 },
// ]
// const myfilter = (f) => (arr) => arr.filter(f);
// const mymap = (f) => (arr) => arr.map(f);

// const compose = 
// (...functions) => (args) => functions.reduce((arg,fn) => fn(arg), args)
// let res = compose(
//     myfilter(u => u.age >= 18),
//     mymap(u => u.name)
// )(users);

// console.log(res);

// const add = a => b => a + b;
// const res = add(2);
// console.log(add(2)(1));
// console.log(add(2)(2));
// console.log(add(2)(3));
// console.log(add(2)(4));

// const curryadd = x => y => z => x + y + z;
// console.log(curryadd(1));
// console.log(curryadd(1)(2));
// console.log(curryadd(1)(2)(3));

// const curriedSubstring = start => length => str => str.substr(start, length);
// const getSubstring = (start, length, str)=> curriedSubstring (start) (length) (str);
// const getFirstCharacters = (length, str) => curriedSubstring (0) (length) (str);
// let res = getSubstring(1,3,"something");
// console.log(res);
// res = getFirstCharacters(4,"something");
// console.log(res);


// function curry(fun) {
//     return function(arg) {
//         return fun(arg);
//     };
// }
// const f = curry(_.map);
// console.log(f({1: 6, 2: "3", 3: 5}));

// const add = a => b => a + b;
// const increment = add(1);
// console.log(increment(3));
// console.log(increment(-1));
// console.log(increment(0));

const currycompose = (...fns) =>
fns.reduce(
    (f, g) => 
        (...args) => 
            g(f(...args))
);
const curriedSubstring = start => length => str => str.substr(start, length);
const curriedLowerCase = str => str.toLowerCase();
const getNewComposedFirstCharacterAsLower = currycompose(
    curriedLowerCase, 
    curriedSubstring (0) (1)
);
console.log(getNewComposedFirstCharacterAsLower("DaEbsS"));
console.log(curriedLowerCase("DaEbsS"));