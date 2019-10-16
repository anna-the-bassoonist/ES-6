// map- add data inside with a refference key
// set- create array with some values inside

let superHero = new Map();

superHero.set('Batman', { //set- adding sth to the map (key, value of this key)
    realName: 'Bruce Wayne',
    power: 'Millonaire',
    weakness: 'none'
});

superHero.set('Superman', {
    realName: 'Clark Kent',
    power: 'all',
    weakness: 'not having power'
})

superHero.set('Whatever', 'just a text');

console.log(superHero);
console.log(superHero.get('Batman')); // getting the data- calling the refferece key // getting the values of batman
console.log(superHero.get('Batman').realName); // getting the name

superHero.set('trigger', () => {
    console.log('hello')
});
superHero.get('trigger')(); // triggering hello