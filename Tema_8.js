const _ = require("underscore");

function mySum(array) {
  if (_.isEmpty(array)) {
    return 0;
  } else return _.first(array) + mySum(_.rest(array));
}

console.log("Suma elementelor din sir este: " + mySum([1, 2, 3, 4]));

function myMax(array, max) {
  max = max > _.first(array) ? max : _.first(array);
  if (_.isEmpty(array)) return 0;
  else if (array.length === 1) {
    return max;
  } else return myMax(_.rest(array), max);
}

console.log(
  "Maximul din sir este: " + myMax([10, 2, 4, 3], _.first([10, 2, 4, 3]))
);

function myMean(array, mean, len) {
  if (_.isEmpty(array)) {
    return mean / len;
  } else mean += _.first(array);
  return myMean(_.rest(array), mean, len);
}

console.log(
  "Media elementelor din sir este: " +
    myMean([1, 2, 3, 4], 0, [1, 2, 3, 4].length)
);

var influences = [
  ["Lisp", "Smalltalk"],
  ["Lisp", "Scheme"],
  ["Smalltalk", "Self"],
  ["Scheme", "JavaScript"],
  ["Scheme", "Lua"],
  ["Self", "Lua"],
  ["Self", "JavaScript"],
];

function nexts(graph, node) {
  if (_.isEmpty(graph)) return [];
  var pair = _.first(graph);
  var from = _.first(pair);
  var to = pair[1];
  var more = _.rest(graph);
  if (_.isEqual(node, from)) return construct(to, nexts(more, node));
  else return construct(to, nexts(more, from));
}
console.log(nexts(influences, "Lisp"));

function existy(x) {
  return x != null;
}
function cat() {
  var head = _.first(arguments);
  if (existy(head)) return head.concat.apply(head, _.rest(arguments));
  else return [];
}
function construct(head, tail) {
  return cat([head], _.toArray(tail));
}

function isEven(n) {
  return n % 2 === 0;
}

function orify() {
  var preds = _.toArray(arguments);
  return function () {
    var args = _.toArray(arguments);
    var everything = function (ps, truth) {
      if (_.isEmpty(ps)) return truth;
      else return _.every(args, _.first(ps)) || everything(_.rest(ps), truth);
    };
    return everything(preds, true);
  };
}

var evenNums = orify(_.isNumber, isEven);
console.log(evenNums(2, 4, 6, 8));
console.log(evenNums(1, 4, 6, 8));

function andify() {
  var preds = _.toArray(arguments);
  return function () {
    var args = _.toArray(arguments);
    var everything = function (ps, truth) {
      if (_.isEmpty(ps)) return truth;
      else return _.every(args, _.first(ps)) && everything(_.rest(ps), truth);
    };
    return everything(preds, true);
  };
}

var capitalCase = andify(_.isString, (x) => x.charAt(0) == x.charAt(0).toUpperCase());
console.log(capitalCase("John", "Up", "Down", "Left"));

console.log(capitalCase("John", "Up", "Down", "left"));

var keyString = andify(_.isString);

const dc = {"John": 'up', 'down': 'Up'};
console.log(keyString(...Object.keys(dc)))

tic_tac_toe = [-1, -1, -1, -1, -1, -1, -1, -1, -1];

choices = ['X', 0]

function generate_random_game(array, ind) {
  if (ind == array.length)
  {
    return 0;
  }
  else {
    array[ind] = choices[Math.round(Math.random())];
    return generate_random_game(array, ind + 1);
  }
}

generate_random_game(tic_tac_toe, 0)
console.log(tic_tac_toe)