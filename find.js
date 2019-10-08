const cars = [
    {brand:'Ford',price:200,available:2,type:'Sport car'},
    {brand:'Nissan',price:400,available:5,type:'Wagon'},
    {brand:'Chevy',price:600,available:4,type:'Sport car'},
    {brand:'Porsche',price:100,available:1,type:'Urban'}
 ];

 function getResults(price,type){
     return cars.find(function(car){
         return car.price < price
            &&  car.available > 0
            &&  car.type === type;
     });
 }

document.querySelector('.search').addEventListener('click',function(){
    let price = parseInt(document.querySelector('#price').value);
    let type = document.querySelector('#type').value;

    let results = getResults(price,type);

    if(results) {
        console.log(`found ${results.brand} for $ ${results.price}`);
    } else {
        console.log(`sorry no car for you today`);
    }
})
 