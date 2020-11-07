// конструктор
function MyRobot (model) {
    this.model = model;
}

// Добавление методов
MyRobot.prototype.batary = () => console.log('Кончается зарядка');

// при таком подходе не будет создаваться каждый раз новый метод, а новые 
// экземпляры класса будут ссылаться на 1 метод

const cleanerRobot = new MyRobot('nany');

cleanerRobot.batary(); // Кончается зарядка