import styles from './style.module.scss';
import gStyles from '../../styles/style.module.scss';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { useRef, useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import CheckoutForm from './Components/CheckoutForm/CheckoutForm';
import PopupNotification from '../../components/PopupNotification/PopupNotification';
import ConsistOrderInfo from './Components/ConsistOrderInfo/ConsistOrderInfo';
import { IInputsValues } from './interface/interface';

export default function Checkout(): JSX.Element {

    const [inputsValues, setInputsValues] = useState<IInputsValues>({
        name: '',
        surname: '',
        country: '',
        address: '',
        locality: '',
        area: '',
        postcode: '',
        phone: '',
        email: '',
        detailInfo: '',
    });


    const refWrapperForm = useRef<HTMLDivElement | null>(null);

    const [isModal, setIsModal] = useState<boolean>(false);

    const user = useAppSelector((state) => state.user.user);

    const basket = useAppSelector((state) => state.basket);

    const consistOrder = basket.consistOrder;

    const count = consistOrder.count;

    const resultPrice = consistOrder.resultPrice;

    const resultPriceWithExtra = consistOrder.resultPriceWithExtra;

    const marks = consistOrder.marks;

    const cashback = consistOrder.cashback;

    const ordersId = consistOrder.ordersId;

    return (
        <main className={styles.checkout}>
            <div className={`${styles.container} ${gStyles.container}`}>
                <HeaderComponent className={styles.headerBody} title={'Оформление заказа'} text='Оформление заказа' />
                <div className={styles.body}>
                    <div className={styles.wrapper}>
                        <CheckoutForm refWrapper={refWrapperForm} inputsValues={inputsValues} setInputsValues={setInputsValues}/>
                        <div className={styles.order}>
                            <h2 className={`${styles.titleOrder} ${gStyles.titleSmall}`}>
                                Ваш заказ
                            </h2>
                            <ConsistOrderInfo
                                marks={marks}
                                cashback={cashback}
                                resultPrice={resultPrice}
                                resultPriceWithExtra={resultPriceWithExtra}
                                count={count}
                                refWrapperForm={refWrapperForm}
                                id={user?.id || null}
                                basketStatus={basket.status}
                                setIsModal={setIsModal}
                                goods={basket.consistOrder.infoGoods}
                                ordersId={ordersId}
                                inputsValues={inputsValues}
                            />
                        </div>
                    </div>
                </div>
                {isModal && <PopupNotification
                    close={() => setIsModal(false)}
                    title='Поздравляем! Заказ успешно оформлен!'
                    text='На главную' />}
            </div>
        </main >
    );
}