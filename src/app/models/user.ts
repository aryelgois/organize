import { Person } from './person';

export interface User {
  id: string;
  person: Person|null;
}

export function isSameUser(userA: User, userB: User): boolean {
  const personA = userA.person;
  const personB = userB.person;
  return userA.id === userB.id || (personA && personB && personA.id === personB.id);
}
