(()=> {
  let prices = [1,76,87,23, 'hola', true];
  prices.push(20);
  prices.push('asda');
  prices.push(false);

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean)[] = ['hola', true];
  mixed.push(3);

  console.log(mixed);
  console.log(products);
  console.log(prices);

  let numbers = [1,2,3,4,4];
  const numbersmapped = numbers.map(item => (item * 2) + 'hola');
  console.log('numbers: ' + numbersmapped);
})()
