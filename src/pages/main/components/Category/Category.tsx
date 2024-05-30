import styles from './style.module.scss';
import './style.scss';
import gStyles from '../../../../styles/style.module.scss';
import Accordion from '../../../../containers/Accordion/Accordion';
import SeachGoods from '../SeachGoods/SeachGoods';
import Costs from '../Costs/Costs';
import ChooseGender from '../ChooseGender/ChooseGender';
import Goods from '../Goods/Goods';
import { useEffect, useState } from 'react';

const itemFilter: JSX.Element[] = [
    <Accordion text='Бренд' selectClass={`${styles.selectItemFilter}`} defaultMode={false} selectItem={[<SeachGoods text='Все бренды' selectItem={['1']} />]} ></Accordion>,
    <Accordion text='Стоимость' selectClass={styles.selectItemFilter} defaultMode={false} selectItem={[<Costs />]}></Accordion>,
    <Accordion text='Пол' selectClass={`${styles.selectItemFilter}`} defaultMode={false} selectItem={[<ChooseGender />]}></Accordion>,
    <Accordion text='Ноты' selectClass={`${styles.selectItemFilter}`} defaultMode={false} selectItem={[<SeachGoods text='Все' selectItem={['1']} />]}></Accordion>,
    <button className={styles.btnReset}><span>Сбросить</span></button>
];

export default function Category(): JSX.Element {

    const [updata, setUpdata] = useState<boolean>(false);

    function handleChange(e: React.MouseEvent) {
        if (e.target && e.target === document.querySelector('.category-select > div')) {
            setUpdata(!updata);
        }
    }

    return (
        <section className={styles.category}>
            <div className={gStyles.container}>
                <h2 className={`${gStyles.titleSmall} ${styles.title}`}>Каталог</h2>
                <div className={styles.wrapper}>
                    <div className={styles.bodyFilter}>
                        <div onClick={(e) => handleChange(e)}>
                            <Accordion text='Фильтры' selectClass={`${styles.select} ${styles.selectFilter} category-select`} defaultMode={false} selectItem={itemFilter} />
                        </div>
                        <div className={styles.filter} style={{ display: updata ? 'flex' : 'contents' }}>
                            <Accordion text='По популярности' selectClass={`${styles.select} ${styles.selectPopular}`} selectItem={['По популярности', 'По рейтингу', 'Сортировка от последнего', 'Цена по убыванию', 'Цена по возрастанию']} />
                            <div className={styles.bodyGoods}>
                                <Goods />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}