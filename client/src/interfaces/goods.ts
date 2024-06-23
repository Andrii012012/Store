export interface IGoods {
  id: number;
  name: string;
  price: number;
  volume: (10 | 30 | 50 | 100)[];
  gender: "men" | "women" | "unisex";
  notes: string;
  brand: string;
  img: string;
  popular: number;
  rating: 1 | 2 | 3 | 4 | 5;
  comments: [{
    description: string;
    date: string;
    stars: number;
    author: {
      name: string;
      lastName: string;
    };
    screens?: string[];
    videos?: string[];
  }];
}

export interface IGoodsCategory {
  [key: string]: IGoods[];
}
