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

// for(let key of superHero){
//  console.log(key[0]); // key : Batman, Superman
//  console.log(key[1]); // value : realName,...,...
// }

// the same with destructuring:
for (let [key, value] of superHero) {
    console.log(key);
    console.log(value);
}

//the same with forEach:
superHero.forEach((value, key) => {
    console.log(key);
    console.log(value);
});

// console.log(Array.from(superHero.keys()));
// console.log(Array.from(superHero.values())); // array with objects of values

let superValues = Array.from(superHero.values()).map(item => {
    return item.realName;
})

console.log(superValues)