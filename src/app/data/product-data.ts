import { Product } from '../models/Product';

export class ProductData {
  static products: Product[] = [
    {
      id: 0,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      description: 'Leaf rake with 48-inch wooden handle',
      price: 19.95,
      quantityInStock: 15,
      img: 'data:image/png;base64,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',
      hasReviews: true,
    },
    {
      id: 1,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      quantityInStock: 2,
      img: 'data:image/jpeg;base64,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',
      hasReviews: true,
    },
    {
      id: 2,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      description: 'Curved claw steel hammer',
      price: 8.9,
      quantityInStock: 8,
      img: 'data:image/jpeg;base64,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',
      hasReviews: true,
    },
    {
      id: 3,
      productName: 'Saw',
      productCode: 'TBX-0022',
      description: '15-inch steel blade hand saw',
      price: 11.55,
      quantityInStock: 6,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvK6gXDq7j7LRcZvfy89W8J8Iht3-6A4pHw&usqp=CAU',
      hasReviews: false,
    },
    {
      id: 4,
      productName: 'Video Game Controller',
      productCode: 'GMG-0042',
      description: 'Standard two-button video game controller',
      price: 35.95,
      quantityInStock: 12,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKAz52Bbq-2KO5dHNzJbl5Wkxn-AojioKeUg&usqp=CAU',
      hasReviews: true,
    },
  ];
}
