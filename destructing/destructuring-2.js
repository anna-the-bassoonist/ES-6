const cars = ['camaro','blabla','nowa','gwno'];

// const camaro = cars[0];

//destructuring: we can access by name and dont have to know the position-index
// const [camaro, nowa, gwno] = cars;
// console.log(gwno);

const [camaro,...rest] = cars;
console.log(camaro,rest);

// const [blabla,kkk,...others] = cars;
// console.log(blabla,kkk,others);
