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
  ["Self", "JavaScript"]
];

function nexts(graph, node) {
  if (_.isEmpty(graph)) return [];
  path = _.first(graph);
  from = _.first(path);
  to = _.last(path);
  more = _.rest(graph);
  if (node === from) {
    return construct(to, nexts(more, node));
  } else return nexts(more, node);
}

console.log("\nParcurgere in latime")

function parcurgereLatime(graph, start, end, visited, res) {
  var result = nexts(graph, start);
  if (_.contains(result, end))
  {
     res.push(end);
     console.log(res);
     res = [visited[0]];
     return parcurgereLatime(graph, visited[0], end, visited, res);
  }
  if (result !== [])
  {
    for (var i of result)
    {
      if (!_.contains(visited, i))
      {
        visited.push(i);
        res.push(i);
        return parcurgereLatime(graph, i, end, visited, res);
      }
    }
  }
}

parcurgereLatime(influences, "Lisp", "JavaScript", ['Lisp'], ['Lisp']);

console.log("\nParcurgere in adancime")
function backs(graph, node) {
  if (_.isEmpty(graph)) return [];
  path = _.first(graph);
  from = _.first(path);
  to = _.last(path);
  more = _.rest(graph);
  if (node == to) {
    return construct(from, backs(more, node));
  } else return backs(more, node);
}

function parcurgereAdancime(graph, start, end, visited, res)
{
  var result = backs(graph, start);
  if (_.contains(result, end))
  {
     res.push(end);
     console.log(res);
     res = [visited[0]];
     return parcurgereAdancime(graph, visited[0], end, visited, res);
  }
  if (result !== [])
  {
    for (var i of result)
    {
      if (!_.contains(visited, i))
      {
        visited.push(i);
        res.push(i);
        return parcurgereAdancime(graph, i, end, visited, res);
      }
    }
  }
}

parcurgereAdancime(influences, 'JavaScript', 'Lisp', ['JavaScript'], ['JavaScript']);


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
console.log();
var evenNums = orify(_.isNumber, isEven);
console.log("orify: " + evenNums(2, 4, 6, 8));
console.log("orify: " + evenNums(1, 4, 6, 8));

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

var capitalCase = andify(
  _.isString,
  (x) => x.charAt(0) == x.charAt(0).toUpperCase()
);
console.log("Capital case: " + capitalCase("John", "Up", "Down", "Left"));

console.log("Capital case: " + capitalCase("John", "Up", "Down", "left"));

var keyString = andify(_.isString);

const dc = { John: "up", down: "Up" };
console.log("Daca un dictionar are toate cheile string-uri: " + keyString(...Object.keys(dc)));

tic_tac_toe = [-1, -1, -1, -1, -1, -1, -1, -1, -1];

choices = ["X", 0];

function generate_random_game(array, ind) {
  if (ind == array.length) {
    return 0;
  } else {
    array[ind] = choices[Math.round(Math.random())];
    return generate_random_game(array, ind + 1);
  }
}

generate_random_game(tic_tac_toe, 0);
console.log("\n" + tic_tac_toe);
