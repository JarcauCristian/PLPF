const child_day = "1st June";

let moneyinAccount = 100;
let billSum = 20;
let remainingSum = moneyinAccount - billSum;
console.log(remainingSum);

let arraysample = ["obj1", "obj2", "obj3"];

arraysample.push("obj4");

arraysample.push(0);
arraysample.push(1);
arraysample.push(7.2);
arraysample.push([1, 2]);
arraysample.push([[1, 3], 4]);

console.log(arraysample);

var populations = {
    london: "8.9 milions",
    berlin: 3.2,
    rome: 6000000
};
  
arraysample.push(populations);

console.log(arraysample);

populations.berlin = populations.berlin + 2;
populations.rome = populations.rome * 2;

console.log(populations);

populations.romania = 23000;

console.log(populations);

// Functii

function square(number) {
    return number * number;
}

const lista = [1, 2, 3, 4, 5];

for (let i in lista)
{
    console.log(square(lista[i]));
}

function myFunc(theObject) {
    theObject.make = 'Toyota';
}
var mycar = {make: 'Honda', model: 'Accord', year: 1998};
var x, y;
x = mycar.make;
console.log(mycar);
myFunc(mycar);
y = mycar.make;
console.log(mycar);

const functie = function(number) { return number * number }
console.log(functie);

for (let i of lista)
{
    console.log(functie(i));
}

const modificare = function(f, lista) { 
    for (let i of lista)
    {
        console.log(f(i));
    } 
}

console.log("\n");
modificare(functie, lista);

// Clase

class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    greet() {
        return `${this.name} says hello.`;
    }
}

var hero = new Hero("Superman", 100);

console.log(hero.greet());

hero.grupa = 1;

console.log(hero);
