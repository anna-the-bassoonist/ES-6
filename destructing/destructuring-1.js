const user = {
    name: 'Markus',
    lastname: 'Jones',
    age: 26
};

//ES5:
// var name = user.name;
// var lastname = user.lastname;
// var age = user.age;

//ES6:
// const {name} = user;
// const {lastname} = user;
// const {age} = user;

//easier way:
const {name,lastname,age} = user;

console.log(name);
console.log(lastname);
console.log(age);

const message = (user) => {
    console.log(`name ${user.name} ${user.lastname},age ${user.age}`);
}
message(user);

//destructuring:
const messaged = ({name,lastname,age},salute) => {
    console.log(`name ${name} ${lastname},age ${age}, ${salute}`);
}
messaged(user,'hey');