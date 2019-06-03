export type vote = -1 | 0 | 1;

export interface Keyword {
  id: string;
  text: string;
  score: number;

  // different for each user
  userIsAuthor: boolean;
  userVote: vote;
}
