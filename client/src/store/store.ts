import { Reducer, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux";
import { IInitialState, goods } from "../features/goods/slice";
import { user, IInitialStateUser } from "../features/user/slice";
import { IInitialStateBasket, basket } from "../features/basket/basket";

interface IReducer {
  goods: Reducer<IInitialState>;
  user: Reducer<IInitialStateUser>;
  basket: Reducer<IInitialStateBasket>;
}

const reducers: IReducer = {
  goods: goods,
  user: user,
  basket: basket,
};

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppSelector = TypedUseSelectorHook<RootState>;
