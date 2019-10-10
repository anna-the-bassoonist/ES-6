//Promise can be:

//1. Unresolved, Pending
//2. Resolved, Fulfiled
//3. Rejected

let promise = new Promise((resolved, rejected) => {

    setTimeout(() => {
        resolved();
        // rejected(); //means everything got ok

    }, 5000);
});

// .then() comes ONLY when the promise was resolved

promise
    .then(() => console.log('finished'))
    .then(() => console.log('finished2222'))
    .catch(()=> console.log('damn'));

//.catch() comes ONLY when the promise was rejected