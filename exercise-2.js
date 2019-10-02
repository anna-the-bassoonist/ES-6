var cupcake = document.querySelector('.cupcake');
var container = document.querySelector('.orders');

var cupcakes = [
    {id:1, flavor: 'Strawberry'},
    {id:2, flavor: 'Apple'},
    {id:3, flavor: 'Banana'},
];

var randomCupcake;
var orderNumber = 0;
var baseAmount = 5;
var finalAmount;
var discountID = 2;
var discountAmount = 3;
var message;

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