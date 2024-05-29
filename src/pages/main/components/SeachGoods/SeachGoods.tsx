import Accordion from "../../../../containers/Accordion/Accordion";
import styles from './style.module.scss';
import './style.scss';
import gStyles from '../../../../styles/style.module.scss';
import seach from '../../../../assets/imgs/global/search.svg';
import { useRef } from "react";
import useScrollbar from "../../../../hooks/useScrollbar";

interface IProps {
    text: string;
    selectClass?: string;
    selectItem: string[];
}

export default function SeachGoods(props: IProps): JSX.Element {
    let { text, selectClass = '', selectItem } = props;

    const refScroll = useRef<HTMLDivElement | null>(null);

        useScrollbar(refScroll);

    const array = [{
        name: 'Acqua di parma',
        grand: 2,
    }, {
        name: 'Ajmal',
        grand: 7,
    }, {
        name: 'Alexandre. J',
        grand: 5,
    }, {
        name: 'Amouage',
        grand: 4,
    }, {
        name: 'Anna Sui',
        grand: 3,
    }, {
        name: 'Antonio Banderas ',
        grand: 1,
    }];

    return (
        <section className={styles.seach}>
            <Accordion text={text} selectClass={`${`${styles.section}`} ${selectClass}`} selectItem={selectItem} />
            <form action="#">
                <div className={styles.body}>
                    <div className={gStyles.bodyInput}>
                        <input className={styles.input} type="text" placeholder='Найти парфюм' />
                        <img className={gStyles.iconSeach} src={seach} alt="" />
                    </div>
                    <ul className={`${styles.list} list-goods`}>
                        <div style={{height: '266px'}} className={styles.bodyScroll} ref={refScroll}>
                            <li className={styles.item}>ВСЕ</li>
                            {array.map((item, _) => (
                                <li className={styles.item} key={item.name}>{item.name} {item.grand}</li>
                            ))}
                        </div>
                    </ul>
                </div>
            </form>
        </section>
    );
}