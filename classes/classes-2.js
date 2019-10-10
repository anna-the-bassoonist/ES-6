// class Car{
//     constructor(options){
//         this.status = options.status;
//         this.wheels = options.wheels;
//         this.avail = options.avail;
//     }
// }

class Car{
    constructor({status,wheels,avail}){
        this.status = status;
        this.wheels = wheels;
        this.avail = avail;
    }
}
const car = new Car({
    status: 'new',
    wheels: 4,
    avail: ()=>{console.log('avail')}
})

console.log(car);