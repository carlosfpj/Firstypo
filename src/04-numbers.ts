(() => {
  let productPrice = 100;
  console.log('Product price = ', productPrice);

  let customerAge: number = 28;
  customerAge = customerAge + '1';
  customerAge = customerAge + 1;

  let productInStock: number;
  console.log('productInStock', productInStock);

  if(productInStock > 10) {
    console.log('is greater');

    let discount = parseInt('asasa');
    console.log('discount', discount);
    if(discount < 200) {
        console.log('apply');
      }else {
        console.log('not apply')
      }
    }

    let hex = 0xfff;
    console.log('hex', hex);
    let bin = 0b10101;
    console.log('num', bin);

    const myNumber: number = 10;
})();
