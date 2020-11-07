const obj = {
    1:1,
    2:2,
    3:3,
    fun() {
        console.log(this);
    },
    fun2: () => console.log(this),
}
// this в обычных ф-ях определяется фактом вызова
obj.fun(); 
// {
//     '1': 1,
//     '2': 2,
//     '3': 3,
//     fun: [Function: fun],
//     fun2: [Function: fun2]
//   }

// this в СТРЕЛОЧНЫХ ф-ях определяется фактом объявления
obj.fun2(); // {}

// call не сработает со СТРЕЛОЧНОЙ ФУНКЦИЕЙ
obj.fun2.call(obj); // {}

// обычная ф-ия без параметров
function logTHIS () {
    console.log(this);
}
// вызов ф-ии в контексте объекта obj
logTHIS.call(obj)

// стрелочная ф-ия
const arrowFun = () => console.log(this);
// вызов ф-ии в контексте объекта obj
arrowFun.call(obj) // {} - STILL NOT WORKING!!! 

// обычная функция с параметрами
function parFun (name, age) {
    console.log(`Привет, я ${name}, мне ${age}, а вот контекст вызова данной ф-ии (сериализованный): ${JSON.stringify(this)}`);
}
// вызов call с параметрами
parFun.call(obj, 'Maxim', '30');

// call вызывается на месте вызова ф-ии