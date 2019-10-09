//11. 
function request(page, id) {
    var URL = `http://server.com/${page}/${id}`;

    console.log(URL);
}
request('pages', 9);


//12. 

let list = document.querySelector('.user-list');

function getUser(name, lastname) {
    let template = `
    <div class="user">
        <div>${name}</div>
        <div>${lastname}</div>
    </div>
    `
    list.insertAdjacentHTML('beforeend', template);
}

getUser('Flo', 'Bud');

//13.
console.log(String.raw `goooood`);

//14.15 Ex.1

let person = {
    name: 'Anna',
    age: 25,
    position: 'developer',
    salary: 2500
}

console.log(`My name is ${person.name}, I'm ${person.age} years old. I work as ${person.position} and make $${person.salary}.`);

//16. Exercise two: 
const allPlayers = document.querySelector('.players');
const players = [{
        jersey: 56,
        name: 'Djounte Murray',
        position: 'Point guard',
        PPG: 2.6
    },
    {
        jersey: 98,
        name: 'Denis Rodman',
        position: 'Small Forward',
        PPG: 10.8
    },
    {
        jersey: 1,
        name: 'Michael Jordan',
        position: 'Small Forward',
        PPG: 345.6
    },
    {
        jersey: 2,
        name: 'Lebron James',
        position: 'Shooting Guard',
        PPG: 26.7
    },
    {
        jersey: 33,
        name: 'Patrick Ewing',
        position: 'Center',
        PPG: 20.2
    }
]
players.forEach(function (player) {
    
    let templatePlay= `
     <li>${player.jersey} - ${player.name} -- Position: ${player.position} -- PPG: ${Math.round(player.PPG)}</li>    
    `
    allPlayers.insertAdjacentHTML('beforeend', templatePlay);
});

// other possibility: 
// let listOf = '';

// for (let i = 0; i < players.length; i ++){
//     let player = players[i];

//     listOf += ` <li>${player.jersey} - ${player.name} -- Position: ${player.position} -- PPG: ${Math.round(player.PPG)}</li>  `
// }

// allPlayers.insertAdjacentHTML('beforeend', listOf)