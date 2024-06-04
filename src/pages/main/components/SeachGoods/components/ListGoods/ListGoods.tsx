import { IGoodsCategory } from "../../../../../../interfaces/goods";
import styles from './style.module.scss';

interface IProps {
    list: IGoodsCategory[];
    isSection: (value: string) => void;
}

export default function ListGoods(props: IProps): JSX.Element {
    let { list, isSection } = props;

    function handleChoose(e: React.MouseEvent<HTMLLIElement>) {
        if (e.target instanceof HTMLLIElement) {
            isSection(e.target.children[0].innerHTML)
        }
    }

    return (
        <>
         <li className={styles.item}>ВСЕ</li>
            {list.map((item) => {
                let grand;
                let category;
                for (let key in item) {
                    grand = item[key];
                    category = key;
                }
                return <li onClick={(e) => handleChoose(e)} key={category} className={styles.item}><span>{category}</span> <span>({Array.isArray(grand) && grand.length})</span></li>
            })}</>
    );
}