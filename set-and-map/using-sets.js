

let mySet = new Set(['Ron', 'Harry', 'Hermiona', 'Hagrid','Ron']);

mySet.add('Dumbledore');
mySet.add('Voldemort').add('Syrius');

console.log(mySet.has('Harry')); //checking if set has a value// true or false

mySet.delete('Hagrid'); //deleting

console.log(mySet.size); // checking the size of set

mySet.clear(); // clearing the set

//by console Ron is shown only one time, set doesn't add the same values; it skips the duplicators
console.log(mySet);