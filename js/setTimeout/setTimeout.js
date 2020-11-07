const first = 1;
const second = 2;
const addOne = (a,b) => console.log(a+b);

const addtwo = (a,b) => {
    console.log(a+b+a);
    // setTimeout(addtwo,2000,first, second);
    // clearTimeout(addtwo)
};

// сначала выполнится синхронный код
// setTimeout(addOne,0,first, second);
// console.log('zero');

// функция ниже ничего не покажет => сначала выполнится синхронный код
const someTimerName = setTimeout(addtwo,1000,first, second);
clearTimeout(someTimerName)

// функция запустится не раньше чем через 1000мс

let count = 0;

let timerId = setTimeout(function meme() {
    if (count<3) {
        console.log('me-me-me');
        timerId = setTimeout(meme, 999);
        count++;
    } else {
        clearTimeout(timerId)
    }

}, 999);

setInterval(() => {
    console.log('------')
}, 999);