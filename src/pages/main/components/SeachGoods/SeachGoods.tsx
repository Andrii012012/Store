import Accordion from "../../../../containers/Accordion/Accordion";
import styles from './style.module.scss';
import './style.scss';
import gStyles from '../../../../styles/style.module.scss';
import { useRef, useState, memo } from "react";
import useScrollbar from "../../../../hooks/useScrollbar";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { chooseBrand, chooseNotes, seachFilter } from "../../../../features/goods/slice";
import { filterSeach } from "../../../../features/goods/createSelect";
import { IGoodsCategory } from "../../../../interfaces/goods";
import ListGoods from "./components/ListGoods/ListGoods";

interface IProps {
    text: string;
    selectClass?: string;
    selectItem: string[];
}

const SeachGoods = memo((props: IProps): JSX.Element => {
    let { text, selectClass = '', selectItem } = props;

    const [seach, setSeach] = useState<string>('');

    const refScroll = useRef<any | null>(null);

    const goods = useAppSelector(filterSeach);

    const dispatch = useAppDispatch();

    useAppSelector(filterSeach);

    useScrollbar(refScroll);

    function handleChooseFilter(name: string) {
        switch (name) {
            case 'По рейтингу': {
                break;
            }
        }
    }

    function isSection(value: string) {
        if (text === 'Бренд') {
            dispatch(chooseBrand(value));
        } else {
            dispatch(chooseNotes(value));
        }
    }

    function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
        setSeach(e.target.value);
        dispatch(seachFilter({ type: 'filterSeach', name: seach }));
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
                            <div style={{ display: 'contents' }}>
                                <ListGoods list={goods} isSection={isSection} />
                            </div>
                        </div>
                    </ul>
                </div>
            </form>
        </section>
    );
});

export default SeachGoods;