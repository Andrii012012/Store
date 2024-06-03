import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IGoods, IGoodsCategory } from "../../interfaces/goods";
import { arrayGoods, arrayGoodsCategory } from "../../constants/goods";

type TGender = {
  women: "women" | "";
  men: "men" | "";
  unisex: "unisex" | "";
};
interface IInitialState {
  goodsCategory: IGoodsCategory[];
  goods: IGoods[];
  state: "idel" | "reject" | "success" | "loading";
  error: null | React.ErrorInfo;
  filterGoods: {
    seachFilter: {
      type: string;
      name: string;
    };
    gender: TGender;
    price: number[];
    brand: string;
    notes: string;
    filter:
      | "inRating"
      | "inPopular"
      | "inLast"
      | "inDescending"
      | "inAscending"
      | "all";
  };
  filterSeachGoods: {
    gender: "women" | "men" | "unisex" | "all";
    nameGoods: string;
  };
}

type TFilter = {
  type: string;
  name: string;
};

const initialState: IInitialState = {
  goodsCategory: arrayGoodsCategory,
  goods: arrayGoods,
  state: "idel",
  error: null,
  filterGoods: {
    seachFilter: { type: "", name: "" },
    gender: {
      women: "women",
      men: "men",
      unisex: "unisex",
    },
    price: [0, 10000],
    brand: "all",
    notes: "all",
    filter: "all",
  },
  filterSeachGoods: {
    gender: "all",
    nameGoods: "",
  },
};

const slice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    filterChange: (
      state: IInitialState,
      action: PayloadAction<
        | "inRating"
        | "inPopular"
        | "inLast"
        | "inDescending"
        | "inAscending"
        | "all"
      >
    ) => {
      state.filterGoods.filter = action.payload;
    },

    seachFilter: (state: IInitialState, action: PayloadAction<TFilter>) => {
      let { type, name } = action.payload;
      state.filterGoods.seachFilter.type = type;
      state.filterGoods.seachFilter.name = name;
    },
    chooseBrand: (state: IInitialState, action: PayloadAction<string>) => {
      state.filterGoods.brand = action.payload;
    },
    chooseNotes: (state: IInitialState, action: PayloadAction<string>) => {
      state.filterGoods.brand = action.payload;
    },
    choosePrice: (state: IInitialState, action: PayloadAction<number[]>) => {
      state.filterGoods.price = action.payload;
    },
    chooseGender: (
      state: IInitialState,
      action: PayloadAction<{
        women: "women" | "";
        men: "men" | "";
        unisex: "unisex" | "";
      }>
    ) => {
      state.filterGoods.gender = action.payload;
    },
    filterSeachGoodsSetGender: (
      state: IInitialState,
      action: PayloadAction<"women" | "men" | "unisex" | "all">
    ) => {
      state.filterSeachGoods.gender = action.payload;
    },
    filterSeachGoodsSetNameGoods: (
      state: IInitialState,
      action: PayloadAction<string>
    ) => {
      state.filterSeachGoods.nameGoods = action.payload;
    },
    clearSettings: (state: IInitialState) => {
      state.filterGoods.gender = {
        men: "men",
        women: "women",
        unisex: "unisex",
      };
      state.filterGoods.price = [0, 10000];
      state.filterGoods.brand = "all";
      state.filterGoods.notes = "all";
      state.filterGoods.seachFilter = { type: "", name: "" };
      state.filterGoods.filter = "all";
    },
  },
});

export const goods = slice.reducer;
export const {
  filterChange,
  seachFilter,
  chooseBrand,
  choosePrice,
  chooseGender,
  chooseNotes,
  clearSettings,
  filterSeachGoodsSetGender,
  filterSeachGoodsSetNameGoods,
} = slice.actions;
export type { IInitialState };
