const value = (name, age) => {
    return `My name is ${name} and my age is ${age}`;
};

console.log(value('Alicja', 28));

const numbers = (x, y) => x + y;
console.log(numbers(1, 3));

const sum = x => x + 10;
console.log(sum(9));

const cars = {
    brands: ['Ford', 'Audi', 'BMW'],
    category: 'sport car',
    message:  function() {
        console.log('works', this.brands);
        return this.brands.map((brand) => {
            console.log('works in map', this.brands);
            setTimeout(() => {console.log('works in next nested function NOT', this.brands);}, 1000)
        })
    }
}
cars.message();

//Fat arrow functions exercise one
const names = ["James", "Ron", "Lisa", "Tommy"];
const randomName = items => items[Math.floor(Math.random() * items.length)];
const randomNumber = (maxNumber, minNumber) => Math.floor(Math.random() * maxNumber) + minNumber;
console.log(`${randomName(names)} magic number is ${randomNumber(5,2)}`);