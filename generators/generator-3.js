function* brands() {
    /// function //
    yield 'Ford';

    /// function //
    yield 'Nissan';
    yield 'Toyota';
    yield 'Chevy';
    yield 'Honda';
}

const generet = brands();

// console.log(generet.next());
// console.log(generet.next());
// console.log(generet.next());
// console.log(generet.next());
// console.log(generet.next());
// console.log(generet.next());

let array = [];
for (var i of brands()) {
    // console.log(i);
    // array.push(i);
    array = [...array,i] // ES6
}
console.log(array);