import GoodsInfo from './components/GoodsInfo/GoodsInfo';
import styles from './style.module.scss';
import gStyles from '../../styles/style.module.scss';
import ExtraOffers from './components/ExtraOffers/ExtraOffers';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { filterSeachGoodsSetNameGoods } from '../../features/goods/slice';
import useWatchMedia from '../../hooks/useWatchMedia';

type TRender = {
    media: boolean,
    isRender: boolean,
    showSlide: number,
}

export default function Catalog(): JSX.Element {

    const nameGoods = useParams();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (typeof nameGoods.id === 'string') {
            dispatch(filterSeachGoodsSetNameGoods(nameGoods.id));
        }
    }, [nameGoods]);

    const dataMedia = useWatchMedia({ widthTeblet: 768, widthTebletExtra: 480, showSlide: [3, 1.4] });

    return <main className={styles.catalog}>
        <div className={`${gStyles.container} ${styles.container}`}>
            <GoodsInfo />
            <ExtraOffers dataMedia={dataMedia} />
        </div>
    </main>;
}