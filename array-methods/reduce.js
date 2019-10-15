const previous = 200;
const current = [{
        expence: 'guitar',
        amount: 200
    },
    {
        expence: 'mic',
        amount: 100
    },
    {
        expence: 'starp',
        amount: 300
    },
];

const results = current.reduce(function (carry, item) {
    return carry + item.amount;
}, previous)
console.log(results);

const users = [{
        name: 'Francis',
        lastname: 'Norton',
        age: 25
    },
    {
        name: 'Anna',
        lastname: 'Norton',
        age: 25
    },
    {
        name: 'Martha',
        lastname: 'Norton',
        age: 25
    },
    {
        name: 'Julia',
        lastname: 'Norton',
        age: 25
    },
]

const names = users.reduce(function (carry, user) {
    carry.push(user.name);
    return carry;
    // return `${carry} ${user.name}`;
}, []);
console.log(names);

const trips = [{
        to: 'Brazil',
        distance: 1000
    },
    {
        to: 'Chine',
        distance: 2500
    },
    {
        to: 'India',
        distance: 3000
    }
];

const kilometers = trips.reduce(function (carry, km) {
    return carry + km.distance;
}, 0);
console.log(kilometers);
//  const kilom = trips.reduce((carry,km) => (carry + km.distance),0);
//  console.log(kilom);

const computers = [{
        type: 'Laptop',
        price: 124,
        os: 'Windows'
    },
    {
        type: 'Desk',
        price: 124,
        os: 'Mac'
    },
    {
        type: 'Desk',
        price: 124,
        os: 'Windows'
    },
    {
        type: 'Laptop',
        price: 124,
        os: 'Mac'
    },
    {
        type: 'Laptop',
        price: 124,
        os: 'Windows'
    },
];

const compTypes = computers.reduce(function (carry, {os, price}) {
    carry[os] = (carry[os] + 1) || 1;
    // console.log(carry);
    return carry;
}, {});
console.log(compTypes);

//other possitibility:
const macWinCount = computers.reduce(function (carry, item) {
    return item.os === 'Windows' ? {
        windows: carry.windows + 1,
        mac: carry.mac
    } : {
        windows: carry.windows,
        mac: carry.mac + 1
    }
    // if (item.os === 'Windows') {
    //     return {
    //         windows: carry.windows + 1,
    //         mac: carry.mac
    //     }
    // } else {
    //     return {
    //         windows: carry.windows,
    //         mac: carry.mac + 1
    //     }
    // }
}, {
    mac: 0,
    windows: 0
});
console.log(macWinCount);