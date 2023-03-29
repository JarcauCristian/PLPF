const _ = require("underscore");

// function get_best(fun, coll) {
//   return _.reduce(coll, function (x, y) {
//     return fun(x, y) ? x : y;
//   });
// }

// var result = get_best(
//   function (x, y) {
//     return x < y;
//   },
//   [1, 2, 3, 4, 5]
// );
// console.log(result);
// result = get_best(Math.min, [1, 2, 3, 4, 5]);
// console.log(result);

// var people = [
//   { name: "Fred", age: 65, health: 3 },
//   { name: "Lucy", age: 36, health: 5 },
// ];
// var result = get_best(function (x, y) {
//   return x.age <= y.age ? x.health > y.health : false;
// }, people);
// console.log(result);

// const censor = (words) => {
//   const filtered = [];
//   for (let i = 0, { length } = words; i < length; i++) {
//     const word = words[i];
//     if (word.length !== 4) filtered.push(word);
//   }
//   return filtered;
// };
// console.log(censor(["oops", "gasp", "shout", "sun"]));

// const startsWithS = (words) => {
//   const filtered = [];
//   for (let i = 0, { length } = words; i < length; i++) {
//     const word = words[i];
//     if (word.startsWith("s")) filtered.push(word);
//   }
//   return filtered;
// };
// console.log(startsWithS(["oops", "gasp", "shout", "sun"]));

// const reduce = (reducer, initial, arr) => {
//   // shared stuff
//   let acc = initial;
//   for (let i = 0, { length } = arr; i < length; i++) {
//     acc = reducer(acc, arr[i]);
//   }
//   return acc;
// };
// const filter = (fn, arr) =>
//   reduce((acc, curr) => (fn(curr) ? acc.concat([curr]) : acc), [], arr);

// const censor1 = (words) => filter((word) => word.length !== 4, words);
// const censor2 = (words) => filter((word) => word.startsWith("s"), words);
// result1 = censor1(["oops", "gasp", "shout", "sun"]);
// result2 = censor2(["oops", "gasp", "shout", "sun"]);
// console.log(result1);
// console.log(result2);

// function checkNumber(f) {
//   return (x) => f(x);
// }
// const izZero = checkNumber((p) => (p === 0 ? true : false));
// console.log(izZero(1));

function unless(cond, then) {
  if (!cond) then();
}
function repeat(times, action) {
  for (let i = 0; i < times; i++) action(i);
}

repeat(5, (n) => {
  unless(n % 2, () => {
    console.log(`${n} even`);
  });
});
