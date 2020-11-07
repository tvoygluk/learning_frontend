// Объекты Set позволяют вам сохранять уникальные значения любого типа, 
// как примитивы, так и другие типы объектов.

var mySet = new Set();

mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }

mySet.add("some text"); // Set { 1, 5, 'some text' }
var o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2}); // переменная o связана с другим объектом, поэтому данная строка также сработает

mySet.has(1); // true
mySet.has(3); // false, 3 не было добавлено в set
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has("Some Text".toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5); // удаляет 5 из set
mySet.has(5);    // false, 5 было удалено
mySet.size; // 4, было удалено одно значение
console.log(mySet); // Set {1, 'some text', Object {a: 1, b: 2}, Object {a: 1, b: 2}}




// Взаимоотношения с объектом Array
var myArray = ["value1", "value2", "value3"];

// Используйте конструктор Set для преобразования Array в Set
var mySet = new Set(myArray);

mySet.has("value1"); // вернёт true

// Используйте spread оператор для преобразования Set в Array
console.log([...mySet]); // Отобразит тот же массив, что и myArray




// Взаимоотношения со String
var text = 'India';

var mySet = new Set(text);  // Set ['I', 'n', 'd', 'i', 'a']
mySet.size;  // 5