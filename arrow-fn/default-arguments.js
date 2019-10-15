//ES5:

function cars(brand) {
    if (!brand) {
        brand = 'ford';
    }
    console.log(`brand is ${brand}`);
}
cars();

//----------------
//ES6:
// function carsES6(brand = 'ES6') {
//     console.log(`brand is ${brand}`);
// }
// carsES6();

function randomBrand(){
    const brands = ['ford','audi','bmw'];
    return brands[Math.floor(Math.random() * brands.length)];
}

function carsES6(brand = randomBrand()) {
    console.log(`brand is ${brand}`);
}
carsES6('ferrari');

//Default arguments exercise one
//We want to run a function that greets the user by his name, but if the name is not provided we want to show a default name.

 //Old ES5 code:

function greeting(name){
   if(name === undefined){
       name = 'user'
   }
   return 'Hello '+ name;
}
console.log(greeting())

//ES6:

function greeting(name = 'user'){
    return `Hello ${name}`;
 }
 console.log(greeting())