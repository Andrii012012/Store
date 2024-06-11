import ButtonGoods from '../../../../components/api/ButtonGoods/ButtonGoods';
import Checkbox from '../../../../components/api/Checkbox/Checkbox';
import ProtectRobot from '../../../../components/api/ProtectRobot/ProtectRobot';
import RadioButton from '../../../../components/api/RadioButton/RadioButton';
import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import { useState } from 'react';

type TRadio = {
    women: boolean;
    men: boolean;
}

type TCheckbox = {
    robot: boolean;
    remember: boolean;
}


export default function Register(): JSX.Element {

    const [radioButton, setRadioButton] = useState<TRadio>(
        {
            men: false,
            women: false,
        }
    );

    const [ceheckbox, setCheckbox] = useState<TCheckbox>({
        robot: false,
        remember: false,
    })

    function hangleChangeRadio(value: boolean, text: string) {
        setRadioButton((prevState) => {
            const newState = { ...prevState };

            if (text === 'Ж') {
                newState.women = value;
            } else if (text === 'М') {
                newState.men = value;
            }

            return newState;
        })
    }

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
        <section className={styles.register}>
            <h2 className={`${styles.title} ${gStyles.titleSmall}`}>Регистрация</h2>
            <p className={styles.textBonus}>При регистрации вы получите 100 бонусных баллов</p>
            <form action="#">
                <div className={styles.wrapper}>
                    <div className={styles.bodyInput}>
                        <label htmlFor='email'>Email *</label>
                        <input className={styles.input} id='email' type="text" />
                    </div>
                    <div className={styles.gender}>
                        <p>Пол</p>
                        <div>
                            <RadioButton className={styles.radio} onChange={hangleChangeRadio} value={radioButton.women} text='Ж' />
                            <RadioButton className={styles.radio} onChange={hangleChangeRadio} value={radioButton.men} text='М' />
                        </div>
                    </div>
                    <p className={styles.infoText}>Ссылка для установки нового пароля будет отправлена на ваш email</p>
                    <ProtectRobot value={ceheckbox.robot} onChange={hangleChangeCheckbox} />
                    <Checkbox value={ceheckbox.remember} className={styles.remember} onChange={hangleChangeCheckbox} text='Запомнить меня' />
                    <ButtonGoods className={styles.btnRegister} text='Регистрация' />
                </div>
            </form>
        </section>
    );
}