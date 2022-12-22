(()=> {
  const login = (data: {email: string,password: number}) =>
   {
    console.log(data.email, data.password);
   }

  login({ email: 'ae@gmail.com', password: 1234 });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
})=> {
    products.push(data);
  }

  addProduct({
    title: 'Pro1',
    createdAt: new Date(1993, 1, 1),
    stock: 12
  });

  addProduct({
    title: 'Pro1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
    size: "M"
  });

  console.log(products)
})()
