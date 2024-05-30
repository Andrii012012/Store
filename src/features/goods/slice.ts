import { createSlice } from "@reduxjs/toolkit";
import { IGoods } from "../../interfaces/goods";
import arrayGoods from "../../constants/goods";

interface IInitialState {
  originGoods: IGoods[];
  goods: IGoods[];
  state: "idel" | "reject" | "success" | "loading";
  error: null | React.ErrorInfo;
}

const initialState: IInitialState = {
  originGoods: arrayGoods,
  goods: arrayGoods,
  state: "idel",
  error: null,
};

const slice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    inRating: (state: IInitialState) => {
      console.log(state.goods);
    },
  },
});

export const goods = slice.reducer;
export const{ inRating } = slice.actions;
export type { IInitialState };
