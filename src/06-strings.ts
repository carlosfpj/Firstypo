(()=> {
  let productTitle = 'My I\'m amazing product';
  // productTitle = null;
  // productTitle = 123;

  productTitle = "my amazing product changed";
  console.log('productTitle', productTitle);

  const productDescription = 'descripción del producto';
  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `
  console.log(summary);

})()
