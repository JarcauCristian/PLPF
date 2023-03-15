const _ = require("underscore");

// var nums = [1,2,3,4,5];
// function doubleAll(array) {
// return _.map(array, function(n) { return n*2 });
// }
// sir = doubleAll(nums);
// console.log(sir)

// var nums = [1, 2, 3, 4, 5];
// function average(array) {
//   var sum = _.reduce(array, function (a, b) {
//     return a + b;
//   });
//   return sum / _.size(array);
// }
// val = average(nums);
// console.log(val);

// var nums = { cheie1: 1, cheie: 2 };
// function average(array) {
//   var sum = _.reduce(array, function (a, b) {
//     return a + b;
//   });
//   return sum / _.size(array);
// }
// val = average(nums);
// console.log(val);

const map1 = _.map({ cheie1: 1, cheie2: 2 }, _.identity);
const map2 = _.map({ cheie1: 1, cheie2: 2 }, function (v, k) {
  return [k, v];
});

// console.log(map1, map2)

// const val = _.map({a: 1, b: 2}, function(v,k,coll) {
//     return [k, v, coll];
//     });
// console.log(val)

// var nums = [100, 2, 25];
// function div(x, y) {
//   return x / y;
// }
// var val = _.reduce(nums, div);
// console.log(val);
// val = _.reduceRight(nums, div);
// console.log(val);

// function allOf() {
//   return _.reduceRight(
//     arguments,
//     function (truth, f) {
//       return truth && f();
//     },
//     false
//   );
// }
// function T() {
//   return true;
// }
// function F() {
//   return false;
// }
// console.log(allOf(T, T, F));

// var albums = [
//   { title: "Black Monday", genre: "Metal" },
//   { title: "Scientist", genre: "Dub" },
//   { title: "Fireworks", genre: "Pop" },
//   { title: "Fade", genre: "Pop" },
//   { title: "Undertow", genre: "Metal" },
// ];
// val = _.groupBy(albums, function (a) {
//   return a.genre;
// });
// console.log(val);

function traverseArray(arr, func) {
  let result = "";
  for (const value of arr) {
    result += func(value) + " ";
  }
  console.log(result);
}
const arr = [1, 2, 3, 4, 5];
const doubleit = (value) => value * 2;
traverseArray(arr, doubleit);
