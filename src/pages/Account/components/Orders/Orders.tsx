import { useAppSelector } from "../../../../hooks/useAppSelector";
import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import warning from '../../../../assets/imgs/global/warning.svg';
import AlertMessage from "../../../../components/api/AlertMessage/AlertMessage";
import ListOrder from "./components/ListOrder/ListOrder";

export default function Orders(): JSX.Element {
    const data = useAppSelector((state) => state.user.user);

    if (data && data.historyOrder) {

        return <section className={styles.order}>
            <h1 className={`${gStyles.titleSmall} ${styles.title}`}>Заказы</h1>
            {data.historyOrder.length < 1 ? <div className={styles.bodyWorning}><AlertMessage icon={warning} text='Вы пока не совершали заказов :(' /></div>
                : <ul>
                    <ListOrder list={data.historyOrder}/>
                </ul>}
        </section>
    } else {
        return <></>;
    }
}