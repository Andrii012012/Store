import pStyles from '../../style.module.scss';
import ListPagination from '../ListPagination/ListPagination';

interface IProps {
    className?: string;
    savePrevPages: number;
    countPagination: (number | string)[];
    setSavePrevPages: React.Dispatch<React.SetStateAction<number>>;
    countPage: number;
    onChange: (page: number) => void;
}

export default function PaginationDefault(props: IProps): JSX.Element {

    let { className, savePrevPages, countPagination, setSavePrevPages, countPage, onChange } = props;

    return (
        <section className={`${pStyles.pagination} ${className}`}>
            <div className={pStyles.wrapper}>
                <ListPagination savePrevPages={savePrevPages} isArrow={false} list={countPagination} setSavePrevPages={setSavePrevPages} countPage={countPage} onChange={onChange} />
            </div>
        </section>
    )
}