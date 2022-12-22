export type Product = {
  name: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
}

export type Sizes = 'S' | 'M' | 'L' | 'XL';
