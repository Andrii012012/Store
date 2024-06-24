import { TOffer } from "../../interface/interface";
import styles from './style.module.scss';
import gStyles from '../../../../../../styles/style.module.scss';
import { SwiperSlide, Swiper } from "swiper/react";
import useWatchMedia from "../../../../../../hooks/useWatchMedia";
import { useAppDispatch } from "../../../../../../hooks/useAppDispatch";
import { chooseBrand, chooseGender } from "../../../../../../features/goods/slice";
import { useAppSelector } from "../../../../../../hooks/useAppSelector";
import { FilterProducts } from "../../../../../../features/goods/createSelect";
import { addInBasketURL } from "../../../../../../config/config";
import { addInBasketThunk } from "../../../../../../features/basket/basket";
import renderState from "../../../../../../features/basket/utils/updateBasket";
import { useEffect, useState } from "react";

interface IProps {
    list: TOffer[],
}

export default function ListOffer(props: IProps): JSX.Element {
    let { list } = props;

    const dispatch = useAppDispatch();

    const goods = useAppSelector(FilterProducts);

    const user = useAppSelector((state) => state.user.user);

    const basketStatus = useAppSelector((state) => state.basket.status);

    function hangleSendBasket(text: string) {

        if (text === 'Для неё') {
            dispatch(chooseGender({ gender: 'Унисекс', value: false }));
            dispatch(chooseGender({ gender: 'Женские', value: true }));
            dispatch(chooseGender({ gender: 'Мужские', value: false }));
        } else if (text === 'Для него') {
            dispatch(chooseGender({ gender: 'Унисекс', value: false }));
            dispatch(chooseGender({ gender: 'Мужские', value: true }));
            dispatch(chooseGender({ gender: 'Женские', value: false }));
        } else if (text === 'Унисекс') {
            dispatch(chooseGender({ gender: 'Мужские', value: false }));
            dispatch(chooseGender({ gender: 'Унисекс', value: true }));
            dispatch(chooseGender({ gender: 'Женские', value: false }));
        }

        const itemGoods = goods[0];

        if (user && user.id) {
            const form = new FormData();
            form.append('id', user.id);
            form.append('originPrice', String(itemGoods.price));
            form.append('name', itemGoods.name);
            form.append('price', String(itemGoods.price * (Number('1') || 1)));
            form.append('volume', String('30'));
            form.append('things', '1');
            dispatch(addInBasketThunk({ url: addInBasketURL, form }));
            renderState({ dispatch, status: basketStatus, id: user.id });
        }
    }

    const dataMedia = useWatchMedia({ widthTeblet: 768, widthTebletExtra: 480, widthPhone: null, showSlide: [3, 2.05, 1.57] });

    return (
        <>
            {
                !dataMedia.media ? list.map((item, _) => (
                    <li key={item.title} className={styles.item}>
                        <img className={styles.background} src={item.background} alt="" />
                        <div className={styles.content}>
                            <h3 className={`${styles.titleCard} ${gStyles.titleSmall}`}>{item.title}</h3>
                            <p className={styles.text}>{item.text}</p>
                            <button onClick={() => hangleSendBasket(item.title)} className={styles.btn}><span>В корзину</span></button>
                        </div>
                    </li>
                )) : <Swiper
                    spaceBetween={10}
                    slidesPerView={dataMedia.showSlide}
                >
                    <>
                        {list.map((item, _) => (
                            <SwiperSlide>
                                <li key={item.title} className={styles.item}>
                                    <img className={styles.background} src={item.background} alt="" />
                                    <div className={styles.content}>
                                        <h3 className={`${styles.titleCard} ${gStyles.titleSmall}`}>{item.title}</h3>
                                        <p className={styles.text}>{item.text}</p>
                                        <button onClick={() => hangleSendBasket(item.title)} className={styles.btn}><span>В корзину</span></button>
                                    </div>
                                </li>
                            </SwiperSlide>
                        ))}
                    </>
                </Swiper>
            }</>
    )
}