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


const sum = (x, y) => {
    return x + y;
}

const mean = (arr) => {
    return _.reduce(arr, function(x, y) {return x+y}) / arr.length;
}

const median = (x, y) => {
    return (x + y) / 2;
}

const min = (x, y) => {
    return x < y ? x : y;
}

const max = (x, y) => {
    return x > y ? x : y;
}

function aggregator(arr, agg) {
    if (agg.name == "mean")
    {
        return mean(arr);
    }
    return _.reduce(arr, agg);
}

console.log(aggregator([1, 2, 3, 4, 5], sum));
console.log(aggregator([1, 2, 3, 4, 5], mean));
console.log(aggregator([1, 2, 3, 4, 5], median));
console.log(aggregator([1, 2, 3, 4, 5], min));
console.log(aggregator([1, 2, 3, 4, 5], max));