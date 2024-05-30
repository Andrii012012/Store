import { Reducer, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux";
import { IInitialState, goods } from "../features/goods/slice";

interface IReducer {
  goods: Reducer<IInitialState>;
}

const reducers: IReducer = {
  goods: goods,
};

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppSelector = TypedUseSelectorHook<RootState>;
