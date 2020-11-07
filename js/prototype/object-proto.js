// прототип __proto__ у объекта
const robot = {isRobot: true}
const cyborg = {}
cyborg.__proto__ = robot;
console.log(cyborg.isRobot); // true

// другая запись
const cyberMan = {
    __proto__: robot
}
console.log(cyberMan.isRobot); // true

// ещё другая запись
const roboCop = {name: 'Robocop'}
Object.setPrototypeOf(roboCop, robot)
console.log(roboCop.isRobot); // true

// цикл for in...
for (const key in roboCop) {
    console.log(`${key}: ${roboCop[key]}`);
}
// ... пройдётся по всей цепочке прототипов:
// name: Robocop
// isRobot: true

// проверка наличия собственного св-ва у объекта
console.log(roboCop.hasOwnProperty('name')); // true
console.log(roboCop.hasOwnProperty('isRobot')); // false

// цикл for in с проверкой на собственные св-ва
for (const key in roboCop) {
    if (!roboCop.hasOwnProperty(key)) {
        continue
    }
    console.log(`${key}: ${roboCop[key]}`)
}
// name: Robocop

// проверка на наличие прототипа
console.log(robot.isPrototypeOf(roboCop)); // true

// получить только прототип объекта
console.log(Object.getPrototypeOf(roboCop)); 
// { isRobot: true }