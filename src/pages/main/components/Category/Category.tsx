import styles from './style.module.scss';
import './style.scss';
import gStyles from '../../../../styles/style.module.scss';
import Accordion from '../../../../containers/Accordion/Accordion';
import SeachGoods from '../SeachGoods/SeachGoods';
import Costs from '../Costs/Costs';

const itemFilter: JSX.Element[] = [
    <Accordion text='Бренд' selectClass={`${styles.selectItemFilter}`} defaultMode={false} selectItem={[<SeachGoods text='Все бренды' selectItem={['1']} />]} ></Accordion>,
    <Accordion text='Стоимость' selectClass={styles.selectItemFilter} defaultMode={false} selectItem={[<Costs/>]}></Accordion>,
    <Accordion text='Пол' selectClass={`${styles.selectItemFilter}`} selectItem={['Пол']}></Accordion>,
    <Accordion text='Ноты' selectClass={`${styles.selectItemFilter}`} selectItem={['Ноты']}></Accordion>,
];


export default function Category(): JSX.Element {

    return (
        <section className={styles.category}>
            <div className={gStyles.container}>
                <h2 className={`${gStyles.titleSmall} ${styles.title}`}>Каталог</h2>
                <div className={styles.filter}>
                    <Accordion text='Фильтры' selectClass={`${styles.select} category-select`} defaultMode={false} selectItem={itemFilter} />
                    <Accordion text='По популярности' selectClass={styles.select} selectItem={['По популярности', 'По рейтингу', 'Сортировка от последнего', 'Цена по убыванию', 'Цена по возрастанию']} />
                </div>
            </div>
        </section>
    );
}