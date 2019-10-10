

// czy to bezpieczna liczba całkowita:
console.log(Number.isSafeInteger(300)); //true
console.log(Number.isSafeInteger(34)); //true
console.log(Number.isSafeInteger(0.4343434)); //false
console.log(Number.isSafeInteger(0,4343434)); //true

//czy to liczba calkowita
console.log(Number.isInteger(300)); // true
console.log(Number.isInteger(-1000)); // true
console.log(Number.isInteger(0.1)); //false

console.log(Math.trunc(42.8));//rounding //42
console.log(Math.trunc(0.1));// 0
console.log(Math.trunc(-0.1));// -0