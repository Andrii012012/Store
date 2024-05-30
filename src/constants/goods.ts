import { IGoods } from "../interfaces/goods";
import img from "../assets/imgs/Goods/image-goods1.png";

const arrayGoods: IGoods[] = [];

const brand: string[] = [
  "Akigalawood",
  "Ajmal",
  "Alexandre. J",
  "Amouage",
  "Anna Sui",
  "Antonio Banderas",
];
const notes: string[] = [
  "Akigalawood",
  "Ambertonic",
  "Amberwood",
  "Ambrettolide",
  "Iso e super",
  "Абрикос",
];
const prices: number[] = [
  2400, 5231, 7058, 9984, 2210, 574, 203, 493, 2847, 9275, 8746, 2283, 462,
  8795, 598, 665, 797, 978, 585, 438, 294, 395, 403, 320,
];

const gender: ("men" | "women" | "unisex")[] = ["men", "women", "unisex"];

const popular: number[] = [
  12, 2039, 308593, 271, 29, 2048, 9274, 1233, 253, 371, 3741, 85, 312, 201,
  102, 86, 492, 23,
];

const rating: (1 | 2 | 3 | 4 | 5)[] = [1,2,3,4,5];

function createGoods(): void {
  for (let i = 0; i < 2000; i++) {
    let brandN = Math.round(Math.random() * 5);
    let notesN = Math.round(Math.random() * 5);
    let pricesN = Math.round(Math.random() * 23);
    let genderN = Math.round(Math.random() * 2);
    let popularN = Math.round(Math.random() * 18);
    let ratingN = Math.round(Math.random() * 5);

    const choosedBrand = brand[brandN];
    const choosedNotes = notes[notesN];
    const choosedPrices = prices[pricesN];
    const choosedGender = gender[genderN];
    const countPopular = popular[popularN];
    const countRating = rating[ratingN];

    arrayGoods.push({
      id: String(i),
      brand: choosedBrand,
      notes: choosedNotes,
      price: choosedPrices,
      description: "The devil is a loser by Mushfig",
      volume: [10, 30, 50, 100],
      gender: choosedGender,
      img,
      popular: countPopular,
      rating: countRating,
    });
  }
}

createGoods();

export default arrayGoods;
