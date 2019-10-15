const names = ["Ann", "Aron", "Arek"];

for(let [index, value] of names.entries()){
    console.log(index);
}

const numbers = [1,5,6,7,9];
let total = 0;

for(let number of numbers){
total += number;
}
console.log(total)


const namesTest = ["Ann", "Aron", "Arek"];
for(let name of namesTest) {
    console.log(name)
}

const person = { name:'Anna', location: 'Graz', car:'grey' };
for(let value in person) {
    console.log(person[value])
}

