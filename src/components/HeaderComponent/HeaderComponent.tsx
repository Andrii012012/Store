import styles from './style.module.scss';
import gStyles from '../../styles/style.module.scss';

interface IProps {
    className?: string;
    text: string;
    title: string;
}

export default function HeaderComponent(props: IProps): JSX.Element {
    let { className = '', text, title } = props;
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <h1 className={`${gStyles.title} ${styles.title}`}>{title}</h1>
            <ul className={`${styles.listInfo} ${gStyles.textSmall}`}>
                <li>Главная<span>/</span></li>
                <li>{text}</li>
            </ul>
        </div>
    )
}