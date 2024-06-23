import ConsistOrder from '../../../../components/ConsistOrder/ConsistOrder';
import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import { setCheckout } from '../../../../features/basket/basket';
import { ROUTE_CHECKOUT } from '../../../../route/route';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';

interface IProps {
    cashback: number;
    countChosed: number;
    resultSumPlusMarks: number;
    marks: string;
    resultSum: number;
    ordersId: string[];
    consistGoods: {
        name: string;
        things: number;
        volume: number;
    }[];
}

export default function ConsistOrderInfo(props: IProps): JSX.Element {

    let { countChosed, marks, cashback, resultSumPlusMarks, resultSum, consistGoods, ordersId } = props;

    const dispatch = useAppDispatch();

    const goTo = useNavigate();

    function hangleGoCheckout() {
        dispatch(setCheckout({
            resultPrice: resultSum,
            resultPriceWithExtra: resultSumPlusMarks,
            count: countChosed, infoGoods: consistGoods,
            marks: Number(marks),
            cashback: cashback,
            ordersId: ordersId,
        }));
        goTo(ROUTE_CHECKOUT);
    }

    return (
        <ConsistOrder hangle={hangleGoCheckout} count={countChosed} result={resultSum} resultPlusMarks={resultSumPlusMarks}>
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
    )
}