import { Person } from './person';

export interface User {
  id: string;
  person: Person|null;
}
