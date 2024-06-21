import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IBasket } from "../../interfaces/basket";
import { TStatusReducer } from "../../interfaces/statusReducer";
import { clientAPI } from "../../api/client";
import { IConsistOrder } from "../../interfaces/consistOrder";

export interface IInitialStateBasket {
  basket: IBasket[];
  consistOrder: IConsistOrder;
  status: TStatusReducer;
  error: string | null;
}

const initialState: IInitialStateBasket = {
  basket: [],
  consistOrder: {
    infoGoods: [],
    count: 0,
    resultPrice: 0,
    resultPriceWithExtra: 0,
    cashback: 2,
    marks: 0,
    ordersId: [],
  },
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
    return data?.data;
  }
);

export const cancelOrderThunk = createAsyncThunk(
  "cancelOrder/goods",
  async ({ url, form }: { url: string; form: object }, { rejectWithValue }) => {
    const data = await clientAPI("post", url, form, rejectWithValue);
  }
);

export const checkoutOrderThunk = createAsyncThunk(
  "checkoutOrder/goods",
  async ({ url, form }: { url: string; form: object }, { rejectWithValue }) => {
    const data = await clientAPI("post", url, form, rejectWithValue);
    console.log(data);
  }
);

export const checkBonusFiledThunk = createAsyncThunk(
  "checkBonusFiled/goods",
  async ({ url, form }: { url: string; form: object }, { rejectWithValue }) => {
    const data = await clientAPI("post", url, form, rejectWithValue);
    console.log(data);
     return data?.data;
  }
);

export const slice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setCheckout: (
      state: IInitialStateBasket,
      action: PayloadAction<IConsistOrder>
    ) => {
      let {
        count,
        resultPrice,
        resultPriceWithExtra,
        infoGoods,
        cashback,
        marks,
        ordersId,
      } = action.payload;
      state.consistOrder.resultPrice = resultPrice;
      state.consistOrder.resultPriceWithExtra = resultPriceWithExtra;
      state.consistOrder.infoGoods = infoGoods;
      state.consistOrder.count = count;
      state.consistOrder.cashback = cashback;
      state.consistOrder.marks = marks;
      state.consistOrder.ordersId = ordersId;
    },
  },
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

    build.addCase(cancelOrderThunk.pending, (state: IInitialStateBasket) => {
      state.status = "pending";
      state.error = null;
    });
    build.addCase(cancelOrderThunk.fulfilled, (state: IInitialStateBasket) => {
      state.status = "success";
    });
    build.addCase(
      cancelOrderThunk.rejected,
      (state: IInitialStateBasket, action: PayloadAction<any>) => {
        state.status = "reject";
        state.error = action.payload;
      }
    );

    build.addCase(checkoutOrderThunk.pending, (state: IInitialStateBasket) => {
      state.status = "pending";
      state.error = null;
    });
    build.addCase(checkoutOrderThunk.fulfilled, (state: IInitialStateBasket) => {
      state.status = "success";
    });
    build.addCase(
      checkoutOrderThunk.rejected,
      (state: IInitialStateBasket, action: PayloadAction<any>) => {
        state.status = "reject";
        state.error = action.payload;
      }
    );
    build.addCase(checkBonusFiledThunk.pending, (state: IInitialStateBasket) => {
      state.status = "pending";
      state.error = null;
    });
    build.addCase(checkBonusFiledThunk.fulfilled, (state: IInitialStateBasket, action: PayloadAction<string>) => {
        if(action.payload.length > 1){
          state.status = "reject";
          state.error = action.payload;
        } else {
          state.status = "success";
        }
    });
    build.addCase(
      checkBonusFiledThunk.rejected,
      (state: IInitialStateBasket, action: PayloadAction<any>) => {
        state.status = "reject";
        state.error = action.payload;
      }
    );
  },
});
export const basket = slice.reducer;
export const { setCheckout } = slice.actions;
