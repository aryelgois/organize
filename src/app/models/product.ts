export interface Product {
  id: string;
  name: string;
  img: string;
  isChecked: boolean;
  hint?: string;
  store?: string;
  amount?: number;
  unit: string;
  price?: number;
  currency: string;
  isUnitPrice: boolean;
  keywords: string[];
}
