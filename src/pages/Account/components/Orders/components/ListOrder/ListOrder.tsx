import ButtonGoods from '../../../../../../components/api/ButtonGoods/ButtonGoods';
import { cancelOrderURL } from '../../../../../../config/config';
import Accordion from '../../../../../../containers/Accordion/Accordion';
import { cancelOrderThunk } from '../../../../../../features/goods/slice';
import { useAppDispatch } from '../../../../../../hooks/useAppDispatch';
import { IHistoryOrder } from '../../../../../../interfaces/user';
import styles from './style.module.scss';
import gStyles from '../../../../../../styles/style.module.scss';

interface IProps {
    list: IHistoryOrder[];
}

export default function ListOrder(props: IProps): JSX.Element {

    let { list } = props;

    const dispatch = useAppDispatch();

    function hangleCancel(id: string) {
        const form = new FormData();
        form.append('id', id);
        dispatch(cancelOrderThunk({ url: cancelOrderURL, form }));
    }

    return (
        <>
            {list.map((item, index) => (
                <li key={index} className={`${styles.item} ${gStyles.textSmall}`}>
                    <div className={styles.bodyDate}>
                        <p>Заказ от <span>{item.fromOrderDate}</span></p>
                        <div className={styles.bodyInfo}>
                            <span className={styles.price}>оплачено {item.price}$</span>
                             {item.statusDelivery === 'Получен' ? <></> : item.statusDelivery !== 'Отменен' ?  <button className={`${styles.btnCancel} ${gStyles.textSmall}`} onClick={() => hangleCancel(item.id)}>Отменить</button> : <></>}
                        </div>
                    </div>
                    {item.statusDelivery === 'Ожидает оплаты' && <ButtonGoods className={styles.btnPay} text='Оплатить' />}
                    <ul className={styles.info}>
                        <li className={styles.infoItem}>
                            <p>{item.delivery}</p>
                            <span className={`${styles.statusDelivery} ${gStyles.textSmall}`} style={{
                                background:
                                    item.statusDelivery === 'Ожидает на почте' ?
                                        'rgba(74, 77, 108, 1)'
                                        : item.statusDelivery === 'Получен' ? 'rgba(74, 108, 77, 1)'
                                            : item.statusDelivery === 'Отменен' ? 'rgba(108, 74, 74, 1)' : ''
                            }}>{item.statusDelivery}</span>
                        </li>
                        <li className={styles.infoItem}><p>Ожидаемая дата: <span>{item.waitDate}</span></p></li>
                    </ul>
                    <Accordion selectClass={styles.select} selectItem={[...item.consistOrder.map((item, index) => (<div className={styles.bodyGoods} key={index}>
                        <span className={styles.itemIndex}>{index + 1}. </span>
                        <span className={styles.itemName}>{item.name}</span>
                        <span className={styles.itemInfo}>{`(${item.volume}мл. X ${item.things})`}</span>
                    </div>))]} text='Состав заказа' />
                </li>
            ))}
        </>
    );
}