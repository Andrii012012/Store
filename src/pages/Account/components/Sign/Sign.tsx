import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import Checkbox from '../../../../components/api/Checkbox/Checkbox';
import ButtonGoods from '../../../../components/api/ButtonGoods/ButtonGoods';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ProtectRobot from '../../../../components/api/ProtectRobot/ProtectRobot';

type TCheckbox = {
    robot: boolean,
    remember: boolean,
}

export default function Sign(): JSX.Element {

    const [checkbox, setCheckbox] = useState<TCheckbox>({
        robot: false,
        remember: false,
    });

    function hangleChangeCheckbox(value: boolean, text: string) {
        setCheckbox((prevState) => {
            const newState = { ...prevState };

            if (text === 'Я не робот') {
                newState.robot = value;
            } else if (text === 'Запомнить меня') {
                newState.remember = value;
            }

            return newState;
        });
    }

    return (
        <section className={styles.sign}>
            <h2 className={`${gStyles.titleSmall} ${styles.titleSign}`}>Вход</h2>
            <form action="#">
                <div className={styles.wrapper}>
                    <div className={styles.bodyInput}>
                        <label htmlFor='user'>Имя пользователя или Email *</label>
                        <input className={styles.input} id='user' type="text" />
                    </div>
                    <div className={styles.bodyInput}>
                        <label htmlFor='user'>Пароль *</label>
                        <input className={styles.input} id='user' type="password" />
                    </div>
                    <ProtectRobot value={checkbox.robot} onChange={hangleChangeCheckbox} />
                    <Checkbox value={checkbox.remember} className={styles.remember} onChange={hangleChangeCheckbox} text='Запомнить меня' />
                    <ButtonGoods className={styles.btnSign} text={'Войти'} />
                    <Link to='/' className={styles.forgotPassword}>Забыли свой пароль?</Link>
                </div>
            </form>
        </section>
    )
}