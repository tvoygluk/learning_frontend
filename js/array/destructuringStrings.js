let str = 'winner';

let [sym1, sym2, ...others] = str;

// console.log(sym1, sym2, others) // w i [ 'n', 'n', 'e', 'r' ]

// let newArr = []; 
// или
let [...newArr] = [...str];
console.log(newArr) // [ 'w', 'i', 'n', 'n', 'e', 'r' ]