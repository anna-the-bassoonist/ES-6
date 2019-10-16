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
});


console.log(superHero.size); // checking the size
console.log(superHero.has('Batman')); //checking if inside is..//true
console.log(superHero.delete('Superman')); // giving the true
console.log(superHero);


superHero.clear(); // clearing the map
console.log(superHero);