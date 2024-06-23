import styles from './style.module.scss';
import gStyles from '../../../styles/style.module.scss';

interface IProps {
    icon: string;
    text: string;
    className?: string;
}

export default function AlertMessage(props: IProps): JSX.Element {

    let { icon, text, className = '' } = props;

    return (
        <div className={`${styles.alertMessage} ${className}`}>
            <img className={styles.icon} src={icon} />
            <p className={`${styles.text} ${gStyles.textSmall}`}>{text}</p>
        </div>
    )
}