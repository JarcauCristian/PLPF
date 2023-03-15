const _ = require("underscore");

var arr = [1, 6, 9, 10, 2];
const minim = _.min(arr);
console.log("Min: " + minim);
const maxim = _.max(arr);
console.log("Max: " + maxim);

var albums = [
  { title: "Black Monday", genre: "Metal" },
  { title: "Scientist", genre: "Dub" },
  { title: "Fireworks", genre: "Pop" },
  { title: "Fade", genre: "Pop" },
  { title: "Undertow", genre: "Metal" },
];

var albumsSorted = _(albums).chain().sortBy("title").sortBy("genre").value();

console.log(albumsSorted);

var totalGen = _(albums)
  .chain()
  .groupBy("genre")
  .map(function (v, k) {
    return [k, v.length];
  })
  .value();
console.log(totalGen);

function traverseArray(arr, func) {
  let result = "";
  for (const value of arr) {
    result += func(value) + " ";
  }
  console.log(result);
}

const newArr = [1, 2, 3, 4, 5];
const doubleit = function (value) {
  return value * 2;
};
traverseArray(newArr, doubleit);

const printName = name => console.log(name);
printName("John");
