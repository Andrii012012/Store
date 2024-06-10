import { IGoods, IGoodsCategory } from "../interfaces/goods";
import img from "../assets/imgs/Goods/image-goods1.png";

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

const rating: (1 | 2 | 3 | 4 | 5)[] = [1, 2, 3, 4, 5];

const arrayGoodsCategory: IGoodsCategory[] = [];
const arrayGoods: IGoods[] = [];

for (let i = 0; i < brand.length; i++) {
  arrayGoodsCategory.push({ [brand[i]]: [] });
}

function createGoods(): void {
  for (let i = 0; i < 2000; i++) {
    let brandN = Math.round(Math.random() * 5);
    let notesN = Math.round(Math.random() * 5);
    let pricesN = Math.round(Math.random() * 23);
    let genderN = Math.round(Math.random() * 2);
    let popularN = Math.round(Math.random() * 18);
    let ratingN = Math.round(Math.random() * 4);

    const choosedBrand = brand[brandN];
    const choosedNotes = notes[notesN];
    const choosedPrices = prices[pricesN];
    const choosedGender = gender[genderN];
    const countPopular = popular[popularN];
    const countRating = rating[ratingN];

    arrayGoodsCategory.forEach((item: any, index: number) => {
      if (item[choosedBrand]) {
        arrayGoodsCategory[index][choosedBrand].push({
          id: i,
          brand: choosedBrand,
          notes: choosedNotes,
          price: choosedPrices,
          name: "The devil is a loser by Mushfig",
          volume: [10, 30, 50, 100],
          gender: choosedGender,
          img,
          popular: countPopular,
          rating: countRating,
          comments: [
            {
              description:
                "Спешу поделиться эмоциями от приобретенного аромата. Принадлежит к группе восточные цветочные. Доминирующей нотой является кофе... Но вот сейчас сижу нюхаю и уже прям сомневаюсь, что кофе, хотя при первом затесте ожидала кофе, его и получила, поэтому и не колебалась ни секунды при покупке. А тут не то, что принюхалась, просто открываю что-то новое для себя, и Опиум Блэк совсем не моно аромат, он многогранен и интересен. Если это кофе, то не крепкий черный, это кофе со сливками, с ликером, сладкий ванильный, потому что ваниль очень явная и бравурная",
              date: "1.07.2023",
              author: { name: "Елена", lastName: "Володина" },
              stars: 3,
              screens: [img, img, img, img],
              videos: [
                "https://www.youtube.com/watch?v=H8QnlH6sou0",
                "https://www.youtube.com/watch?v=H8QnlH6sou0",
                "https://www.youtube.com/watch?v=H8QnlH6sou0",
              ],
            },
          ],
        });
      }
    });

    arrayGoods.push({
      id: i,
      brand: choosedBrand,
      notes: choosedNotes,
      price: choosedPrices,
      name: "The devil is a loser by Mushfig",
      volume: [10, 30, 50, 100],
      gender: choosedGender,
      img,
      popular: countPopular,
      rating: countRating,
      comments: [
        {
          description:
            "Спешу поделиться эмоциями от приобретенного аромата. Принадлежит к группе восточные цветочные. Доминирующей нотой является кофе... Но вот сейчас сижу нюхаю и уже прям сомневаюсь, что кофе, хотя при первом затесте ожидала кофе, его и получила, поэтому и не колебалась ни секунды при покупке. А тут не то, что принюхалась, просто открываю что-то новое для себя, и Опиум Блэк совсем не моно аромат, он многогранен и интересен. Если это кофе, то не крепкий черный, это кофе со сливками, с ликером, сладкий ванильный, потому что ваниль очень явная и бравурная",
          date: "1.07.2023",
          author: { name: "Елена", lastName: "Володина" },
          stars: 3,
          screens: [img, img, img, img],
          videos: [
            "https://www.youtube.com/watch?v=H8QnlH6sou0",
            "https://www.youtube.com/watch?v=H8QnlH6sou0",
            "https://www.youtube.com/watch?v=H8QnlH6sou0",
          ],
        },
      ],
    });
  }
}

createGoods();

export { arrayGoods, arrayGoodsCategory };
