import { createSelector } from "@reduxjs/toolkit";
import { IGoods } from "../../interfaces/goods";

export const filterSeach = createSelector(
  [(state) => state.goods, (state) => state.goods],
  (state) => {
    switch (state.filterGoods.seachFilter.type) {
      case "filterSeach": {
        const array = state.goodsCategory.map((item: IGoods) => {
          for (let key in item) {
            if (
              key
                .toLocaleLowerCase()
                .includes(
                  state.filterGoods.seachFilter.name.toLocaleLowerCase() || ""
                )
            ) {
              return item;
            }
          }
        });
        return array.filter((item: IGoods) => item && item);
      }
    }
    return state.goodsCategory;
  }
);

export const FilterProducts = createSelector(
  [(state) => state.goods, (state) => state.goods],
  (state) => {
    const { gender, brand, price, notes, filter } = state.filterGoods;
    let copyNewGoods;
    let newGoods = state.goods.map((item: IGoods) => {
      if (
        (gender.men === item.gender ||
          gender.women === item.gender ||
          gender.unisex === item.gender) &&
        (brand === "all" || item.brand === brand) &&
        (notes === "all" || item.notes === notes) &&
        item.price >= price[0] &&
        item.price <= price[1]
      ) {
        return item;
      }
    });
    newGoods = newGoods.filter((item: IGoods) => item && item);
    copyNewGoods = [...newGoods];

    switch (filter) {
      case "inRating": {
        newGoods.sort((a: IGoods, b: IGoods): number => b.rating - a.rating);
        break;
      }
      case "inPopular": {
        newGoods.sort((a: IGoods, b: IGoods): number => b.popular - a.popular);
        break;
      }
      case "inLast": {
        newGoods.reverse();
        break;
      }
      case "inDescending": {
        newGoods.sort((a: IGoods, b: IGoods): number => b.price - a.price);
        break;
      }
      case "inAscending": {
        newGoods.sort((a: IGoods, b: IGoods): number => a.price - b.price);
        break;
      }
      case "all": {
        newGoods = copyNewGoods;
        break;
      }
    }
    return newGoods;
  }
);

export const filterSeachGoods = createSelector(
  [(state) => state.goods, (state) => state.goods],
  (state) => {
    const newGoods: string[] = [];
    state.goods.filter((item: IGoods) => {
      if ( 
        item.name
          .toLocaleLowerCase()
          .includes(state.filterSeachGoods.nameGoods.toLocaleLowerCase()) &&
        (state.filterSeachGoods.gender === "all" ||
          state.filterSeachGoods.gender === item.gender)
      ) {
        newGoods.push(item.name);
      }
    });
    return newGoods;
  }
);

export const filterGoodsOffers = createSelector(
  [(state) => state, (state) => state],
  (state) => {
    let newGoods = state.goods.goods;
    const arrayRating: IGoods[] = [];
    for (let i = 0; i < 20; i++) {
      if (newGoods[i].rating > 3) {
        arrayRating.push(newGoods[i]);
      }
    }
    return arrayRating;
  }
);

export const filterGoods = createSelector(
  [(state) => state, (state) => state],
  (state) => {
    let goods = state.goods.goods;
    const { gender, nameGoods } = state.goods.filterSeachGoods;
    const newGoods = goods.map((item: IGoods) => {
      if (
        item.name.includes(nameGoods) &&
        (gender === "all" || item.gender === gender)
      ) {
        return item;
      }
    });
    return newGoods.filter((item: IGoods) => item && item)[0];
  }
);
