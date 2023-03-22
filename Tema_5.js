const nextSquare = (n) =>
  (() => {
    return () => {
      let y = [];
      for (var i = 0; i * i <= n; i++) {
        y.push(i * i);
      }
      return y;
    };
  })();

console.log(nextSquare(300)());

function makeAdder(...args) {
  let x = args.reduce(function (a, b) {
    return a + b;
  });
  return function (...args1) {
    return (
      x +
      args1.reduce(function (a, b) {
        return a + b;
      })
    );
  };
}

var x = makeAdder(1, 2, 3, 4);
console.log(x(1, 2, 3, 4));

function makeFactorial(x) {
  return function () {
    let fact = 1;
    for (let i = 1; i <= x; i++) {
      fact *= i;
    }
    return fact;
  };
}

var y = makeFactorial(10);

console.log(y());

function makeFibonacci(x) {
  return function () {
    if (x === 1) {
      console.log(0);
    }
    if (x === 2) {
      console.log([0, 1]);
    }
    let result = [];
    if (x >= 3) {
      let a = 0;
      let b = 1;
      result.push(a);
      result.push(b);
      for (let i = 2; i < x; i++) {
        let aux = a + b;
        a = b;
        b = aux;
        result.push(aux);
      }
    }
    return result;
  };
}

var z = makeFibonacci(10);
console.log(z());
