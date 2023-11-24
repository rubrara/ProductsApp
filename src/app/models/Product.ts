import { Review } from '../models/Review';

export interface Product {
  id: number;
  productName: string;
  productCode: string;
  description: string;
  price: number;
  img?: string;
  quantityInStock?: number;
  hasReviews?: boolean;
  reviews?: Review[];
}
