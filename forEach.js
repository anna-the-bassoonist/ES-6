  const artists = ['Clapton', 'Riverside', 'Coma', 'Myslovitz'];
  let template = '';

  artists.forEach(function (artist) {
    template += `<div>the name of the artist is: ${artist}</div>`;
  })

  document.body.insertAdjacentHTML('afterbegin', template);


  var purchases = [{
      quantity: 2,
      amount: 100
    },
    {
      quantity: 5,
      amount: 100
    },
    {
      quantity: 10,
      amount: 100
    }
  ]

  var total = 0;

  // for( var i = 0; i<purchases.length; i++){
  //  total += purchases[i].quantity * purchases[i].amount;
  // }

  purchases.forEach(function (purchase) {
    total += purchase.quantity * purchase.amount;
  })
  console.log(total);

  //forEach exercise:
  const products = [{
      name: 'Iphone',
      price: 200
    },
    {
      name: 'Motorola',
      price: 70
    },
    {
      name: 'Samsung',
      price: 150
    },
    {
      name: 'Sony',
      price: 98
    },
    {
      name: 'Windows phone',
      price: 10
    }
  ];

  let templateOfP = '';


  products.forEach(function (product) {
    function discount() {
      if (product.price < 100) {
        return `<span>On sale !!</span>`;
      } else {
        return '';
      }
    }
    templateOfP += `<div class="product">
                      <h1>${product.name}</h1>
                      <strong>Price: $${product.price} </strong>
                      ${discount()}
                    </div>`;
  });
  document.body.insertAdjacentHTML('afterbegin', templateOfP);