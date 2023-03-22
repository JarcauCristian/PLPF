// var locales = {
//   europe: function () {
//     // The Europe continent’s local scope
//     var myFriend = "Ana";
//     var france = function () {
//       // The France country’s local scope
//       var paris = function () {
//         // The Paris city’s local scope
//         console.log(myFriend);
//         myFriend += " is in Paris...";
//       };
//       paris();
//       myFriend += " Leaving Paris...";
//     };
//     france();
//     myFriend += " Leaving France...";
//     console.log(myFriend);
//   },
// };

// locales.europe();

// var test = "I'm global";
// function testScope() {
//   test = "I'm local";
//   console.log(test);
// }
// console.log(test); // output: I’m global
// testScope(); // output: I’m local
// console.log(test); //cum putem sa apara "I’m local"?

// var name = "global";
// function init() {
//   var name = "local"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

// function makeFunc() {
//   var name = "local";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }
// var name = global;
// var myFunc = makeFunc();
// var name = global;
// myFunc();

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2)); // 7
console.log(add10(2)); // 12
