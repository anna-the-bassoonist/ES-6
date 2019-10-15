


function* generator() {
    //// some code
    yield 'first run'; //value: "first run", done: false
    //// some code
    yield 'second run'; //value: "second run", done: false
    ///// some code 
    yield 'third run'; // value: "third run", done: false
    /////some code 
    //after here there is no yield anymore so by console done:true
    return 'DONE'; // value: "DONE", done: true
}

const gen = generator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());