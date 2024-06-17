import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import { ADDRESS_PATH, DETAIL_PATH, ORDERS_PATH } from '../../route/routes';

export default function ControlPanel(): JSX.Element {

    const date = useAppSelector((state) => state.user.user);

    if (date) {
        return (
            <section className={styles.controlPanel}>
                <p className={`${styles.greeting} ${gStyles.text}`}>Добро пожаловать, {date.login}</p>
                <p className={`${gStyles.text} ${styles.text}`}>Из главной страницы аккаунта вы можете посмотреть {<Link className={styles.link} to={ORDERS_PATH}>ваши недавние заказы</Link>}, настроить
                    {<Link className={styles.link} to={ADDRESS_PATH}>платежный адрес и адрес доставки</Link>}, а также {<Link className={styles.link} to={DETAIL_PATH}>изменить пароль и основную информацию</Link>}</p>
            </section>
        );
    } else {
        return <></>;
    }
}