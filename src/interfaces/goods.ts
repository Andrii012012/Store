export interface IGoods {
  id: string;
  description: string;
  price: number;
  volume: (10 | 30 | 50 | 100)[];
  gender: "men" | "women" | "unisex";
  notes: string;
  brand: string;
}
