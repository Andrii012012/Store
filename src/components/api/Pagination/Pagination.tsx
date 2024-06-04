import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { useAppSelector } from '../../../hooks/useAppSelector';
import ListPagination from './components/ListPagination/ListPagination';

interface IProps {
    array: any;
    isArrows?: boolean;
    countPage: number;
    className?: string;
    onChange: (page: number) => void;
}

export default function Pagination(props: IProps): JSX.Element {
    let { isArrows = true, array, countPage, className, onChange } = props;

    const goods = useAppSelector((state) => state.goods);


    const refSaveIsMobile = useRef<boolean>(window.matchMedia('(max-width: 480px)').matches ? true : false);

    const refSaveShowNumberPagination = useRef<number>(window.matchMedia('(max-width: 480px)').matches ? 1 : 4);


    const refBtnNext = useRef<HTMLButtonElement | null>(null);

    const refBtnPrev = useRef<HTMLButtonElement | null>(null);

    const [savePrevPages, setSavePrevPages] = useState<number>(1);

    const [countPagination, setCountPagination] = useState<(number | string)[]>([]);


    const length: number = array.length;

    const resultPagination: number = Math.round(length / countPage);

    function handleDesabled<T>(ref: React.MutableRefObject<T | null>, condition: string | number | boolean,
        conditionSymbol: string) {
        switch (conditionSymbol) {
            case '>=': {
                if (savePrevPages >= Number(condition) && ref.current instanceof HTMLElement) {
                    ref.current.classList.add(styles.disabled);
                } else {
                    if (ref.current instanceof HTMLElement) ref.current.classList.remove(styles.disabled);
                }
                break;
            }
            case '<=': {
                if (savePrevPages <= Number(condition) && ref.current instanceof HTMLElement) {
                    ref.current.classList.add(styles.disabled);
                } else {
                    if (ref.current instanceof HTMLElement) ref.current.classList.remove(styles.disabled);
                }
                break;
            }
        }
    }

    function handleFillingPagination(isMobile: boolean, count: number) {
        const arrayCountPagination: (number | string)[] = [];

        for (let i = 1; i < resultPagination; i++) {
            if (savePrevPages <= i && i < resultPagination - 2 && arrayCountPagination.length < count) {
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
            !isMobile
                ? arrayCountPagination.push(resultPagination - 2, resultPagination - 1, resultPagination)
                : arrayCountPagination.push(resultPagination);
        }

        if (savePrevPages >= resultPagination - 3) {
            arrayCountPagination.splice(1, 1);
        }

        setCountPagination(arrayCountPagination);
    }

    function hangleIncrement() {
        setSavePrevPages((prevState): number => prevState < resultPagination ? ++prevState : prevState);
        handleDesabled<HTMLButtonElement>(refBtnNext, resultPagination, '>=');
        if (savePrevPages < resultPagination) onChange((savePrevPages + 1) * countPage);
    }

    function hangleDecrement() {
        setSavePrevPages((prevState): number => prevState > 1 ? --prevState : prevState);
        handleDesabled<HTMLButtonElement>(refBtnPrev, 1, '<=');
        if (savePrevPages > 1) onChange((savePrevPages - 1) * countPage);
    }


    useEffect(() => {
        handleFillingPagination(refSaveIsMobile.current, refSaveShowNumberPagination.current);
        handleDesabled<HTMLButtonElement>(refBtnPrev, 1, '<=');
        handleDesabled<HTMLButtonElement>(refBtnNext, resultPagination, '>=');
    }, [savePrevPages, goods]);

    useEffect(() => {

        function hangleChange() {
            if (window.matchMedia('(max-width: 480px)').matches && !refSaveIsMobile.current) {
                refSaveShowNumberPagination.current = 1;
                handleFillingPagination(refSaveIsMobile.current, refSaveShowNumberPagination.current);
                refSaveIsMobile.current = true;
            } else if (window.matchMedia('(min-width: 481px)').matches && refSaveIsMobile.current) {
                refSaveShowNumberPagination.current = 4;
                handleFillingPagination(refSaveIsMobile.current, refSaveShowNumberPagination.current);
                refSaveIsMobile.current = false;
            }
        }

        window.addEventListener('resize', hangleChange);

        return () => {
            window.removeEventListener('resize', hangleChange);
        }

    }, []);


    if (isArrows) {
        return (
            <section className={`${styles.pagination} ${className}`}>
                <div className={styles.wrapper}>
                    <button onClick={hangleDecrement} ref={refBtnPrev} className={`${styles.btn} ${styles.btnPrev}`}></button>
                    <ul className={styles.list}>
                        <ListPagination savePrevPages={savePrevPages} isArrow={true} list={countPagination} setSavePrevPages={setSavePrevPages} countPage={countPage} onChange={onChange} />
                    </ul>
                    <button onClick={hangleIncrement} ref={refBtnNext} className={`${styles.btn} ${styles.btnNext}`}></button>
                </div>
            </section>
        )

    } else {
        return (
            <section className={`${styles.pagination} ${className}`}>
                <div className={styles.wrapper}>
                    <ListPagination savePrevPages={savePrevPages} isArrow={false} list={countPagination} setSavePrevPages={setSavePrevPages} countPage={countPage} onChange={onChange} />
                </div>
            </section>
        )
    }

}