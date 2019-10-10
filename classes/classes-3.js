class Car {
    constructor(){
        this.status = 'new';
        this.wheels = 4;
        this.avail = () => {
            console.log('available');
        }
    }

    otherFunction(){
        console.log('hey'); // it will not console.log
    }
}

class Ford extends Car {
    constructor(){
        super(); //bringing everything from class Car
    }

}

const car = new Car();
const ford = new Ford();

ford.color = 'red';
console.log(car);
console.log(ford);