const _ = require("underscore");
// 1
const myfilter = (f) => (arr) => arr.filter(f);
const mymap = (f) => (arr) => arr.map(f);
const myReduce = (f) => (arr) => arr.reduce(f);
const mySort = (f) => (arr) => arr.sort(f);

const users = [
  { name: "Ana", age: 15 },
  { name: "Ion", age: 19 },
  { name: "Dan", age: 25 },
];

const composeRight =
  (...functions) =>
  (args) =>
    functions.reduceRight((arg, fn) => fn(arg), args);
console.log(
  composeRight(
    mymap((u) => u.name),
    myfilter((u) => u.age >= 18)
  )(users)
);

const add = (a, b) => a + b;
const rangeArr = (n) => _.range(n);
const compose =
  (...functions) =>
  (args) =>
    functions.reduce((arg, fn) => fn(arg), args);

console.log("Suma primelor numere pare!");
console.log(
  compose(
    myfilter((u) => u % 2 === 0),
    myReduce(add)
  )(rangeArr(10))
);

console.log("Suma primelor numere impare!");
console.log(
  compose(
    myfilter((u) => u % 2 !== 0),
    myReduce(add)
  )(rangeArr(10))
);
const myForeach = f => arr => arr.forEach(element => {
    f(element);
});
// 2
const div = (a) => (b) => b % a;
const div10 = div(10);
console.log(myfilter((u) => div10(u) === 0)(rangeArr(1001)));

console.time("Numerele de la 1 la 1000 divizibile cu 10 (functii compuse)");

myForeach(console.log)(myfilter((u) => div10(u) === 0)(rangeArr(1001)));

console.timeEnd("Numerele de la 1 la 1000 divizibile cu 10 (functii compuse)");

function unless(cond, then) {
  if (!cond) then();
}
function repeat(times, action) {
  for (let i = 0; i < times; i++) action(i);
}
console.log();
console.time("Numerele de la 1 la 1000 divizibile cu 10");
repeat(1001, (n) => {
  unless(n % 10, () => {
    console.log(`${n} divizibil cu 10`);
  });
});
console.timeEnd("Numerele de la 1 la 1000 divizibile cu 10");
console.log();
// 3
const projects = [
  {
    name: "project1",
    createdAt: 10,
    updatedAt: 15,
    active: 0,
    details: "First project",
  },
  {
    name: "project2",
    createdAt: 9,
    updatedAt: 20,
    active: 1,
    details: "Second project",
  },
  {
    name: "project3",
    createdAt: 1,
    updatedAt: 8,
    active: 0,
    details: "Third project",
  },
  {
    name: "project4",
    createdAt: 5,
    updatedAt: 7,
    active: 1,
    details: "Fourth project",
  },
];

const res = compose(
  myfilter((u) => u.active === 1),
  mySort((a, b) => a.updatedAt - b.updatedAt),
  mymap((u) => [u.name, u.details])
)(projects);

console.log(res);
