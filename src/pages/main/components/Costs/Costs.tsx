import { useState } from "react";
import styles from './style.module.scss';
import RangeSlider from "../../../../components/Header/api/RangeSlider/RangeSlider";


export default function Costs(): JSX.Element {
    const [range, setRange] = useState<number[]>([500, 8000]);
    return (
        <section className={styles.costs}>
            <div className={styles.wrapper}>
                <div className={styles.rangeSlide}>
                    <RangeSlider
                        min={0}
                        max={10000}
                        step={1}
                        onChange={setRange}
                        value={range}
                    />
                </div>
                <div  className={styles.bodyChoosedPrices}>
                    <span>От {range[0] + '$'}</span>
                    <span>До {range[1] + '$'}</span>
                </div>
            </div>

        </section>
    );
}