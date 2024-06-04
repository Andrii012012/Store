import styles from './styles.module.scss';

interface IProps {
    list: (number | string)[];
    setSavePrevPages: React.Dispatch<React.SetStateAction<any>>;
    countPage: number;
    onChange: (page: number) => void;
    savePrevPages: number;
    isArrow: boolean;
}

export default function ListPagination(props: IProps): JSX.Element {
    let { list, setSavePrevPages, countPage, onChange, savePrevPages, isArrow = true } = props;

    function hangleClick(e: React.MouseEvent<HTMLLIElement>) {
        if (e.target && e.target instanceof HTMLLIElement) {

            document.querySelectorAll(`.${styles.activePagination}`)
                .forEach((item) => item.classList.remove(styles.activePagination));

            e.target.classList.add(styles.activePagination);
            const value: number = Number(e.target.innerHTML);
            const resultValue: number = value * countPage;
            setSavePrevPages(value);
            onChange(resultValue);
        }
    }

    if (isArrow) {
        return (
            <>
                {list.map((item, _) => {
                    if (item !== '...') {
                        return <li onClick={(e) => hangleClick(e)} key={item}
                            className={`${styles.item} ${item === savePrevPages ? styles.activePagination : ''}`}>{item}</li>
                    } else {
                        return <li className={styles.item}>{item}</li>
                    }
                })}
            </>
        )
    } else {
        return (
            <>
                {list.map((item, _) => {
                    if (item !== '...') {
                        return <li onClick={(e) => hangleClick(e)} key={item} className={styles.item}>{item}</li>
                    } else {
                        return <li className={styles.item}>{item}</li>
                    }
                })}
            </>
        )
    }
}