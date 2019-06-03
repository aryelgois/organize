import { Keyword } from './keyword';

export interface AbstractProduct {
  id: string;
  name: string;
  defaultUnit: string|null;
  keywords: Keyword[];
}
