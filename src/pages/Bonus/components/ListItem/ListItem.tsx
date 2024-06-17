import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import { TListItem } from '../../interface/interface';

interface IProps {
    list: TListItem[];
}

export default function ListItem(props: IProps): JSX.Element {

    let { list } = props;

    return (
        <>
            {list.map((item, index) => (
                <li className={styles.item} key={index}>
                    {item.extraText && <p className={`${styles.extraInfoText} ${gStyles.text}`}>{item.extraText}</p>}
                    <p className={`${styles.itemText} ${gStyles.text}`}>{item.text}</p>
                    <picture>
                        <source srcSet={item.image[1]} media="(max-width: 480px)" />
                        <img className={styles.image} src={item.image[0]} alt="image" />
                    </picture>
                </li>
            ))}</>
    );
}