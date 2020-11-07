const obj = {
    name: 'MM',
    age: 30,
}

function whoFun (message1, message2) {
    console.log(message1 + ' ' + this.name + ' ' + message2 + ' ' + this.age);
} 

const obj2 = {
    name: 'LL',
    age: 44,
}

// работает аналогично call, но идёт строгая привязка к переменной 
const bindFun = whoFun.bind(obj, 'Привет, я', 'мне'); 
bindFun(); // Привет, я MM мне 30

const bindFun2 = whoFun.bind(obj2, 'Привет, я', 'мне'); 
bindFun2(); // Привет, я LL мне 44