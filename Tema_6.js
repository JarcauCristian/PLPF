const _ = require("underscore");

function unless(cond, then) {
  if (!cond) then();
}
function repeat(times, action) {
  for (let i = 0; i < times; i++) action(i);
}

repeat(1001, (n) => {
  unless(n % 10, () => {
    console.log(`${n} divizibil cu 10`);
  });
});

const sum_age = (obj) => {
  return _.reduce(obj, (x, y) => x.age + y.age);
}

const sum = (arr) => {
    return _.reduce(arr, (x, y) => x + y);
}

const mean = (arr) => {
    return (_.reduce(arr, function(x, y) {return x+y}) / arr.length).toFixed(2);
}

const median = (arr) => {
    sorted = arr.sort((a, b) => a - b);
    middle = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? (sorted[middle - 1] + sorted[middle]) / 2 : sorted[middle];
}

const min = (arr) => {
    return _.reduce(arr, (x, y) => x < y ? x : y);
}

const max = (arr) => {
    return _.reduce(arr, (x, y) => x > y ? x : y);
}

function aggregator(arr, agg) {
    return agg(arr);
}

var people = [
  { name: "Fred", age: 65, health: 3 },
  { name: "Lucy", age: 36, health: 5 },
];

console.log("\nSuma: " + aggregator([8,4,6,7,1,3], sum));
console.log("Suma varsta: " + aggregator(people, sum_age));
console.log("Media: " + aggregator([8,4,6,7,1,3], mean));
console.log("Medianul: " + aggregator([8,4,6,7,1,3], median));
console.log("Min: " + aggregator([8,4,6,7,1,3], min));
console.log("Max: " + aggregator([8,4,6,7,1,3], max));