import styles from './style.module.scss';
import gStyles from '../../styles/style.module.scss';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import iconBonus from '../../assets/imgs/global/bonus.svg';
import { useAppSelector } from '../../hooks/useAppSelector';
import ButtonGoods from '../../components/api/Button/Button';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getBasketThunk } from '../../features/basket/basket';
import { getBasketURL } from '../../config/config';
import ListBasket from './components/ListBasket/ListBasket';
import SpendMarks from './components/SpendMarks/SpendMarks';
import ConsistOrderInfo from './components/ConsistOrderInfo/ConsistOrderInfo';

export default function Basket(): JSX.Element {

    const user = useAppSelector((state) => state.user.user);

    const dispatch = useAppDispatch();

    const [isSpendMarks, setIsSpendMarks] = useState<boolean>(false);

    const [marks, setMarks] = useState<string>('');

    const optionsBasket = useAppSelector((state) => state.basket);

    useEffect(() => {
        if (user && user.id) {
            const form = new FormData();
            form.append('id', user.id);
            dispatch(getBasketThunk({ url: getBasketURL, form }));
        }

        return () => { };

    }, []);

    const basketStatus = optionsBasket.status;

    const basketGoods = optionsBasket.basket;

    const countChosed = basketGoods.filter((item) => !!item.checked === true && item);

    const resultSum = countChosed.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    const consistGoods = countChosed.map((item) => {
        return {
            name: item.name,
            things: item.things,
            volume: item.volume,
        }
    });

    const ordersId = countChosed.map((item) => item.id);

    const resultSumPlusMarks = resultSum - Number(marks);

    const cashback = Math.round(resultSum * Number(('0' + '.0' + user?.cashback)));

    function hangleIsUseMarks() {
        setIsSpendMarks(true);
    }

    if (user) {
        return (
            <main className={styles.basket}>
                <div className={`${gStyles.container} ${styles.container}`}>
                    <div className={styles.wrapper}>
                        <HeaderComponent text='Корзина' title='Корзина' />
                        <div className={styles.useBonus}>
                            <div className={styles.bodyInfoBonus}>
                                <img src={iconBonus} alt='basket' />
                                <p className={gStyles.text}>У вас сейчас есть {user.marks} баллов. Используйте их, чтобы получить скидку 100 ₽ на эту покупку</p>
                            </div>
                            {!isSpendMarks ? <ButtonGoods hangle={hangleIsUseMarks} text='Потратить баллы' /> :
                                <SpendMarks status={basketStatus} id={user.id} setValue={setMarks} />
                            }
                        </div>
                        <ListBasket list={basketGoods} status={basketStatus} id={user.id} />
                    </div>
                    <ConsistOrderInfo
                        marks={marks}
                        cashback={cashback}
                        resultSumPlusMarks={resultSumPlusMarks}
                        resultSum={resultSum}
                        countChosed={countChosed.length}
                        ordersId={ordersId}
                        consistGoods={consistGoods}
                    />
                </div>
            </main>
        );
    } else {
        return <main className={styles.basket}></main>;
    }
}