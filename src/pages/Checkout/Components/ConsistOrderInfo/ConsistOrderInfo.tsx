import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import ConsistOrder from '../../../../components/ConsistOrder/ConsistOrder';
import { ROUTE_DOCUMATION } from '../../../../route/route';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import validation from '../../../../utils/helps/validation';
import { checkoutOrderThunk } from '../../../../features/basket/basket';
import { checkoutOrderURL } from '../../../../config/config';
import { TStatusReducer } from '../../../../interfaces/statusReducer';
import { TInfoGoods } from '../../../../interfaces/consistOrder';
import { IInputsValues } from '../../interface/interface';

interface IProps {
    marks: number;
    cashback: number;
    resultPrice: number;
    resultPriceWithExtra: number;
    count: number;
    refWrapperForm: React.MutableRefObject<HTMLDivElement | null>;
    id: string | null;
    basketStatus: TStatusReducer;
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
    ordersId: string[];
    goods: TInfoGoods[] | [];
    inputsValues: IInputsValues;
}

export default function ConsistOrderInfo(props: IProps): JSX.Element {

    let { marks, cashback, resultPrice, inputsValues, resultPriceWithExtra, refWrapperForm, id, basketStatus, setIsModal, ordersId, goods, count } = props;

    const dispatch = useAppDispatch();

    function hangleSendOrder() {
        if (refWrapperForm && refWrapperForm.current) {
            const result = validation({ arrayParentInput: [refWrapperForm] });
            if (result && id) {
                let getParcel = new Date().getTime() + (86400 * 1000 * 7);
                const form = new FormData();
                form.append('id', id);
                form.append('fromOrderDate', new Date().toLocaleDateString());
                form.append('price', String(resultPriceWithExtra));
                form.append('statusDelivery', 'В пути');
                form.append('waitDate', (new Date(getParcel)).toLocaleDateString());
                form.append('delivery', "Почта Украины");
                form.append('cashback', String(cashback));
                form.append('consistOrder', JSON.stringify(goods));
                form.append('ordersId', JSON.stringify(ordersId));
                form.append('marks', String(marks));
                form.append('cause', 'Покупка');
                form.append('bonusDate', new Date().toLocaleString().split(',').join(' '));
                form.append('name', inputsValues.name);
                form.append('surname', inputsValues.surname);
                form.append('country', inputsValues.country);
                form.append('locality', inputsValues.locality);
                form.append('postcode', inputsValues.postcode);
                form.append('email', inputsValues.email);
                form.append('area', inputsValues.area);
                form.append('phone', inputsValues.phone);
                form.append('address', inputsValues.address);
                form.append('detailInfo', inputsValues.detailInfo);
                dispatch(checkoutOrderThunk({ url: checkoutOrderURL, form }));

                if (basketStatus === 'success') {
                    setIsModal(true);
                }
                
            }
        }
    }

    return (
        <ConsistOrder className={styles.checkoutBody} textButton={'Подтвердить и оплатить заказ'} hangle={hangleSendOrder} result={resultPrice} resultPlusMarks={resultPriceWithExtra} count={count}>
            <ul className={styles.list}>
                <li className={`${styles.item} ${gStyles.text}`}>
                    <p>Доставка:</p>
                    <p>Почта Украины</p>
                </li>
                <li className={`${styles.item} ${gStyles.text}`}>
                    <p>Скидка</p>
                    <p>{marks} баллов</p>
                </li>
                <li className={`${styles.item} ${gStyles.text}`}>
                    <p>Кэшбэк</p>
                    <p>{cashback} баллов</p>
                </li>
                <li className={`${styles.item} ${gStyles.text}`}>
                    <p>Способ оплаты</p>
                    <div>
                        <p>Тинькофф Банк</p>
                        <img />
                    </div>
                </li>
            </ul>
            <p className={`${styles.textPay} ${gStyles.text}`}>Оплата через www.tinkoff.ru</p>
            <p className={`${styles.descriptionText} ${gStyles.text}`}>Ваши личные данные будут использоваться для обработки ваших
                заказов, упрощения вашей работы с сайтом и для других целей,
                описанных в нашей политика <Link className={styles.documention} to={ROUTE_DOCUMATION}>конфиденциальности</Link></p>
        </ConsistOrder>
    )
}