export interface IHistoryOrder {
  id: string;
  fromOrderDate: string;
  price: number;
  statusDelivery: "Ожидает на почте" | "Получен" | "Отменен" | "Ожидает оплаты";
  delivery: "Доставка курьером" | "Доставка почтой";
  waitDate: string;
  idOrder: string;
  ditailInfo: string;
  consistOrder:
    | {
        id: string;
        name: string;
        things: string;
        volume: string;
        idOrder: string;
      }[]
    | [];
}

export interface IHistoryBonus {
  id: string;
  date: string;
  marks: number;
  specificDate: string;
  cause: string;
  idHistoryBonus: string;
}

export interface IUser {
  id: string;
  name: string;
  surname: string;
  login: number;
  status: string;
  email: string;
  avatar: string;
  cashback: number | string;
  password: number | string;
  marks: number;
  gender: "women" | "men";
  historyBonus: IHistoryBonus[];
  historyOrder: IHistoryOrder[] | [];
  address: {
    id: string;
    name: string;
    surname: string;
    country: string;
    address: string;
    locality: string;
    area: string;
    postcode: string;
    phone: string;
    email: string;
    idAddress: string;
  };
}
