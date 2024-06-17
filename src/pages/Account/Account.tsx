import gStyles from '../../styles/style.module.scss';
import styles from './style.module.scss';
import Sign from './components/Sign/Sign';
import Register from './components/Register/Register';
import { useRef, useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import MenuAccount from './components/MenuAccount/MenuAccount';

export default function Account(): JSX.Element {

    const token = useAppSelector((state) => state.user.token);

    const [date, setDate] = useState({
        login: '',
        password: '',
    });

    const refWrapperInput = useRef<HTMLDivElement | null>(null);

    if (!token) {
        return (<main className={styles.account}>
            <div className={gStyles.container}>
                <h1 className={`${gStyles.title} ${styles.title}`}>Мой аккаунт</h1>
                <div className={styles.page}>
                    <p>Главная</p>
                    <span>/</span>
                    <p>Аккаунт</p>
                </div>
                <div className={styles.container}>
                    <Sign refWrapperInput={refWrapperInput} date={date} setDate={setDate} />
                    <Register refWrapperInput={refWrapperInput} date={date} />
                </div>
            </div>
        </main>);
    } else {
        return (
            <main className={styles.account}>
                <div className={gStyles.container}>
                    <h1 className={`${gStyles.title} ${styles.title}`}>Мой аккаунт</h1>
                    <div className={`${styles.page} ${styles.pageInfo}`}>
                        <p>Главная</p>
                        <span>/</span>
                        <p>Аккаунт</p>
                    </div>
                  <MenuAccount/>
                </div>
            </main>
        );
    }
}