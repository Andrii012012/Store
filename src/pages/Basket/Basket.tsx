import styles from './style.module.scss';
import gStyles from '../../styles/style.module.scss';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import iconBonus from '../../assets/imgs/global/bonus.svg';
import { useAppSelector } from '../../hooks/useAppSelector';
import ButtonGoods from '../../components/api/ButtonGoods/ButtonGoods';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getBasketThunk } from '../../features/basket/basket';
import { getBasketURL } from '../../config/config';
import ListBasket from './components/ListBasket/ListBasket';
import ConsistOrder from '../../components/ConsistOrder/ConsistOrder';
import SpendMarks from './components/SpendMarks/SpendMarks';

export default function Basket(): JSX.Element {

    const user = useAppSelector((state) => state.user.user);

    const dispatch = useAppDispatch();

    const [isSpendMarks, setIsSpendMarks] = useState<boolean>(false);

    const [marks, setMarks] = useState<string>('');

    useEffect(() => {
        if (user && user.id) {
            const form = new FormData();
            form.append('id', user.id);
            dispatch(getBasketThunk({ url: getBasketURL, form }));
        }
    }, []);

    const optionsBasket = useAppSelector((state) => state.basket);

    const basketStatus = optionsBasket.status;

    const basketGoods = optionsBasket.basket;

    const countChosed = basketGoods.filter((item) => item.checked === true && item);

    const resultSum = countChosed.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    const resultSumPlusMarks = resultSum - Number(marks);

    const cashback = Math.round(resultSum * Number(('0' +  '.0' + user?.cashback)));

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
                                <SpendMarks setValue={setMarks} />
                            }
                        </div>
                        {(basketStatus !== 'success') ? <h2 className={styles.loading}>Загрузка....</h2>
                            :
                            <ListBasket list={basketGoods} status={basketStatus} id={user.id} />
                        }
                    </div>
                    <ConsistOrder count={countChosed.length} result={resultSum} resultPlusMarks={resultSumPlusMarks}>
                        <ul className={styles.listInfo}>
                            <li className={`${styles.itemInfo} ${gStyles.text}`}>
                                <p className={`${styles.textAction} ${styles.textActionActive}`}>Доставка</p>
                                <p>Заказы до 10 000 $ доставим бесплатно
                                    в Ваш ближайший постамат. если в Вашем регионе их нет, то так же бесплатно
                                    доставим в Ваше отделение Почты Украины.
                                    Заказы свыше 10 000$ доставим курьером до двери.</p>
                            </li>
                            <li className={`${styles.itemInfo} ${gStyles.text}`}>
                                <p className={styles.textAction}>Скидка</p>
                                <p>{marks || 0} баллов</p>
                            </li>
                            <li className={`${styles.itemInfo} ${gStyles.text}`}>
                                <p className={styles.textAction}>Кэшбэк</p>
                                <p>{cashback} баллов</p>
                            </li>
                        </ul>
                    </ConsistOrder>
                </div>
            </main>
        );
    } else {
        return <main className={styles.basket}></main>;
    }
}