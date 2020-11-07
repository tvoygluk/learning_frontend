// способ задать прототип у ф-ии

// объект
const robot = {
    isRobot: true
}

// конструктор
function MyRobot (model) {
    this.model = model;
}

// установка прототипа
MyRobot.prototype = robot;

// создание экземпляра класса
const theRobot = new MyRobot('Mark II');

console.log(theRobot.isRobot); // true
console.log(theRobot.model); // Mark II

// в теории можно ещё создать новый экземпляр от экземпляра, но на деле плохая практика (и не сработало почему-то)
// const helperPobot = new theRobot.constructor('WALLY');
const helperPobot = new MyRobot('WALLY');
console.log(helperPobot.isRobot);
console.log(helperPobot.model);

