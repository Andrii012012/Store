import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import Pagination from '../../../../components/Header/api/Pagination/Pagination';
import { ReactNode, useRef, useState } from 'react';
import { useAppSelector } from '../../../../hooks/useAppSelector';

export default function Goods(): JSX.Element {

    const savePrevCountPage = useRef<number>(0);

    const [countShowGoods, setCountShowGoods] = useState<number>(12);

    const goods = useAppSelector((state) => state.goods.goods);

    const jsxElements: ReactNode[] = [];

    function hangleChangePage(page: number) {
        if (savePrevCountPage.current !== (page - 12)) {
            savePrevCountPage.current = (page - 12);
            setCountShowGoods(page);
        } else {
            savePrevCountPage.current = countShowGoods;
            setCountShowGoods(page);
        }
    }

    goods.forEach((item, index) => {
        if (index > savePrevCountPage.current && index < countShowGoods) {
            const element = <>
                <li key={item.img} className={styles.item}>
                    <div className={styles.bodyInfoGoods}>
                        <img className={styles.imgGoods} src={item.img} alt='iconGoods' />
                        <p className={`${styles.text} ${gStyles.text}`}>{item.description}</p>
                        <div className={styles.valume}>
                            <p className={`${gStyles.text} ${styles.textValume}`}>Объем мл.</p>
                            <ul className={styles.listValume}>
                                {item.volume.map((item) => (
                                    <li key={item} className={styles.itemValume}><span>{item}</span></li>
                                ))}
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
        <section className={styles.goods}>
            <div className={styles.wrapper}>
                <ul className={styles.list}>
                    {jsxElements && jsxElements}
                </ul>
                <div className={styles.pagination}>
                    <Pagination countPage={12}
                        array={goods} onChange={hangleChangePage} />
                </div>
            </div>
        </section>
    );
}