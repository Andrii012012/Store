import { useEffect, useRef } from 'react';
import pStyles from '../../style.module.scss';
import ListPagination from '../ListPagination/ListPagination';

interface IProps {
    className?: string;
    setSavePrevPages: React.Dispatch<React.SetStateAction<number>>;
    resultPagination: number;
    savePrevPages: number;
    countPage: number;
    countPagination: (number | string)[];
    onChange: (page: number) => void;
}

export default function PaginationDefault(props: IProps): JSX.Element {

    let { className, setSavePrevPages, resultPagination, savePrevPages, countPage, countPagination, onChange } = props;

    const refBtnNext = useRef<HTMLButtonElement | null>(null);

    const refBtnPrev = useRef<HTMLButtonElement | null>(null);

    function handleDesabled<T>(ref: React.MutableRefObject<T | null>, condition: string | number | boolean,
        conditionSymbol: string) {
        switch (conditionSymbol) {
            case '>=': {
                if (savePrevPages >= Number(condition) && ref.current instanceof HTMLElement) {
                    ref.current.classList.add(pStyles.disabled);
                } else {
                    if (ref.current instanceof HTMLElement) ref.current.classList.remove(pStyles.disabled);
                }
                break;
            }
            case '<=': {
                if (savePrevPages <= Number(condition) && ref.current instanceof HTMLElement) {
                    ref.current.classList.add(pStyles.disabled);
                } else {
                    if (ref.current instanceof HTMLElement) ref.current.classList.remove(pStyles.disabled);
                }
                break;
            }
        }
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
        handleDesabled<HTMLButtonElement>(refBtnPrev, 1, '<=');
        handleDesabled<HTMLButtonElement>(refBtnNext, resultPagination, '>=');
    }, [savePrevPages]);


    return (
        <section className={`${pStyles.pagination} ${className}`}>
            <div className={pStyles.wrapper}>
                <button onClick={hangleDecrement} ref={refBtnPrev} className={`${pStyles.btn} ${pStyles.btnPrev}`}></button>
                <ul className={pStyles.list}>
                    <ListPagination savePrevPages={savePrevPages} isArrow={true} list={countPagination} setSavePrevPages={setSavePrevPages} countPage={countPage} onChange={onChange} />
                </ul>
                <button onClick={hangleIncrement} ref={refBtnNext} className={`${pStyles.btn} ${pStyles.btnNext}`}></button>
            </div>
        </section>
    )
}