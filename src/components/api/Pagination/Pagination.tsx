import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import PaginationExtra from './components/PaginationExtra/PaginationExtra';
import PaginationDefault from './components/PaginationExtra/PaginationExtra';
interface IProps<T> {
    array: T[];
    isArrows?: boolean;
    countPage: number;
    className?: string;
    onChange: (page: number) => void;
}

export default function Pagination<T>(props: IProps<T>): JSX.Element {
    let { isArrows = true, array, countPage, className, onChange } = props;

    const goods = useAppSelector((state) => state.goods);

    const refSaveIsMobile = useRef<boolean>(window.matchMedia('(max-width: 480px)').matches ? true : false);

    const refSaveShowNumberPagination = useRef<number>(window.matchMedia('(max-width: 480px)').matches ? 1 : 4);
    
    const [savePrevPages, setSavePrevPages] = useState<number>(1);

    const [countPagination, setCountPagination] = useState<(number | string)[]>([]);

    const length: number = array.length;

    const resultPagination: number = Math.round(length / countPage);

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
            if (length > 8) {
                arrayCountPagination.push('...');
                !isMobile
                    ? arrayCountPagination.push(resultPagination - 2, resultPagination - 1, resultPagination)
                    : arrayCountPagination.push(resultPagination);
            }
        }

        if (savePrevPages >= resultPagination - 3) {
            arrayCountPagination.splice(1, 1);
        }

        setCountPagination(arrayCountPagination);
    }

    useEffect(() => {
        handleFillingPagination(refSaveIsMobile.current, refSaveShowNumberPagination.current);
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
            <PaginationExtra
                className={className}
                setSavePrevPages={setSavePrevPages}
                resultPagination={resultPagination}
                savePrevPages={savePrevPages}
                countPage={countPage}
                countPagination={countPagination}
                onChange={onChange}
            />
        )

    } else {
        return (
            <PaginationDefault
                className={className}
                setSavePrevPages={setSavePrevPages}
                resultPagination={resultPagination}
                savePrevPages={savePrevPages}
                countPage={countPage}
                countPagination={countPagination}
                onChange={onChange}
            />
        )
    }

}