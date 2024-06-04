import { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { useAppSelector } from '../../../hooks/useAppSelector';

interface IProps {
    clasess?: string;
    isShowTooltip?: boolean;
    max: number;
    min: number;
    onChange: any;
    step: number;
    value: number[];
}

export default function RangeSlider(props: IProps): JSX.Element | any {
    let { clasess, isShowTooltip = true, max, min, onChange, step, value } = props;

    const statePrice = useAppSelector((state) => state.goods.filterGoods.price);

    let zIndexMin = '10';
    let zIndexMax = '20';

    const [minValue, setMinValue] = useState<number>(value[0]);
    const [maxValue, setMaxValue] = useState<number>(value[1]);

    const refTrack = useRef<HTMLDivElement | null>(null);
    const refInputMin = useRef<HTMLInputElement | null>(null);
    const refInputMax = useRef<HTMLInputElement | null>(null);
    const refMinTooptip = useRef<HTMLDivElement | null>(null);
    const refMaxTooptip = useRef<HTMLDivElement | null>(null);

    function hangleChangeValueMin(e: ChangeEvent<HTMLInputElement>) {
        if (refInputMin && refInputMin.current && refInputMax && refInputMax.current) {
            refInputMin.current.style.zIndex = zIndexMin;
            refInputMax.current.style.zIndex = zIndexMax;
        }
        if (refMinTooptip && refMinTooptip.current && refMaxTooptip && refMaxTooptip.current) {
            refMinTooptip.current.style.zIndex = zIndexMin;
            refMaxTooptip.current.style.zIndex = zIndexMax;
        }
        const value = Number(e.target.value);
        if (value <= maxValue) {
            setMinValue(value);
            onChange([value, maxValue]);
        }
    }

    function hangleChangeValueMax(e: ChangeEvent<HTMLInputElement>) {
        if (refInputMin && refInputMin.current && refInputMax && refInputMax.current) {
            refInputMin.current.style.zIndex = zIndexMin;
            refInputMax.current.style.zIndex = zIndexMax;
        }
        if (refMinTooptip && refMinTooptip.current && refMaxTooptip && refMaxTooptip.current) {
            refMinTooptip.current.style.zIndex = zIndexMin;
            refMaxTooptip.current.style.zIndex = zIndexMax;
        }
        const value = Number(e.target.value);
        if (value >= minValue) {
            setMaxValue(value);
            onChange([minValue, value]);
        }
    }

    useEffect(() => {
        if (refMinTooptip
            && refMinTooptip.current && refMaxTooptip &&
            refMaxTooptip.current && refTrack.current && refMinTooptip.current) {
            const numberMinLeft = ((minValue - min) / (max - min)) * 100;
            const numberMaxRight = ((max - maxValue) / (max - min)) * 100;
            const minLeft = `${numberMinLeft}%`;
            const maxRight = `${numberMaxRight}%`;
            refMinTooptip.current.style.left = minLeft;
            refMinTooptip.current.style.width = `${(51 - numberMinLeft)}%`;
            refMaxTooptip.current.style.right = maxRight;
            refMaxTooptip.current.style.width = `${(51 - numberMaxRight)}%`;
        }
    }, [max, min, maxValue, minValue, statePrice]);


    useEffect(() => {
        setMaxValue(statePrice[1]);
        setMinValue(statePrice[0]);
    }, [statePrice]);

    return (
        <div className={`${styles.rangeSlider} ${clasess}`}>
            <div className={styles.rangeWrapper}>
                <div className={styles.rangeTrack} ref={refTrack}>
                    <input
                        type='range'
                        name='min'
                        onChange={hangleChangeValueMin}
                        max={max}
                        min={min}
                        className={`${styles.inputMin} ${styles.input}`}
                        ref={refInputMin}
                        value={minValue}
                        step={step}
                    />
                    <input
                        type='range'
                        name='max'
                        onChange={hangleChangeValueMax}
                        max={max}
                        min={min}
                        className={`${styles.inputMax} ${styles.input}`}
                        ref={refInputMax}
                        value={maxValue}
                        step={step}
                    />
                    {isShowTooltip && (
                        <>
                            <div className={styles.wrapperTooltip} ref={refMinTooptip}>

                            </div>
                            <div className={styles.wrapperTooltip} ref={refMaxTooptip}>

                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}






