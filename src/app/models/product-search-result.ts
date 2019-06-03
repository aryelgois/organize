import { AbstractProduct } from './abstract-product';
import { Product } from './product';

export interface ProductSearchResult {
  title: string;
  items: (AbstractProduct|Product)[];
}
