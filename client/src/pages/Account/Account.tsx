import gStyles from '../../styles/style.module.scss';
import styles from './style.module.scss';
import Sign from './components/Sign/Sign';
import Register from './components/Register/Register';
import { useRef, useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import MenuAccount from './components/MenuAccount/MenuAccount';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';

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
                <HeaderComponent text='Аккаунт' title='Мой аккаунт' />
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
                    <HeaderComponent text='Аккаунт' title='Мой аккаунт' />
                    <MenuAccount />
                </div>
            </main>
        );
    }
}