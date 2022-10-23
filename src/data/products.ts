export interface IProducts {
  id: number
  category: string
  price: number
  name: string
  image: string
}

export const products: IProducts[] = [
  {
    id: 1,
    category: 'delicacies',
    price: 5,
    name: 'Cookies',
    image: '/delicacies1.png',
  },
  {
    id: 2,
    category: 'delicacies',
    price: 6,
    name: 'Croissant',
    image: '/delicacies2.png',
  },
  {
    id: 3,
    category: 'delicacies',
    price: 4,
    name: 'Croissant',
    image: '/delicacies3.png',
  },
  {
    id: 4,
    category: 'coffee',
    price: 7,
    name: 'Black Coffee',
    image: '/coffee1.png',
  },
  {
    id: 5,
    category: 'coffee',
    price: 12,
    name: 'Pure Coffee',
    image: '/coffee2.png',
  },
  {
    id: 6,
    category: 'coffee',
    price: 9,
    name: 'Milk Coffee',
    image: '/coffee3.png',
  },
  {
    id: 7,
    category: 'coffee',
    price: 9,
    name: 'Moka Coffee',
    image: '/coffee4.png',
  },
  {
    id: 8,
    category: 'cake',
    price: 6,
    name: 'Cream Cake',
    image: '/cake1.png',
  },
  {
    id: 9,
    category: 'cake',
    price: 5,
    name: 'Chocolate Croissant',
    image: '/cake2.png',
  },
  {
    id: 10,
    category: 'cake',
    price: 15,
    name: 'Pancake',
    image: '/cake3.png',
  },
  {
    id: 11,
    category: 'cake',
    price: 12,
    name: 'Milk Cake',
    image: '/cake4.png',
  },
]
