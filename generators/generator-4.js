

const car = {
    id: 1,
    brand: 'Ford',
    doors: 4,
    wheels: 4,
    color: 'red',
    year: 2017,
    model: 'Mustang'
}

// console.log(car.brand);
// console.log(car.year);
// console.log(car.model);

function *carsGenerator(carObj) {
    yield carObj.brand;
    yield carObj.year;
    yield carObj.model;
}

let newCar = [];

for(let i of carsGenerator(car)){
    newCar = [...newCar,i];
}
console.log(newCar);