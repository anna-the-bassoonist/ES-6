const stores = {
    store1: 'New York',
    store2: 'India',
    [Symbol.iterator]: function* () {
        yield this.store1;
        yield this.store2;
    }
}
const car = {
    id: 1,
    brand: 'Ford',
    doors: 4,
    wheels: 4,
    color: 'red',
    year: 2017,
    model: 'Mustang',
    stores: stores,
    [Symbol.iterator]: function* () {
        yield this.brand;
        yield this.year;
        yield this.model;
        yield this.stores;
    }
}

function* carsGenerator(carObj) {
    yield carObj.brand;
    yield carObj.year;
    yield carObj.model;
    yield* carObj.stores;
}

let newCar = [];

for (let i of car) {
    newCar = [...newCar, i];
}
console.log(newCar);