//ES5:
// function Car(){};
// var car = new Car();

// Car.prototype.status = 'new';
// Car.prototype.wheels = 4;
// Car.prototype.avail = function(){
//     console.log('available');
// }

// var ford = new Car();

// console.log(ford.__proto__);

class Car {
    constructor(){
        this.status = 'new';
        this.wheels = 4;
        this.avail = () => {
            console.log('available');
        }
    }
}

const car = new Car();
const ford = new Car();

ford.color = 'red';
console.log(car);
console.log(ford);