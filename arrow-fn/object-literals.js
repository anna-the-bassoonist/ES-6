// const request = (url, data) => {
//     // $.ajax({method:'post',url:url,data:data})
//     $.ajax({method:'post',url,data})
// }
// request('http://comic.com',{car:ford});

const createCharacter = (name, powers) => {
    return {
        name,
        powers,
        getFriends() {
            return 'Luis Lane'
        },
        getEnemies() {
            return 'Skeletor'
        }
    }
}
const characterObj = createCharacter('superman', 'fly');
console.log(JSON.stringify(characterObj));
console.log(characterObj.getFriends());


//Object literals exercise one
//Refactor the code, make it really slim :)

const createObject = (name, lastname, age) => {
    return {
        name,
        lastname,
        age,
    }
}
console.log(createObject("Francis", "Jones", 23))