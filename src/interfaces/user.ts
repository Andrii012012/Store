export interface IHistoryOrder {
  id: string;
  fromOrderDate: string;
  price: number;
  statusDelivery: "Ожидает на почте" | "Получен" | "Отменен" | "Ожидает оплаты";
  delivery: "Доставка курьером:" | "Доставка почтой:";
  waitDate: string;
  consistOrder:
    | {
        id: string;
        name: string;
        things: string;
        volume: string;
        id_order: string;
      }[]
    | [];
}

export interface IUser {
  id: string;
  login: number;
  name: string;
  status: string;
  email: string;
  avatar: string;
  cashback: number | string;
  password: number | string;
  marks: number;
  gender: "women" | "men";
  historyBonus: {
    date: string;
    marks: number;
    specificDate: string;
    cause: string;
  }[];
  historyOrder: IHistoryOrder[] | [];
  address: {
    name: string;
    surname: string;
    country: string;
    address: string;
    locality: string;
    area: string;
    postcode: string;
    phone: string;
    email: string;
  };
}
