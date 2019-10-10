const url = 'https://jsonplaceholder.typicode.com/posts/1';

// console.log(fetch(url))

fetch(url)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('fucked up', error));