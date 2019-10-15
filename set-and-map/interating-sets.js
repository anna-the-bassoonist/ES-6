//we can use array helpers
let mySet = new Set(['Ron', 'Harry', 'Hermiona', 'Voldemort', 'Ron']);

//1.
for (let item of mySet) {
    console.log(item); //it stills doesn't show the duplicate one
};

//2.
mySet.forEach((item) => {
    console.log(item);
});

//3.
let filtered = [...mySet].filter((item)=>{
    return item.startsWith('H');
    //mySet without [] comes the error: Uncaught TypeError: mySet.filter is not a function
    //because mySet is not an array but set.
});
console.log(filtered);
console.log(mySet);