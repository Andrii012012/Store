export type TInfoGoods = {
    name: string;
    volume: number | boolean;
    things: number | string;
}

export interface IConsistOrder {
    infoGoods: TInfoGoods[] | [];
    count: number;
    resultPrice: number;
    resultPriceWithExtra: number;
    marks: number,
    cashback: number,
    ordersId: string[],
}
