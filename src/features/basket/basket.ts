import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IBasket } from "../../interfaces/basket";
import { TStatusReducer } from "../../interfaces/statusReducer";
import { clientAPI } from "../../api/client";

export interface IInitialStateBasket {
  basket: IBasket[];
  status: TStatusReducer;
  error: string | null;
}

const initialState: IInitialStateBasket = {
  basket: [],
  status: "idel",
  error: null,
};

export const addInBasketThunk = createAsyncThunk(
  "addInBasket/basket",
  async ({ url, form }: { url: string; form: object }, { rejectWithValue }) => {
    const data = await clientAPI("post", url, form, rejectWithValue);
    console.log(data);
    return data;
  }
);

export const getBasketThunk = createAsyncThunk(
  "getBasket/basket",
  async ({ url, form }: { url: string; form: object }, { rejectWithValue }) => {
    const data = await clientAPI("post", url, form, rejectWithValue);
    return data?.data;
  }
);

export const changeCheckboxThunk = createAsyncThunk(
  "changeCheckbox/basket",
  async ({ url, form }: { url: string; form: object }, { rejectWithValue }) => {
    const data = await clientAPI("post", url, form, rejectWithValue);
    return data?.data;
  }
);

export const removeGoodsThunk = createAsyncThunk(
  "removeGoodsThunk/basket",
  async ({ url, form }: { url: string; form: object }, { rejectWithValue }) => {
    const data = await clientAPI("post", url, form, rejectWithValue);
    return data?.data;
  }
);

export const changeCountGoodsThunk = createAsyncThunk(
  "changeCountGoods/basket",
  async ({ url, form }: { url: string; form: object }, { rejectWithValue }) => {
    const data = await clientAPI("post", url, form, rejectWithValue);
    console.log(data);
    return data?.data;
  }
);

export const cancelOrderThunk = createAsyncThunk(
  "cancelOrder/goods",
  async ({ url, form }: { url: string; form: object }, { rejectWithValue }) => {
    const data = await clientAPI("post", url, form, rejectWithValue);
  }
);

export const slice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(addInBasketThunk.pending, (state: IInitialStateBasket) => {
      state.status = "pending";
      state.error = null;
    });
    build.addCase(addInBasketThunk.fulfilled, (state: IInitialStateBasket) => {
      state.status = "success";
    });
    build.addCase(
      addInBasketThunk.rejected,
      (state: IInitialStateBasket, action: PayloadAction<any>) => {
        state.status = "reject";
        state.error = action.payload;
      }
    );
    build.addCase(getBasketThunk.pending, (state: IInitialStateBasket) => {
      state.status = "pending";
      state.error = null;
    });
    build.addCase(
      getBasketThunk.fulfilled,
      (state: IInitialStateBasket, action: PayloadAction<IBasket[]>) => {
        state.status = "success";
        state.basket = action.payload;
      }
    );
    build.addCase(
      getBasketThunk.rejected,
      (state: IInitialStateBasket, action: PayloadAction<any>) => {
        state.status = "reject";
        state.error = action.payload;
      }
    );
    build.addCase(changeCheckboxThunk.pending, (state: IInitialStateBasket) => {
      state.status = "pending";
      state.error = null;
    });
    build.addCase(
      changeCheckboxThunk.fulfilled,
      (state: IInitialStateBasket) => {
        state.status = "success";
      }
    );
    build.addCase(
      changeCheckboxThunk.rejected,
      (state: IInitialStateBasket, action: PayloadAction<any>) => {
        state.status = "reject";
        state.error = action.payload;
      }
    );
    build.addCase(removeGoodsThunk.pending, (state: IInitialStateBasket) => {
      state.status = "pending";
      state.error = null;
    });
    build.addCase(removeGoodsThunk.fulfilled, (state: IInitialStateBasket) => {
      state.status = "success";
    });
    build.addCase(
      removeGoodsThunk.rejected,
      (state: IInitialStateBasket, action: PayloadAction<any>) => {
        state.status = "reject";
        state.error = action.payload;
      }
    );
    build.addCase(
      changeCountGoodsThunk.pending,
      (state: IInitialStateBasket) => {
        state.status = "pending";
        state.error = null;
      }
    );
    build.addCase(
      changeCountGoodsThunk.fulfilled,
      (state: IInitialStateBasket) => {
        state.status = "success";
      }
    );
    build.addCase(
      changeCountGoodsThunk.rejected,
      (state: IInitialStateBasket, action: PayloadAction<any>) => {
        state.status = "reject";
        state.error = action.payload;
      }
    );

    build.addCase(
        cancelOrderThunk.pending,
        (state: IInitialStateBasket) => {
          state.status = "pending";
          state.error = null;
        }
      );
      build.addCase(
        cancelOrderThunk.fulfilled,
        (state: IInitialStateBasket) => {
          state.status = "success";
        }
      );
      build.addCase(
        cancelOrderThunk.rejected,
        (state: IInitialStateBasket, action: PayloadAction<any>) => {
          state.status = "reject";
          state.error = action.payload;
        }
      );
  },
});

export const basket = slice.reducer;
export const {} = slice.actions;
