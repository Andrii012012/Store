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

    function handleChooseFilter(name: string) {
        switch (name) {
            case 'По популярности': {
                dispatch(filterChange('inPopular'));
                break;
            }
            case 'По рейтингу': {
                dispatch(filterChange("inRating"));
                break;
            }
            case 'Сортировка от последнего': {
                dispatch(filterChange("inLast"));
                break;
            }
            case 'Цена по убыванию': {
                dispatch(filterChange("inDescending"));
                break;
            }
            case 'Цена по возрастанию': {
                dispatch(filterChange("inAscending"));
                break;
            }
        }
    }

    function handleSet(value: boolean) {
        setUpdata(!value);
    }

    const itemFilter: JSX.Element[] = [
        <Accordion handleChoose={handleChooseFilter} text='Бренд' selectClass={`${styles.selectItemFilter}`}
            defaultMode={false} selectItem={[<SeachGoods text='Все бренды' selectItem={['1']} />]} ></Accordion>,
        <Accordion handleChoose={handleChooseFilter} text='Стоимость' selectClass={styles.selectItemFilter}
            defaultMode={false} selectItem={[<Costs />]}></Accordion>,
        <Accordion handleChoose={handleChooseFilter} text='Пол' selectClass={`${styles.selectItemFilter}`}
            defaultMode={false} selectItem={[<ChooseGender />]}></Accordion>,
        <Accordion handleChoose={handleChooseFilter} text='Ноты' selectClass={`${styles.selectItemFilter}`}
            defaultMode={false} selectItem={[<SeachGoods text='Все' selectItem={['1']} />]}></Accordion>,
        <button onClick={() => dispatch(clearSettings())} className={styles.btnReset}><span>Сбросить</span></button>
    ];

    return (
        <section className={styles.category}>
            <div className={gStyles.container}>
                <h2 className={`${gStyles.titleSmall} ${styles.title}`}>Каталог</h2>
                <div className={styles.wrapper}>
                    <div className={styles.bodyFilter}>
                        <div>
                            <Accordion handleSet={handleSet} handleChoose={handleChooseFilter} text='Фильтры' selectClass={`${styles.select} ${styles.selectFilter} category-select`} defaultMode={false} selectItem={itemFilter} />
                        </div>
                        <div className={styles.filter} style={{ display: updata ? 'flex' : 'contents' }}>
                            <Accordion handleChoose={handleChooseFilter} text='По популярности' selectClass={`${styles.select} ${styles.selectPopular}`} selectItem={['По популярности', 'По рейтингу', 'Сортировка от последнего', 'Цена по убыванию', 'Цена по возрастанию']} />
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