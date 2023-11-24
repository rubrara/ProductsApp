import { ProductData } from '../data/product-data';
import { Product } from '../models/Product';

export class ProductService {
  private products: Product[] = ProductData.products;

  getProducts() {
    return this.products.slice();
  }

  getProduct(id: number) {
    return this.products.at(id);
  }
}
