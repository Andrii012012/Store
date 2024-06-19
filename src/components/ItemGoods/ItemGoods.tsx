import styles from './style.module.scss';
import gStyles from '../../styles/style.module.scss';
import Valume from '../api/Valume/Valume';
import ButtonGoods from '../api/ButtonGoods/ButtonGoods';
import { IGoods } from '../../interfaces/goods';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addInBasketThunk, getBasketThunk } from '../../features/basket/basket';
import { addInBasketURL, getBasketURL } from '../../config/config';
import renderState from '../../features/basket/utils/updateBasket';

interface IProps {
    item: IGoods,
    className?: string;
    count?: string;
}

export default function ItemGoods(props: IProps): JSX.Element {
    let { item, className = '', count } = props;

    const user = useAppSelector((state) => state.user.user);

    const basketStatus = useAppSelector((state) => state.basket.status);

    const dispatch = useAppDispatch();

    const [volume, setVolume] = useState<number>(0);

    function hangleChangeVolume(value: number) {
        setVolume(value);
    }

    function hangleInBasket(e: React.MouseEvent<HTMLDivElement>, item: IGoods) {
        if (user && user.id) {
            const form = new FormData();
            form.append('id', user.id);
            form.append('originPrice', String(item.price));
            form.append('name', item.name);
            form.append('price', String(item.price * (Number(count) || 1)));
            form.append('volume', String(volume === 0 ? '10' : volume));
            form.append('things', count || '1');
            dispatch(addInBasketThunk({ url: addInBasketURL, form }));
            renderState({ dispatch, status: basketStatus, id: user.id });
        }
    }

    return (
        <li key={item.img} className={`${styles.item} ${className}`}>
            <div className={styles.bodyInfoGoods}>
                <img className={styles.imgGoods} src={item.img} alt='iconGoods' />
                <p className={`${styles.text} ${gStyles.text}`}>{item.name}</p>
                <Valume hangleChangeVolume={hangleChangeVolume} volume={volume} list={item.volume} />
                <div className={styles.bodyPrice}>
                    <p className={gStyles.textInfo}>Стоимость:</p>
                    <span className={gStyles.textInfo}>{item.price}$</span>
                </div>
                <div onClick={(e) => hangleInBasket(e, item)}>
                    <ButtonGoods className={styles.btn} />
                </div>
            </div>
        </li>
    )
}