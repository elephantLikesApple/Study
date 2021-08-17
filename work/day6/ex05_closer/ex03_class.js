class Car {
    constructor(name, speed) {
        this.name = name
        this.speed = speed
    }
    printName() {
        console.log(this.name)
    }
}

var car1 = new Car("bmw", 220);
var car2 = new Car("hyndai", 225);
var car3 = new Car("honda", 125);
console.log(car1);
console.log(car2);
console.log(car3);

car2.printName()