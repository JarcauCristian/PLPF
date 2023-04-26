const _ = require('underscore');

function func(x, y)
{
    const x_pow_4 = Math.pow(x, 4);
    const sq_root = Math.sqrt(x + y);
    const dif_pow_2 = Math.pow(x - y, 2);
    if (dif_pow_2 === 0)
    {
        return "Can not do division to zero!"
    }
    return (x_pow_4 + sq_root) / dif_pow_2;
}

console.log(func(1, 2));
console.log(func(1, 2));
console.log(func(1, 1));
console.log(func(1, 1));

//Original function, impure
// function traverseArray(arr, func) {
//     let result = ’’;
//     for (const value of arr) {
//     result += func(value) + ’ ’;
//     }
//     console.log(result);
//     }
    

function traverseArray(arr, func) {
    const result = _.map(arr,func).join(' ');
    return result;
}
const arr = [1, 2, 3, 4, 5];
const doubleit = value => value * 2;
console.log(traverseArray(arr, doubleit));
console.log(arr);

// Functia traverseArray este pur deoarece:
// - Are parametrii de intrare
// - Nu foloseste variabile definite in exteriorul, sau interiorul functie
// - Returneaza un obiect doar in functie de parametrii de intrare
// - Nu modifica nimic din interiorul sau exteriorul functie

