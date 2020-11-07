// Объект WeakSet - коллекция, элементами которой могут быть только объекты. 
// Ссылки на эти объекты в WeakSet являются слабыми. 
// Каждый объект может быть добавлен в WeakSet только один раз.

//Главным отличия от объекта Set:

// WeakSet содержит только объекты, тогда как Set - значения любого типа.

// Ссылки на объекты в WeakSet являются слабыми: если на объект, 
// хранимый в WeakSet нет ни одной внешней ссылки, то сборщик мусора удалит этот объект. 

// Также это означает, что WeakSet не итерируем, 
// так как нет возможности получить список текущих хранимых в WeakSet объектов.  

var ws = new WeakSet();

var baz = {};
var obj = {};
var foo = {};

ws.add(baz);
ws.add(obj);

ws.has(baz); // true
ws.has(foo);    // false, foo не добавлен в WeakSet

ws.delete(baz); // удаляет baz из WeakSet
ws.has(baz);    // false, baz был удалён




// Взаимоотношения с объектом Array
var myArray = [baz, obj, foo];

// Используйте конструктор Set для преобразования Array в Set
var mySet = new WeakSet(myArray);

console.log(mySet.has(obj)); // вернёт true

console.log(mySet); // WeakSet { [items unknown] }