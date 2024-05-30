import { createSlice } from "@reduxjs/toolkit";
import { IGoods } from "../../interfaces/goods";

interface IInitialState {
  goods: IGoods[];
  state: "idel" | "reject" | "success" | "loading";
  error: null | React.ErrorInfo;
}

const initialState: IInitialState = {
  goods: [],
  state: "idel",
  error: null,
};

const slice = createSlice({
  name: "goods",
  initialState,
  reducers: {},
});

export const goods = slice.reducer;
export type { IInitialState };
