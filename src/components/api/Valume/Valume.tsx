import styles from './style.module.scss';
import gStyles from '../../../styles/style.module.scss';

interface IProps {
    list: number[];
    className?: string;
}

export default function Valume(props: IProps): JSX.Element {
    let { list, className = '' } = props;
    return (
        <div className={`${styles.valume} ${className}`}>
            <p className={`${gStyles.text} ${styles.textValume}`}>Объем мл.</p>
            <ul className={styles.listValume}>
                {list.map((item) => (
                    <li key={item} className={styles.itemValume}><span>{item}</span></li>
                ))}
            </ul>
        </div>
    );
}