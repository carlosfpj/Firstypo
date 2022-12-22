(() => {

  type Data = {
    email: string
    password: number
  }

  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const login = (data: Data) => {
    console.log(data.email, data.password);
  }

  login({ email: 'ae@gmail.com', password: 1234 });



  const products: Product[] = [];

  const addProduct = (data: Product) => {
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

  products.push({
    title: 'hola',
    createdAt: new Date(1992,1,1),
    stock: 1,
    size: 'M'
  });

  console.log(products)
})()
