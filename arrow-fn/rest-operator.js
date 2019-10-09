//ES5:

function argsu(a1, a2, a3) {
    const arguments = [a1, a2, a3];
    console.log(arguments);
}
argsu(1, 2, 3);


//ES6

function hey() {
    console.log('hey');
}

function args(...args) {
    console.log(arguments[2]);
    console.log(`my name is ${args[0]}, i am ${args[1]} years old and i say ${args[2]}`)
}
args(1, 2, hey());