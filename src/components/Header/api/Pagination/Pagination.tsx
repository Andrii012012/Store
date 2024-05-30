import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';

interface IProps {
    array: any;
    isArrows?: boolean;
    countPage: number;
    className?: string;
    onChange: (page: number) => void;
}

export default function Pagination(props: IProps): JSX.Element {
    let { isArrows = true, array, countPage, className, onChange } = props;

    const refBtnNext = useRef<HTMLButtonElement | null>(null);

    const refBtnPrev = useRef<HTMLButtonElement | null>(null);

    const [savePrevPages, setSavePrevPages] = useState<number[]>([0]);

    const [countPagination, setCountPagination] = useState<(number | string)[]>([]);

    const length: number = array.length;

    const resultPagination: number = Math.round(length / countPage) + 1;

    function handleDesabled<T>(ref: React.MutableRefObject<T | null>, condition: string | number | boolean,
        conditionSymbol: string) {
        switch (conditionSymbol) {
            case '>=': {
                if (savePrevPages[0] >= Number(condition) && ref.current instanceof HTMLElement) {
                    ref.current.classList.add(styles.disabled);
                } else {
                    if (ref.current instanceof HTMLElement) ref.current.classList.remove(styles.disabled);
                }
                break;
            }
            case '<=': {
                if (savePrevPages[0] <= Number(condition) && ref.current instanceof HTMLElement) {
                    ref.current.classList.add(styles.disabled);
                } else {
                    if (ref.current instanceof HTMLElement) ref.current.classList.remove(styles.disabled);
                }
                break;
            }
        }
    }

    function handleFillingPagination() {
        const arrayCountPagination: (number | string)[] = [];

        for (let i = 1; i < resultPagination; i++) {
            if (savePrevPages[0] <= i && i < resultPagination - 2 && arrayCountPagination.length < 4) {
                arrayCountPagination.push(i);
            }
        }

        if (arrayCountPagination[0] === 1) {
            arrayCountPagination.push('...');
            arrayCountPagination.push(resultPagination - 2, resultPagination - 1, resultPagination);
        } else {
            arrayCountPagination.unshift('...');
            arrayCountPagination.unshift(1);
            arrayCountPagination.splice(5, 1);
            arrayCountPagination.push('...');
            arrayCountPagination.push(resultPagination - 2, resultPagination - 1, resultPagination);
        }

        if (savePrevPages[0] >= resultPagination - 3) {
            arrayCountPagination.splice(1, 1);
        }

        setCountPagination(arrayCountPagination);
    }

    function hangleIncrement() {
        setSavePrevPages((prevState): any => prevState[0] < resultPagination ? [...prevState, ++prevState[0]] : prevState);
        handleDesabled<HTMLButtonElement>(refBtnNext, resultPagination - 1, '>=');
        if (savePrevPages[0] < resultPagination) onChange(savePrevPages[0] * countPage);
    }

    function hangleDecrement() {
        setSavePrevPages((prevState): any => prevState[0] > 1 ? [...prevState, --prevState[0]] : [...prevState]);
        handleDesabled<HTMLButtonElement>(refBtnPrev, 1, '<=');
        if (savePrevPages[0] > 1) onChange(savePrevPages[0] * countPage);
    }

    useEffect(() => {
        handleFillingPagination();
        handleDesabled<HTMLButtonElement>(refBtnPrev, 1, '<=');
        handleDesabled<HTMLButtonElement>(refBtnNext, resultPagination, '>=');
    }, [savePrevPages]);

    function hangleClick(e: React.MouseEvent<HTMLLIElement>) {
        if (e.target && e.target instanceof HTMLLIElement) {

            document.querySelectorAll(`.${styles.activePagination}`)
                .forEach((item) => item.classList.remove(styles.activePagination));

            e.target.classList.add(styles.activePagination);
            const value: number = Number(e.target.innerHTML);
            const resultValue: number = value * countPage;
            setSavePrevPages([value]);
            onChange(resultValue);
        }
    }

    if (isArrows) {
        return (
            <section className={`${styles.pagination} ${className}`}>
                <div className={styles.wrapper}>
                    <button onClick={hangleDecrement} ref={refBtnPrev} className={`${styles.btn} ${styles.btnPrev}`}></button>
                    <ul className={styles.list}>
                        {countPagination.map((item, _) => {
                            if (item !== '...') {
                                return <li onClick={(e) => hangleClick(e)} key={item}
                                    className={`${styles.item} ${item === savePrevPages[0] ? styles.activePagination : ''}`}>{item}</li>
                            } else {
                                return <li className={styles.item}>{item}</li>
                            }
                        })}
                    </ul>
                    <button onClick={hangleIncrement} ref={refBtnNext} className={`${styles.btn} ${styles.btnNext}`}></button>
                </div>
            </section>
        )

    } else {
        return (
            <section className={`${styles.pagination} ${className}`}>
                <div className={styles.wrapper}>
                    <ul className={styles.list}>
                        {countPagination.map((item, _) => {
                            if (item !== '...') {
                                return <li onClick={(e) => hangleClick(e)} key={item} className={styles.item}>{item}</li>
                            } else {
                                return <li className={styles.item}>{item}</li>
                            }
                        })}
                    </ul>
                </div>
            </section>
        )
    }

}