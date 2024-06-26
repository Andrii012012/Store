import styles from './style.module.scss';
import './style.scss';
import gStyles from '../../../../styles/style.module.scss';
import Accordion from '../../../../containers/Accordion/Accordion';
import SeachGoods from '../SeachGoods/SeachGoods';
import Costs from '../Costs/Costs';
import ChooseGender from '../ChooseGender/ChooseGender';
import Goods from '../Goods/Goods';
import { useState, memo } from 'react';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { clearSettings, filterChange } from '../../../../features/goods/slice';


export const Category = memo((): JSX.Element => {

    const [updata, setUpdata] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    function handleChooseFilter(name: any) {
        dispatch(filterChange(name));
    }

    function handleSet(value: boolean) {
        setUpdata(!value);
    }

    const itemFilter: JSX.Element[] = [
        <Accordion handleChoose={handleChooseFilter} text='Бренд' selectClass={`${styles.selectItemFilter} ${styles.selectItemFilterExtra} selectMenuControl`}
            defaultMode={false} selectItem={[<SeachGoods selectClass={`selectAllThing`} text='Все бренды' selectItem={['1']} />]} ></Accordion>,
        <Accordion handleChoose={handleChooseFilter} text='Стоимость' selectClass={`${styles.selectItemFilter}  ${styles.selectItemFilterExtra} selectMenuControl`}
            defaultMode={false} selectItem={[<Costs />]}></Accordion>,
        <Accordion handleChoose={handleChooseFilter} text='Пол' selectClass={`${styles.selectItemFilter} selectMenuControl`}
            defaultMode={false} selectItem={[<ChooseGender />]}></Accordion>,
        <Accordion handleChoose={handleChooseFilter} text='Ноты' selectClass={`${styles.selectItemFilter} ${styles.selectItemFilterExtra} selectMenuControl`}
            defaultMode={false} selectItem={[<SeachGoods selectClass={`selectAllThing`} text='Все' selectItem={['1']} />]}></Accordion>,
        <button onClick={() => dispatch(clearSettings())} className={styles.btnReset}><span>Сбросить</span></button>
    ];

    return (
        <section className={styles.category}>
            <div className={gStyles.container}>
                <h2 className={`${gStyles.titleSmall} ${styles.title}`}>Каталог</h2>
                <div className={styles.wrapper}>
                    <div className={styles.bodyFilter}>
                        <div className={styles.wrapperFilter}>
                            <Accordion handleSet={handleSet} handleChoose={handleChooseFilter} text='Фильтры' selectClass={`${styles.select} ${styles.selectFilter} select-category category-select`} defaultMode={false} selectItem={itemFilter} />
                        </div>
                        <div className={styles.filter} style={{ display: updata ? 'flex' : 'contents' }} >
                            <Accordion handleChoose={handleChooseFilter} text='По популярности' selectClass={`${styles.select} ${styles.selectPopular} select-category`} selectItem={['По популярности', 'По рейтингу', 'Сортировка от последнего', 'Цена по убыванию', 'Цена по возрастанию']} />
                            <div className={styles.bodyGoods}>
                                <Goods />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
