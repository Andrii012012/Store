import { ReactElement } from "react";
import styles from './styles.module.scss';
import gStyles from '../../../../../../styles/style.module.scss';
import ListValume from "../ListVolume/ListVolume";
import { IGoods } from '../../../../../../interfaces/goods';

interface IProps {
    list: IGoods[];
    countShowGoods: number;
    countPrevPage: React.MutableRefObject<number>;
}

export default function ListGoods(props: IProps): JSX.Element {
    let { list, countShowGoods, countPrevPage } = props;

    const jsxElements: JSX.Element[] = [];

    list.forEach((item, index) => {
        if (index > countPrevPage.current && index <= countShowGoods) {
            const element = <>
                <li key={item.img} className={styles.item}>
                    <div className={styles.bodyInfoGoods}>
                        <img className={styles.imgGoods} src={item.img} alt='iconGoods' />
                        <p className={`${styles.text} ${gStyles.text}`}>{item.name}</p>
                        <div className={styles.valume}>
                            <p className={`${gStyles.text} ${styles.textValume}`}>Объем мл.</p>
                            <ul className={styles.listValume}>
                                <ListValume list={item.volume} />
                            </ul>
                        </div>
                        <div className={styles.bodyPrice}>
                            <p className={gStyles.textInfo}>Стоимость:</p>
                            <span className={gStyles.textInfo}>{item.price}$</span>
                        </div>
                        <button className={styles.btn}><span>в корзину</span></button>
                    </div>
                </li>
            </>
            jsxElements.push(element);
        }
    })

    return (
        <>
            {jsxElements.map((item) => item)}
        </>
    );

}