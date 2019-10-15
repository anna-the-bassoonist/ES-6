const users = [
    {name:'Francis', lastname: 'Jones', age: 26},
    {name:'Lusia', lastname: 'Monon', age: 26},
    {name:'Aga', lastname: 'Bones', age: 26}
];
//ES5
// const lastname = users[0].lastname;

const [{lastname: firstLastname}, {lastname: secondLastname}] = users;

console.log(firstLastname);
console.log(secondLastname);


const [{lastname}] = users;
console.log(lastname);

const otherUsers = {
    names:['Francis','Ana','Ben']
};


const {names} = otherUsers;
console.log(names);

const {names:[name1,name2]} = otherUsers; 
// console.log(name1);
console.log(name2);

