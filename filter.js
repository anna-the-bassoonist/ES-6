const products = [{
        name: 'ipad',
        category: 'devices',
        number: 20,
        price: 200
    },
    {
        name: 'sony 3d',
        category: 'tv',
        number: 0,
        price: 400
    },
    {
        name: 'E256',
        category: 'blender',
        number: 3,
        price: 50
    },
    {
        name: 'super vision',
        category: 'tv',
        number: 7,
        price: 500
    },
    {
        name: 'iphone 7',
        category: 'phones',
        number: 40,
        price: 2
    }
];

const result = products.filter(function (product) {
    return product.category === 'tv';
});
console.log(result);

const otherResult = products.filter(function (product) {
    return product.category === 'tv' && product.number > 0 && product.price > 200;
})
console.log(otherResult);

const channels = [{
        name: 'HBO',
        premium: true
    },
    {
        name: 'LIFE',
        premium: false
    },
    {
        name: 'Max',
        premium: true
    },
    {
        name: 'Cooking channel',
        premium: false
    },
    {
        name: 'WOBI',
        premium: false
    }
];
const premiumChan = channels.filter(channel => channel.premium);
console.log(premiumChan);

const user = {
    name: 'Francis',
    premium: true,
    premiumChannels: function () {
        // GET THE PREMIUM CHANNELS IS "PREMIUM" IS true
        // return channels.filter(chan => chan.premium && this.premium);
        const $this = this; // ES5
        return channels.filter(function (channel) {
            return channel.premium && $this.premium;
        })

    },
    channels: function () {
        // GET THE NON-PREMIUM CHANNELS
        return channels.filter(chan => !chan.premium);
    }
}
console.log(user.premiumChannels(channels));
console.log(user.channels(channels));