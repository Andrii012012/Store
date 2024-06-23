import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import Checkbox from '../../../../components/api/Checkbox/Checkbox';
import ButtonGoods from '../../../../components/api/Button/Button';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import ProtectRobot from '../../../../components/api/ProtectRobot/ProtectRobot';
import validation from '../../../../utils/helps/validation';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { signThunk } from '../../../../features/user/slice';
import { signURL } from '../../../../config/config';

type TCheckbox = {
    robot: boolean,
    remember: boolean,
}

interface IProps {
    date: { login: string, password: string };
    setDate: React.Dispatch<React.SetStateAction<{ login: string, password: string }>>;
    refWrapperInput: React.MutableRefObject<HTMLDivElement | null>;
}

export default function Sign(props: IProps): JSX.Element {

    let { date, setDate, refWrapperInput } = props;

    const [checkbox, setCheckbox] = useState<TCheckbox>({
        robot: false,
        remember: false,
    });

    const dispatch = useAppDispatch();

    const refInputLogin = useRef<HTMLInputElement | null>(null);
    const refInputPassword = useRef<HTMLInputElement | null>(null);
    const refCheckbox = useRef<HTMLDivElement | null>(null);

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

    function hangleChangeDate(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.name === 'login') {
            setDate((prevState) => {
                const newState = { ...prevState };
                newState.login = e.target.value;
                return newState;
            })
        } else {
            setDate((prevState) => {
                const newState = { ...prevState };
                newState.password = e.target.value;
                return newState;
            })
        }
    }

    function hangleSend(e: React.FormEvent) {
        e.preventDefault();
        if (refWrapperInput.current && refCheckbox.current) {
            const result = validation({ checkbox: [{ checkbox: refCheckbox, status: checkbox.robot }] });
            if (result && refInputPassword.current && refInputLogin.current) {
                const form = new FormData();
                form.append('login', date.login);
                form.append('password', date.password);
                dispatch(signThunk({ url: signURL, form, ref: [refInputPassword.current, refInputLogin.current] }));
            };
        }
    }

    return (
        <section className={styles.sign}>
            <h2 className={`${gStyles.titleSmall} ${styles.titleSign}`}>Вход</h2>
            <form action="#" onSubmit={(e) => hangleSend(e)}>
                <div ref={refWrapperInput} className={styles.wrapper}>
                    <div className={styles.bodyInput}>
                        <label htmlFor='user'>Имя пользователя или Email *</label>
                        <input value={date.login} ref={refInputLogin} onChange={(e) => hangleChangeDate(e)} className={styles.input} id='user' type="text" name='login' />
                    </div>
                    <div className={styles.bodyInput}>
                        <label htmlFor='password'>Пароль *</label>
                        <input value={date.password} onChange={(e) => hangleChangeDate(e)} ref={refInputPassword} className={styles.input} id='password' type="password" name='password' />
                    </div>
                    <ProtectRobot refCheckbox={refCheckbox} value={checkbox.robot} onChange={hangleChangeCheckbox} />
                    <Checkbox value={checkbox.remember} className={styles.remember} onChange={hangleChangeCheckbox} text='Запомнить меня' />
                    <ButtonGoods className={styles.btnSign} text={'Войти'} />
                    <Link to='/' className={styles.forgotPassword}>Забыли свой пароль?</Link>
                </div>
            </form>
        </section>
    )
}