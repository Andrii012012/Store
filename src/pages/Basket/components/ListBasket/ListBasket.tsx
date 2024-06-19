import Checkbox from '../../../../components/api/Checkbox/Checkbox';
import Counter from '../../../../components/api/Counter/Counter';
import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import { IBasket } from '../../../../interfaces/basket';
import img from '../../../../assets/imgs/Goods/image-goods1.png';
import { changeCheckboxThunk, changeCountGoodsThunk, getBasketThunk, removeGoodsThunk } from '../../../../features/basket/basket';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { changeCheckboxURL, changeCountGoodsURL, getBasketURL, removeGoodsURL } from '../../../../config/config';

interface IProps {
    list: IBasket[];
    id: string;
    status: string;
}

export default function ListBasket(props: IProps): JSX.Element {

    let { list, status, id } = props;

    const dispatch = useAppDispatch();

    function renderState() {
        if (status === 'success' && id) {
            const form = new FormData();
            form.append('id', id);
            dispatch(getBasketThunk({ url: getBasketURL, form }));
        }
    }

    function hangleChangeCheckbox(value: boolean, id: string) {
        const form = new FormData();
        form.append('id', id);
        form.append('checked', String(!value));
        dispatch(changeCheckboxThunk({ url: changeCheckboxURL, form }));
        renderState();
    }

    function hangleRemoveGoods(id: string) {
        const form = new FormData();
        form.append('id', id);
        dispatch(removeGoodsThunk({ url: removeGoodsURL, form }));
        renderState();
    }

    function hangleChangeCountGoods(id: string, price: number, method: string) {
        const form = new FormData();
        form.append('id', id);
        form.append('method', method);
        form.append('price', String(price));
        dispatch(changeCountGoodsThunk({ url: changeCountGoodsURL, form }));
        renderState();
    }

    return (
        <ul className={styles.list}>
            {list.map((item) => (
                <li key={item.id} className={styles.item}>
                    <div className={styles.checkbox} onClick={() => hangleChangeCheckbox(item.checked, item.id)}>
                        <Checkbox value={item.checked} />
                    </div>
                    <div className={styles.goods}>
                        <div className={styles.imageGoods}><img src={img} /></div>
                        <div className={styles.bodyControll}>
                            <div className={styles.infoGoods}>
                                <p className={`${styles.goodsName} ${gStyles.text}`}>{item.name}, <span>{item.volume}мл</span></p>
                                <div className={styles.bodyPrice}>
                                    <p className={`${styles.price} ${gStyles.text}`}>{item.price}$</p>
                                    <Counter className={styles.count} selfProcessing={false} increment={() => hangleChangeCountGoods(item.id, item.price, 'increment')} decrement={() => hangleChangeCountGoods(item.id, item.price, 'decrement')} value={item.things} />
                                </div>
                            </div>
                            <button onClick={() => hangleRemoveGoods(item.id)} className={styles.btn}>Удалить</button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}