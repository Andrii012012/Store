import ButtonGoods from '../../../../components/api/ButtonGoods/ButtonGoods';
import Checkbox from '../../../../components/api/Checkbox/Checkbox';
import ProtectRobot from '../../../../components/api/ProtectRobot/ProtectRobot';
import RadioButton from '../../../../components/api/RadioButton/RadioButton';
import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import { useRef, useState } from 'react';
import validation from '../../../../utils/helps/validation';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { registerThunk } from '../../../../features/user/slice';
import { registerURL } from '../../../../config/config';
import Modal from '../../../../components/Header/components/Modal/Modal';

type TRadio = {
    women: boolean;
    men: boolean;
}

type TCheckbox = {
    robot: boolean;
    remember: boolean;
}

interface IProps {
    date: { login: string, password: string };
    refWrapperInput: React.MutableRefObject<HTMLDivElement | null>;
}



export default function Register(props: IProps): JSX.Element {

    let { date, refWrapperInput } = props;

    const [radioButton, setRadioButton] = useState<TRadio>(
        {
            men: true,
            women: false,
        }
    );

    const [isPopup, setIsPopup] = useState<boolean>(false);

    const status = useAppSelector((state) => state.user.status);

    const [email, setEmail] = useState<string>('');

    const dispatch = useAppDispatch();

    const refBody = useRef<HTMLDivElement | null>(null);
    const refCheckbox = useRef<HTMLDivElement | null>(null);

    const [ceheckbox, setCheckbox] = useState<TCheckbox>({
        robot: false,
        remember: false,
    })

    function hangleChangeRadio(value: boolean, text: string) {
        setRadioButton((prevState) => {
            const newState = { ...prevState };

            if (text === 'Ж') {
                newState.men = false;
                newState.women = value;
            } else if (text === 'М') {
                newState.women = false;
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

    function hangleSend(e: React.FormEvent) {
        if (refBody.current && e.target) {
            e.preventDefault();
            const result = validation({ arrayParentInput: [refBody, refWrapperInput], checkbox: [{ checkbox: refCheckbox, status: ceheckbox.robot }] });
            if (result) {
                const gender = radioButton.men ? 'men' : 'women';
                const form = new FormData();
                form.append('login', date.login);
                form.append('password', date.password);
                form.append('email', email);
                form.append('gender', gender);
                dispatch(registerThunk({ url: registerURL, form }));
                if (status === 'success') {
                    setIsPopup(true);
                }
            }
        }
    }

    return (
        <section className={styles.register}>
            <h2 className={`${styles.title} ${gStyles.titleSmall}`}>Регистрация</h2>
            <p className={styles.textBonus}>При регистрации вы получите 100 бонусных баллов</p>
            <form onSubmit={(e) => hangleSend(e)} action="#">
                <div ref={refBody} className={styles.wrapper}>
                    <div className={styles.bodyInput}>
                        <label htmlFor='email'>Email *</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} id='email' type="email" name='email' />
                    </div>
                    <div className={styles.gender}>
                        <p>Пол</p>
                        <div>
                            <RadioButton className={styles.radio} onChange={hangleChangeRadio} value={radioButton.women} text='Ж' />
                            <RadioButton className={styles.radio} onChange={hangleChangeRadio} value={radioButton.men} text='М' />
                        </div>
                    </div>
                    <p className={styles.infoText}>Ссылка для установки нового пароля будет отправлена на ваш email</p>
                    <ProtectRobot refCheckbox={refCheckbox} value={ceheckbox.robot} onChange={hangleChangeCheckbox} />
                    <Checkbox value={ceheckbox.remember} className={styles.remember} onChange={hangleChangeCheckbox} text='Запомнить меня' />
                    <ButtonGoods className={styles.btnRegister} text='Регистрация' />
                </div>
            </form>
            {isPopup && <Modal><div className={styles.popup}>
               <h2 className={styles.popupTile}>Вы успешно зарегистрированы!</h2>
                <ButtonGoods text={'Перейти к покупкам'}/>
            </div></Modal>}
        </section>
    );
}