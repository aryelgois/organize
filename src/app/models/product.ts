import { AbstractProduct } from './abstract-product';
import { List } from './list';

export interface Product {
  id: string;
  abstract: AbstractProduct;
  name: string|null;
  image: string|null;
  list: List;
  isChecked: boolean;
  hint: string|null;
  store: string|null;
  amount: number|null;
  unit: string|null;
  price: number|null;
  isUnitPrice: boolean;
  currency: string;
}
