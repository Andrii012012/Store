import styles from './style.module.scss';
import './style.scss';
import gStyles from '../../../../styles/style.module.scss';
import Valume from '../../../../components/api/Valume/Valume';
import ButtonGoods from '../../../../components/api/ButtonGoods/ButtonGoods';
import imgBack from '../../../../assets/imgs/global/image-goods1.png';
import { useEffect, useState } from 'react';
import Accordion from '../../../../containers/Accordion/Accordion';
import Comment from '../Comment/Commet';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { filterGoods } from '../../../../features/goods/createSelect';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { addInBasketThunk } from '../../../../features/basket/basket';
import { addInBasketURL } from '../../../../config/config';
import Counter from '../../../../components/api/Counter/Counter';
import renderState from '../../../../features/basket/utils/updateBasket';

export default function GoodsInfo(): JSX.Element {

    const goods = useAppSelector(filterGoods);

    const user = useAppSelector((state) => state.user.user);

    const basketStatus = useAppSelector((state) => state.basket.status);

    const dispatch = useAppDispatch();

    const [count, setCount] = useState<number>(0);

    const [volume, setVolume] = useState<number>(0);

    const [priceSum, setPriceSum] = useState<number>(goods.price);

    function hangleChangeVolume(value: number) {
        setVolume(value);
    }

    function hangleInBasket() {
        if (user && user.id) {
            const form = new FormData();
            form.append('id', user.id);
            form.append('name', goods.name);
            form.append('price', String(goods.price * count));
            form.append('originPrice', String(goods.price));
            form.append('volume', String(volume));
            form.append('things', String(count));
            dispatch(addInBasketThunk({ url: addInBasketURL, form }));
            renderState({ dispatch, status: basketStatus, id: user.id });
        }
    }

    useEffect(() => {
        setPriceSum(goods.price * count); 
    }, [count]);

    if (goods) {
        return (
            <section className={styles.goodsInfo}>
                <h1 className={`${styles.title} ${gStyles.title}`}>Каталог</h1>
                <div className={styles.kinds}>
                    <p>Главная<span>/</span></p>
                    <p>{goods.gender}<span>/</span></p>
                    <p>{goods.name}</p>
                </div>
                <div className={styles.goodsBody}>
                    <div className={styles.imgGoods}>
                        <img src={imgBack} alt="" />
                    </div>
                    <div className={styles.aboutGoods}>
                        <p className={`${styles.nameGoods} ${gStyles.titleSmall}`}>
                            {goods.name}
                        </p>
                        <Valume hangleChangeVolume={hangleChangeVolume} volume={volume} className={styles.valume} list={[...goods.volume]} />
                        <div>
                            <p className={`${styles.textCount} ${gStyles.text}`}>Кол-в</p>
                            <Counter value={count} setValue={setCount} />
                        </div>
                        <div className={`${styles.bodyInfoPrice} ${styles.bodyFirst}`}>
                            <p className={`${styles.cost} ${gStyles.text}`}>Cтоимость:</p>
                            <p className={styles.price}>{priceSum}$</p>

                            <ButtonGoods hangle={hangleInBasket} />
                        </div>
                    </div>
                    <div className={`${styles.bodyInfoPrice} ${styles.changeBodyFirst}`}>
                        <div>
                            <p className={`${styles.cost} ${gStyles.text}`}>Cтоимость:</p>
                            <p className={styles.price}>{goods.price}$</p>
                        </div>
                        <ButtonGoods className={styles.btnBasket} />
                    </div>
                </div>
                <div className={styles.infoGoods}>
                    <Accordion text='Описание' defaultMode={false} selectClass={`${styles.accordion} goodsInfoSelect`} selectItem={[`
                 Этот аромат для мужчин и женщин. Композиция аромата
                 состоит из: апельсина, имбиря,бергамота, толуанского бальзама, ванили и мускуса. Уникальная композиция 
                 нот доставит удовольствие своему обладателю. А название аромата придаст ему уверенность и хорошее настроение`]} />
                    <Accordion text='Отзывы' selectClass={`${styles.accordion} ${styles.reviews}`} defaultMode={false} selectItem={[<Comment goods={goods} />]} />
                </div>

            </section>
        );
    } else {
        return <></>;
    }
}