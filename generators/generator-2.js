function getOrder(){
    //
    return 'pizza and cake';


    ////
}

function* logGenerator() {
    alert('hello, how can i help you?');
    yield 'step 1 completed';

    alert(`your order was ${getOrder()}`);
    yield 'step 2 completed';

    alert('thank you for eating here');
    yield 'step 3 completed';

    return 'finished';
}

let gener = logGenerator();

//calling gener.next(); in console