import AlertMessage from '../../../../../../components/api/AlertMessage/AlertMessage';
import gStyles from '../../../../../../styles/style.module.scss';
import styles from './style.module.scss';

interface IProps {
    alertMessage: boolean;
    alertMessageIcon?: string;
    className?: string;
    alertMessageText?: string;
}

export default function Header(props: IProps): JSX.Element {
    let { alertMessage, alertMessageIcon, className = '', alertMessageText } = props;
    return (
        <div className={className}>
            <h1 className={`${styles.title} ${gStyles.titleSmall}`
            }> Адрес</h1>
            {alertMessage && <AlertMessage icon={alertMessageIcon || ''} className={styles.success} text={alertMessageText || ''} />}
            <p className={`${styles.text} ${gStyles.textSmall}`}>Следующие адреса будут использованы при оформлении заказов по-умолчанию</p>
            <h2 className={styles.addressPay}>Платёжный адрес:</h2>
        </div>
    );
}