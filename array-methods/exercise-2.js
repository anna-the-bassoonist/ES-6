const cupcake = document.querySelector('.cupcake');
const container = document.querySelector('.orders');

const cupcakes = [
    {id:1, flavor: 'Strawberry'},
    {id:2, flavor: 'Apple'},
    {id:3, flavor: 'Banana'},
];

let randomCupcake;
let orderNumber = 0;
const baseAmount = 5;
let finalAmount;
const discountID = 2;
const discountAmount = 3;
let message;

cupcake.addEventListener('click', function(){
    randomCupcake = Math.floor(Math.random() * cupcakes.length) + 0;
    console.log(randomCupcake);
    orderNumber += 1;
    console.log(orderNumber);
    finalAmount = discountID == cupcakes[randomCupcake].id ? (baseAmount - discountAmount) : baseAmount;
    console.log(finalAmount);
    message = '<div>- You won a ' + cupcakes[randomCupcake].flavor + ' for ' + finalAmount + '$ , your order # is '+ orderNumber + '</div>'
    container.insertAdjacentHTML('beforeend',message)

})