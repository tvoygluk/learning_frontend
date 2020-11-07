const obj = {
    name: 'MM',
    age: 30,
}

const obj2 = {
    name: 'LL',
    age: 44,
}

function whoFun (message1, message2) {
    console.log(message1 + ' ' + this.name + ' ' + message2 + ' ' + this.age);
} 

// работает аналогично call, но параметры нужно передавать в массиве
whoFun.apply(obj, ['Привет, я', 'мне']); // Привет, я MM мне 30

whoFun.apply(obj2, ['Привет, я', 'мне']); // Привет, я LL мне 44

// apply вызывается на месте вызова ф-ии