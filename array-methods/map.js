var numbers = [1, 2, 3, 4, 5];
//old way ES5
var otherArray = [];

for (var i = 0; i < numbers.length; i++) {
    otherArray.push(numbers[i] * 10);
}

console.log(otherArray);

// new way ES6
const newerArray = numbers.map(function (number) {
    return number * 10;
});
console.log(newerArray);
const newArray = numbers.map(number => number * 10);
console.log(newArray);

// video 24

const users = [{
        user: 'Martin Jones',
        age: 32,
        eyes: 'brown'
    },
    {
        user: 'Jane Doe',
        age: 20,
        eyes: 'blue'
    },
    {
        user: 'John Brown',
        age: 40,
        eyes: 'brown'
    },
];
// const uName = users.map(function(user){
//     return user.user;
// });
// console.log(uName);

const usersNames = users.map(user => user.user);
console.log(usersNames);

usersNames.forEach(function(name){
    const select = document.querySelector('select');
    select.insertAdjacentHTML("afterbegin",`<option value="${name}">${name}</option>`);
})

const paintings = [
    {name:'Mona lisa',width:200,height:200},
    {name:'The scream',width:400,height:600},
    {name:'The last supper',width:600,height:700}
 ]
 const aboutPainting = paintings.map(function(painting){
     return `${painting.name} is ${painting.width} x ${painting.height}`;
 });
 console.log(aboutPainting);

 const cars = [
    {name:'Ford',price:200},
    {name:'Nissan',price:400},
    {name:'Nissan',price:600}
 ];
 function convertPrice(price){
     return price * 200;
 }
 const carsInfo = cars.map(function(car){
     return `${car.name} is ${convertPrice(car.price)} rupies`;
 })
 const info = cars.map(car => `${car.name} is ${car.price * 200} rupies`);
 console.log(info);
 console.log(carsInfo);