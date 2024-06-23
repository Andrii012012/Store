import styles from './style.module.scss';
import gStyles from '../../../../../../styles/style.module.scss';
import success from '../../../../../../assets/imgs/global/success.svg';
import { IUser } from '../../../../../../interfaces/user';
import AlertMessage from '../../../../../../components/api/AlertMessage/AlertMessage';
import Header from '../Header/Header';

interface IProps {
    user: IUser,
    onChange: () => void;
}

export default function ListData(props: IProps): JSX.Element {
    let { user, onChange } = props;
    return (
        <section className={styles.address}>
            <Header className={styles.success} alertMessage={true} alertMessageIcon={success} alertMessageText='Адрес успешно изменен'/>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <span>{user.address.name}</span>
                    <span>{user.address.surname}</span>
                </li>
                <li className={styles.item}>
                    <span>{user.address.country}</span>
                    <span>{user.address.address}</span>
                </li>
                <li className={styles.item}>
                    {user.address.locality}
                </li>
                <li className={styles.item}>
                    {user.address.area}
                </li>
                <li className={styles.item}>
                    {user.address.postcode}
                </li>
            </ul>
            <button className={`${gStyles.textSmall} ${styles.btn}`} onClick={onChange}>Изменить</button>
        </section>
    );
}