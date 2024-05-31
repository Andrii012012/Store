import Accordion from "../../../../containers/Accordion/Accordion";
import styles from './style.module.scss';
import './style.scss';
import gStyles from '../../../../styles/style.module.scss';
import seach from '../../../../assets/imgs/global/search.svg';
import { useEffect, useRef, useState, memo } from "react";
import useScrollbar from "../../../../hooks/useScrollbar";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { goodsFilterCategory } from "../../../../features/goods/slice";

interface IProps {
    text: string;
    selectClass?: string;
    selectItem: string[];
}

const SeachGoods = memo((props: IProps): JSX.Element => {
    let { text, selectClass = '', selectItem } = props;

    const [seach, setSeach] = useState<string>('');


    const refScroll = useRef<HTMLDivElement | null>(null);

    const goodsCategory = useAppSelector(state => state.goods.goodsCategory);

    const dispatch = useAppDispatch();

    useScrollbar(refScroll);

    function handleChooseFilter(name: string) {
        switch (name) {
            case 'По рейтингу': {
                break;
            }
        }
    }

    function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
        setSeach(e.target.value);
        dispatch(goodsFilterCategory(seach));
    }

    return (
        <section className={styles.seach}>
            <Accordion handleChoose={handleChooseFilter} text={text} selectClass={`${`${styles.section}`} ${selectClass}`} selectItem={selectItem} />
            <form action="#">
                <div className={styles.body}>
                    <div className={gStyles.bodyInput}>
                        <input className={styles.input} type="text" onChange={(e) => handleChangeInput(e)} value={seach} placeholder='Найти парфюм' />
                        <img className={gStyles.iconSeach} src={seach} alt="" />
                    </div>
                    <ul className={`${styles.list} list-goods`}>
                        <div style={{ maxHeight: '266px', display: 'flex', flexDirection: 'column' }} className={styles.bodyScroll} ref={refScroll}>
                            <li className={styles.item}>ВСЕ</li>
                            {goodsCategory.map((item: any, index) => {
                                let grand;
                                let category;
                                for (let key in item) {
                                    grand = item[key];
                                    category = key;
                                }
                                return <li key={category} className={styles.item}>{category} ({Array.isArray(grand) && grand.length})</li>
                            })}
                        </div>
                    </ul>
                </div>
            </form>
        </section>
    );
});

export default SeachGoods;