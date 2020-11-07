// В JavaScript имеется пять примитивных типов данных:
// String: представляет строку
// Number: представляет числовое значение
// Boolean: представляет логическое значение true или false.
// undefined: указывает, что значение не установлено
// null: указывает на неопределенное значение

// передача по значению

// number 
let num1 = 1;
const num2 = num1;
num1 = 2;
console.log(num1, num2); // 2 1

// boolean
let bool1 = true;
const bool2 = bool1;
bool1 = false;
console.log(bool1, bool2); // false true

// string
let str1 = '1';
const str2 = str1;
str1 = '2';
console.log(str1, str2); // 2 1

// undefined
let un1 = undefined;
const un2 = un1;
un1 = 5;
console.log(un1, un2); // 5 undefined

// null
let null1 = null;
const null2 = null1;
null1 = 3;
console.log(null1, null2); // 3 null

// ======================================================
// передача по ссылке

// object

let obj1 = {a: '1'};
const obj2 = obj1;
obj2.a = 4;
obj2.b = 7;
// если мы напишем obj1 = {}, то в переменная obj1 будет ссылаться на новую область данных
// и переменная obj2 не перезапишется, а останется ссылкой на бывшее значение obj1
console.log(obj1, obj2, obj1 === obj2); // { a: 4, b: 7 } { a: 4, b: 7 } true

const obj3 = {};
const obj4 = {};
console.log(obj3 == obj4); // false