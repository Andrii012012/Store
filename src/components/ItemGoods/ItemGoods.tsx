import styles from './style.module.scss';
import gStyles from '../../styles/style.module.scss';
import Valume from '../api/Valume/Valume';
import ButtonGoods from '../api/ButtonGoods/ButtonGoods';
import { IGoods } from '../../interfaces/goods';

interface IProps {
    item: IGoods,
    className?: string;
}

export default function ItemGoods(props: IProps): JSX.Element {
    let { item, className = '' } = props;
    return (
        <li key={item.img} className={`${styles.item} ${className}`}>
            <div className={styles.bodyInfoGoods}>
                <img className={styles.imgGoods} src={item.img} alt='iconGoods' />
                <p className={`${styles.text} ${gStyles.text}`}>{item.name}</p>
                <Valume list={item.volume} />
                <div className={styles.bodyPrice}>
                    <p className={gStyles.textInfo}>Стоимость:</p>
                    <span className={gStyles.textInfo}>{item.price}$</span>
                </div>
                <ButtonGoods className={styles.btn} />
            </div>
        </li>
    )
}