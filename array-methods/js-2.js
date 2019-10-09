var divs = document.getElementsByTagName('div');

console.log(divs);

for(let i = 0; i < divs.length; i++){
    divs[i].addEventListener('click', function(){
        console.log('you clicked div #' + i);
    })
}