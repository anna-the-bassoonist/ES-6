const url = 'https://jsonplaceholder.typicode.com/posts/';

// console.log(fetch(url))

fetch(url, {
    // method: 'GET'
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({title: 'some dumm title'}),
    // mode: 'cors',
    // redirect: ''
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('fucked up', error));