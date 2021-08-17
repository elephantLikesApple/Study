// class Car {
//     String m_strName;
//     Car(String name) {
//         this.m_strName = name;
//     }
// }

function Car(name, speed) {
    this.name = name;
    this.speed = speed;

    this.printName = ()=> { // 객체를 만들 때마다 이 코드가 복붙됨
        console.log(this.name);
    }
}

Car.prototype.printName2 = function() { // 한번만 코드를 작성해도, Car 객체가 모두 이 함수를 참조한다.(코드 중복 x)
    console.log(this.name);
}


var car1 = new Car("bmw", 220);
var car2 = new Car("hyndai", 225);
var car3 = new Car("honda", 125);
console.log(car1);
console.log(car2);
console.log(car3);

car1.printName();
car1.printName2();