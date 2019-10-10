console.log('foo'.repeat(3));

var word = 'camera';

//ES5:(gets index)
console.log(word.indexOf('ca'));
console.log(word.indexOf('5555'));

//ES6:(gets true or false)
//starts with:
console.log(word.startsWith('ca'));
console.log(word.startsWith('ca',2));
console.log(word.startsWith('am',1));

//ends with:
console.log(word.endsWith('era'));
console.log(word.endsWith('era',4));
console.log(word.endsWith('me',4));

//includes:
console.log(word.includes('ame'));
console.log(word.includes('ame',2));
console.log(word.includes('me',2));