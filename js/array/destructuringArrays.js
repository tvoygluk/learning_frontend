const arr = ['a', 'b', 'c'];


let [desA, , desC] = arr;
// console.log(desA, desC);


let [dA, , dC, dD = 5] = arr; // default value // переименование не работает
// console.log(dD);


let A = 1;
let C = 3;
// console.log(A, C); // 1 3
[A, , C, D] = arr;
// console.log(A, C); // a c


let varA = 'a', varB = 'b';
[varB, varA] = [varA, varB]
// console.log(varA, varB); // деструктуризация на ходу


const cards = [['c1', 'c2'], 'c3'];
let [card12, card3] = cards;
// console.log(card12, card3);
let [card1, card2] = card12;
// console.log(card1, card2);
// иначе говоря
let [[cc1,cc2],cc3] = cards;
// console.log(cc1,cc2,cc3);