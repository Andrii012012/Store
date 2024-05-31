import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IGoods, IGoodsCategory } from "../../interfaces/goods";
import { arrayGoods, arrayGoodsCategory } from "../../constants/goods";

interface IInitialState {
  originGoods: IGoods[];
  originGoodsCategory: IGoodsCategory[];
  goodsCategory: IGoodsCategory[];
  goods: IGoods[];
  categoryGoods: IGoods[];
  state: "idel" | "reject" | "success" | "loading";
  error: null | React.ErrorInfo;
}

const initialState: IInitialState = {
  originGoods: arrayGoods,
  originGoodsCategory: arrayGoodsCategory,
  goodsCategory: arrayGoodsCategory,
  goods: arrayGoods,
  categoryGoods: [],
  state: "idel",
  error: null,
};

const slice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    inRating: (state: IInitialState) => {
      state.goods.sort((a, b): number => b.rating - a.rating);
    },
    inPopular: (state: IInitialState) => {
      state.goods.sort((a, b): number => b.popular - a.popular);
    },
    inLast: (state: IInitialState) => {
      state.goods.reverse();
    },
    inDescending: (state: IInitialState) => {
      state.goods.sort((a, b): number => b.price - a.price);
    },
    inAscending: (state: IInitialState) => {
      state.goods.sort((a, b): number => a.price - b.price);
    },
    goodsFilterCategory: (
      state: IInitialState,
      action: PayloadAction<string>
    ) => {
        state.goodsCategory = state.originGoodsCategory.filter((item) => {
        for (let key in item) {
          if (
            key
              .toLocaleLowerCase()
              .includes(action.payload.toLocaleLowerCase())
          ) {
            console.log(123);
            return item;
          }
        }
      });
    },
  },
});

export const goods = slice.reducer;
export const {
  inRating,
  inPopular,
  inDescending,
  inAscending,
  inLast,
  goodsFilterCategory,
} = slice.actions;
export type { IInitialState };
