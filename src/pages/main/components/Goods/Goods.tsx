import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import image1 from '../../../../assets/imgs/Goods/image-goods1.png';
import Pagination from '../../../../components/Header/api/Pagination/Pagination';
import { useRef } from 'react';

export default function Goods(): JSX.Element {

    const saveIndex = useRef<number | null>(null);

    const array = [
        {
            price: 2400,
            img: image1,
            text: 'The devil is a loser by Mushfig',
            volume: [
                10,
                30,
                50,
                10,
            ],
        },
        {
            price: 2400,
            img: image1,
            text: 'The devil is a loser by Mushfig',
            volume: [
                10,
                30,
                50,
                10,
            ],
        },
        {
            price: 2400,
            img: image1,
            text: 'The devil is a loser by Mushfig',
            volume: [
                10,
                30,
                50,
                10,
            ],
        },
        {
            price: 2400,
            img: image1,
            text: 'The devil is a loser by Mushfig',
            volume: [
                10,
                30,
                50,
                10,
            ],
        },
    ];

    return (
        <section className={styles.goods}>
            <div className={styles.wrapper}>
                <ul className={styles.list}>
                    {array.map((item) => (
                        <li key={item.img} className={styles.item}>
                            <div className={styles.bodyInfoGoods}>
                                <img className={styles.imgGoods} src={item.img} alt='iconGoods' />
                                <p className={`${styles.text} ${gStyles.text}`}>{item.text}</p>
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
                    ))}
                </ul>
                <div className={styles.pagination}>
                    <Pagination countPage={4}
                        array={[1, 2, 3, 4, 5, 6
                            , 7, 8, 9, 10, 1, 2, 3, 4, 5,
                            6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8,
                            9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                        ]} />
                </div>
            </div>
        </section>
    );
}