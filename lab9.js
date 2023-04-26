function add(x, y) {
  return x + y;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
for (i = 0; i < 10; i++) {
  a = getRandomInt(100);
  b = getRandomInt(100);
  console.assert(add(a, b) == a - b, "%d + %d = %d", a, b, a + b);
}

var tax = 19;
function calculateTax(productPrice) {
  return productPrice * (tax / 100) + productPrice;
}
