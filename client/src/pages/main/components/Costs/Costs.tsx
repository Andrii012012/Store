import { useCallback, useEffect, useState } from "react";
import styles from './style.module.scss';
import RangeSlider from "../../../../components/api/RangeSlider/RangeSlider";
import { debounce } from "lodash";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { choosePrice } from "../../../../features/goods/slice";

export default function Costs(): JSX.Element {

    const price = useAppSelector((state) => state.goods.filterGoods.price);

    const dispatch = useAppDispatch();

    const [range, setRange] = useState<number[]>(price);

    const handleChange = useCallback(
        debounce((array: number[] = [500, 8000]) => {
            dispatch(choosePrice(array));
        }, 1000),
        []);

    useEffect(() => {
        setRange(price);
    }, [price]);

    return (
        <section className={styles.costs}>
            <div className={styles.wrapper}>
                <div className={styles.rangeSlide}>
                    <RangeSlider
                        min={0}
                        max={10000}
                        step={1}
                        onChange={handleChange}
                        value={range}
                    />
                </div>
                <div className={styles.bodyChoosedPrices}>
                    <span>От {range[0] + '$'}</span>
                    <span>До {range[1] + '$'}</span>
                </div>
            </div>

        </section>
    );
}