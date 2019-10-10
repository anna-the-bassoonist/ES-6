const brands = ['Ford', 'Nissan'];
const othBrands = ['Audi', 'Fiat'];

// const newArray = brands.concat(othBrands);
// newArray.push('Seat');

const newArray = [...brands, ...othBrands, 'blabla'];
console.log(newArray);

//Refactor the code using ES6 and the rest operator.

function totalDistance1(distance1, distance2, distance3) {
    var distancess = [distance1, distance2, distance3]
    var totall = 0;
    for (var i = 0; i < distancess.length; i++) {
        totall += distancess[i]
    }
    return totall;
}
console.log(totalDistance1(200, 100, 200))


function totalDistance(...distances) {
    // let total = 0;
    // distances.map(distance => total += distance);
    // distances.forEach(distance => total += distance);
    // return total;
    return distances.reduce((carry, distance) => (carry + distance), 0);

}
console.log(totalDistance(200, 100, 200));

//Refactor the code:

function showItems1(arg1,arg2,arg3){
   var arr = [arg2,arg3].concat(arg1)
   console.log(arr)
}
showItems1(["dogs","cats"],"turtles","sharks");

function showItems(arg1,...arg2){
    let arr = [...arg2,...arg1];
    console.log(arr)
 }
// function showItems(...arg){
//     let arr = [arg[1],arg[2],...arg[0]];
//     console.log(arr)
//  }
 showItems(["dogs","cats"],"turtles","sharks");