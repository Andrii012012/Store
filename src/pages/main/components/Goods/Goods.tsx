import styles from './style.module.scss';
import Pagination from '../../../../components/api/Pagination/Pagination';
import { useRef, useState } from 'react';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { FilterProducts } from '../../../../features/goods/createSelect';
import ListGoods from './components/ListGoods/ListGoods';

export default function Goods(): JSX.Element {

    const savePrevCountPage = useRef<number>(0);

    const [countShowGoods, setCountShowGoods] = useState<number>(12);

    const goods = useAppSelector(FilterProducts);

    function hangleChangePage(page: number) {

        if (savePrevCountPage.current !== (page - 12)) {
            savePrevCountPage.current = (page - 12);
            setCountShowGoods(page);
        }
        else {
            savePrevCountPage.current = countShowGoods;
            setCountShowGoods(page);
        }

    }

    return (
        <section className={styles.goods}>
            <div className={styles.wrapper}>
                <ul className={styles.listGoods}>
                    <ListGoods list={goods} countPrevPage={savePrevCountPage} countShowGoods={countShowGoods} />
                </ul>
                <div style={{ minWidth: '100%' }} className={styles.pagination}>
                    <Pagination countPage={12}
                        array={goods} onChange={hangleChangePage} />
                </div>
            </div>
        </section>
    );
}