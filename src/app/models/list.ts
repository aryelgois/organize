import { Product } from './product';

export interface List {
  id: string;
  name: string;
  img: string;
  products: Product[];
}
