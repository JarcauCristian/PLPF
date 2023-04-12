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
  path = _.first(graph);
  from = _.first(path);
  to = _.last(path);
  more = _.rest(graph);
  if (node === from) {
    return construct(to, nexts(more, node));
  } else return nexts(more, node);
}

const graph = {};
for (var i of influences) {
  var from = _.first(i);
  var to = _.last(i);
  graph[from] = _.contains(graph, graph[from]) ? graph[from] : [];
  graph[to] = _.contains(graph, graph[to]) ? graph[to] : [];
  graph[from].push(to);
  graph[to].push(from);
}

function pargurgereAdancime(graph, node, root, visited) 
{
  visited.push(node);

  for (var j of graph[node])
  {
      if (j === root)
      {
        return j;
      }
      if (!_.contains(visited, j))
      {
        var result = pargurgereAdancime(graph, j, root, visited);
        if (result != null)
        {
          return result;
        }
      }
  }
}
console.log(pargurgereAdancime(graph, 'JavaScript', 'Lisp', []));

function pargurgereLatime(graph, start, end) {
  var discovered = [];
  var backup = [start];
  var visited = [start];
  while (!_.isEmpty(backup)) {
    discovered.push(backup[0]);
    backup = backup.slice(1, backup.length);
    var question = _.first(discovered) === start ?  [] : discovered
    var nodes = [start, ...question.values()];
    while (_.last(nodes) !== end) {
      var subNodes = nexts(graph, discovered.pop());
      if (!_.contains(visited, subNodes[0]) && subNodes[0] != undefined) 
      {
        discovered.push(subNodes[0]);
        visited.push(subNodes[0]);
      }
      for (var j = 1; j < _.toArray(subNodes).length; j++) {
        var tr = nexts(graph, subNodes[j]);
        if (!_.contains(visited, subNodes[j]) && !_.isEmpty(tr)) {
          backup.push(subNodes[j]);
        }
      }
      var subTry = nexts(graph, _.last(discovered));
      if (_.isEmpty(subTry))
      {
        discovered.pop();
        for (var j = 0; j < _.toArray(subNodes).length; j++)
        {
          if (_.isEqual(end, subNodes[j]))
          {
            nodes.push(subNodes[j]);
          }
        }
      }
      else
      {
        for (var i of _.toArray(subNodes)) {
          if (!_.contains(nodes, i)) {
            nodes.push(i);
            break;
          }
        }
      }
    }
    console.log(nodes);
  }
}

pargurgereLatime(influences, "Lisp", "JavaScript", []);

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

var capitalCase = andify(
  _.isString,
  (x) => x.charAt(0) == x.charAt(0).toUpperCase()
);
console.log(capitalCase("John", "Up", "Down", "Left"));

console.log(capitalCase("John", "Up", "Down", "left"));

var keyString = andify(_.isString);

const dc = { John: "up", down: "Up" };
console.log(keyString(...Object.keys(dc)));

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
console.log(tic_tac_toe);
