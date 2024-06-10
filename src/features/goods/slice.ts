import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IGoods, IGoodsCategory } from "../../interfaces/goods";
import { arrayGoods, arrayGoodsCategory } from "../../constants/goods";
import { TStatusReducer } from "../../interfaces/statusReducer";

type TGender = {
  women: "women" | "" | "Женские";
  men: "men" | "" | "Мужские";
  unisex: "unisex" | "" | "Унисекс";
};

type TFilterPopular =
  | "inRating"
  | "inPopular"
  | "inLast"
  | "inDescending"
  | "inAscending"
  | "all"
  | "По популярности"
  | "По рейтингу"
  | "Сортировка от последнего"
  | "Цена по убыванию"
  | "Цена по возрастанию";

type TGenderList =
  | "women"
  | "men"
  | "unisex"
  | "all"
  | "Мужские"
  | "Женские"
  | "Унисекс";

interface IInitialState {
  goodsCategory: IGoodsCategory[];
  goods: IGoods[];
  state: TStatusReducer;
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
    gender: TGenderList;
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
      action: PayloadAction<TFilterPopular>
    ) => {
      switch (action.payload) {
        case "По популярности": {
          state.filterGoods.filter = "inPopular";
          break;
        }
        case "По рейтингу": {
          state.filterGoods.filter = "inRating";
          break;
        }
        case "Сортировка от последнего": {
          state.filterGoods.filter = "inLast";
          break;
        }
        case "Цена по убыванию": {
          state.filterGoods.filter = "inDescending";
          break;
        }
        case "Цена по возрастанию": {
          state.filterGoods.filter = "inAscending";
          break;
        }
      }
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
      action: PayloadAction<{ gender: TGenderList; value: boolean }>
    ) => {
      let { gender, value } = action.payload;
      if (gender === "Мужские") {
        state.filterGoods.gender.men = "men";
        if (value) {
          state.filterGoods.gender.men = "men";
        } else {
          state.filterGoods.gender.men = "";
        }
      } else if (gender === "Женские") {
        state.filterGoods.gender.women = "women";
        if (value) {
          state.filterGoods.gender.women = "women";
        } else {
          state.filterGoods.gender.women = "";
        }
      } else if (gender === "Унисекс") {
        state.filterGoods.gender.unisex = "unisex";
        if (value) {
          state.filterGoods.gender.unisex = "unisex";
        } else {
          state.filterGoods.gender.unisex = "";
        }
      }
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
    addComments: (
      state: IInitialState,
      action: PayloadAction<{ id: number; comment: any }>
    ) => {
      let { id, comment } = action.payload;
      state.goods[id].comments.push(comment);
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
  addComments,
} = slice.actions;
export type { IInitialState, TFilterPopular };
