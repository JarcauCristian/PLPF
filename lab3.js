// var functionOne = function() {
//     console.log("Hello!");
// };
// functionOne();

// const constfunct = function()
// {
// console.log("Hello again!");
// }
// constfunct();

// // constfunct = 1;

// const constfunct = (nume) => {
//     console.log("Hello again!");
//     console.log(nume)
// }
// constfunct("Laborator");

// const functii = {
//     print: function afisare(nume){
//         console.log(nume);
//     },
//     printLambda: (nume) => console.log(nume)
// }

// functii.print("Laborator");
// functii.printLambda("Laborator");

var lista = [1, 2, 3, 4, 5];
const sum = (lista) => {
    let s = 0;
    for (i of lista){
        s = s + i;
    }
    return s;
};
const min = (lista) => Math.min(...lista);
const max = (lista) => Math.max(...lista);

// console.log("Suma este: " + sum(lista));
// console.log("Maximul este: " + max(lista));
// console.log("Minimul este: " + min(lista));

// var lista = [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10]];
// const functii = [sum, min, max];

// lista.forEach((element) => {
//     for (var f of functii) {
//         console.log(f(element));
//     }
// });