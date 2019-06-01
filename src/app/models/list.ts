import { Product } from './product';

export interface List {
  id: string;
  name: string;
  image: string;
  products: Product[];
}
