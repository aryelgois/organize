import { Product } from './product';
import { User } from './user';

export interface List {
  id: string;
  owner: User;
  name: string;
  image: string|null;
  products: Product[];
}
