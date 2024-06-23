import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import InputForm from '../../../../components/api/InputForm/InputForm';
import { useRef, useState } from 'react';
import ButtonGoods from '../../../../components/api/Button/Button';
import validation from '../../../../utils/helps/validation';
import iconShowValue from '../../../../assets/imgs/global/icon-show-value.svg';
import iconHideValue from '../../../../assets/imgs/global/icon-hide-value.svg';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { changePasswordThunk } from '../../../../features/user/slice';
import { changePasswordURL } from '../../../../config/config';

interface IDetailInfo {
    name: string,
    surname: string,
    email: string,
    oldPassword: string,
    newPassword: string,
    repeatNewPassword: string,
}

export default function DetailProfile(): JSX.Element {

    const [detailInfo, setDetailInfo] = useState<IDetailInfo>({
        name: '',
        surname: '',
        email: '',
        oldPassword: '',
        newPassword: '',
        repeatNewPassword: '',
    });

    const [input, setInput] = useState({
        oldPass: useRef<HTMLInputElement | null>(null),
        newPass: useRef<HTMLInputElement | null>(null),
        repeatPass: useRef<HTMLInputElement | null>(null),
    });

    const user = useAppSelector((state) => state.user.user);

    const dispatch = useAppDispatch();

    const refWrapperInput = useRef<HTMLDivElement | null>(null);

    function changeDetailInfo(element: HTMLInputElement) {
        const value = element.value;
        const name = element.name;

        setDetailInfo((prevState) => {
            const newState = { ...prevState };

            switch (name) {
                case 'name': {
                    newState.name = value;
                    break;
                }
                case 'surname': {
                    newState.surname = value;
                    break;
                }
                case 'email': {
                    newState.email = value;
                    break;
                }
                case 'oldPassword': {
                    newState.oldPassword = value;
                    break;
                }
                case 'newPassword': {
                    newState.newPassword = value;
                    break;
                }
                case 'repeatNewPassword': {
                    newState.repeatNewPassword = value;
                    break;
                }
            }

            return newState;
        })

    }

    function hangleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (refWrapperInput.current) {
            const result = validation({ arrayParentInput: [refWrapperInput] });
            if (result && user) {
                const form = new FormData();
                form.append('id', user.id);
                form.append('name', detailInfo.name);
                form.append('surname', detailInfo.surname);
                form.append('email', detailInfo.email);
                form.append('oldPassword', detailInfo.oldPassword);
                form.append('newPassword', detailInfo.newPassword);
                dispatch(changePasswordThunk({ url: changePasswordURL, form }));
            }
        }
    }

    function hangleChangeType(name: string) {
        setInput((prevState) => {
            const newState = { ...prevState };
            if (
                newState.oldPass.current instanceof HTMLInputElement &&
                newState.newPass.current instanceof HTMLInputElement &&
                newState.repeatPass.current instanceof HTMLInputElement) {
                switch (name) {
                    case 'oldPass': {
                        if (newState.oldPass.current.type == 'text') {
                            newState.oldPass.current.type = 'password';
                        } else if (newState.oldPass.current.type === 'password') {
                            newState.oldPass.current.type = 'text';
                        }
                        return newState;
                    }
                    case 'newPass': {
                        if (newState.newPass.current.type == 'text') {
                            newState.newPass.current.type = 'password';
                        } else if (newState.oldPass.current.type === 'password') {
                            newState.newPass.current.type = 'text';
                        }
                        return newState;
                    }
                    case 'repeatPass': {
                        if (newState.repeatPass.current.type == 'text') {
                            newState.repeatPass.current.type = 'password';
                        } else if (newState.oldPass.current.type === 'password') {
                            newState.repeatPass.current.type = 'text';
                        }
                        return newState;
                    }
                }
            }
            return newState;
        })
    }

    return <section className={styles.detail}>
        <h1 className={`${gStyles.titleSmall} ${styles.title}`}>Детали профиля</h1>
        <form action='#' onSubmit={(e) => hangleSubmit(e)}>
            <div ref={refWrapperInput} className={styles.wrapper}>
                <div className={styles.body}>
                    <div className={styles.wrapperInput}>
                        <InputForm value={detailInfo.name} className={styles.inputForm} hangleChange={changeDetailInfo} name='name' type='text' text='Имя *' />
                        <InputForm value={detailInfo.surname} className={styles.inputForm} hangleChange={changeDetailInfo} name='surname' type='text' text='Фамилия *' />
                    </div>
                    <InputForm className={styles.inputForm} value={detailInfo.email} hangleChange={changeDetailInfo} name='email' type='email' text='E-mail *' />
                </div>
                <h3 className={styles.titleChangePassword}>Смена пароля</h3>
                <InputForm refInput={input.oldPass} className={`${styles.input} ${styles.inputForm}`} value={detailInfo.oldPassword} hangleChange={changeDetailInfo} name='oldPassword' type='text' text='Действующий пароль (не заполняйте, чтобы оставить прежний)'>
                    <div onClick={() => hangleChangeType('oldPass')} className={styles.icon}>
                        {input.oldPass.current instanceof HTMLInputElement && input.oldPass.current.type === 'text' ? <img src={iconShowValue} /> : <img src={iconHideValue} />}
                    </div>
                </InputForm>
                <InputForm refInput={input.newPass} className={`${styles.input} ${styles.inputForm}`} value={detailInfo.newPassword} hangleChange={changeDetailInfo} name='newPassword' type='text' text='Новый пароль (не заполняйте, чтобы оставить прежний)'>
                    <div onClick={() => hangleChangeType('newPass')} className={styles.icon}>
                        {input.newPass.current instanceof HTMLInputElement && input.newPass.current.type === 'text' ? <img src={iconShowValue} /> : <img src={iconHideValue} />}
                    </div>
                </InputForm>
                <InputForm refInput={input.repeatPass} className={`${styles.input} ${styles.inputForm}`} value={detailInfo.repeatNewPassword} hangleChange={changeDetailInfo} name='repeatNewPassword' type='text' text='Подтвердите новый пароль' >
                    <div onClick={() => hangleChangeType('repeatPass')} className={styles.icon}>
                        {input.repeatPass.current instanceof HTMLInputElement && input.repeatPass.current.type === 'text' ? <img src={iconShowValue} /> : <img src={iconHideValue} />}
                    </div>
                </InputForm>
                <ButtonGoods className={styles.btn} text='Сохранить изменения' />
            </div>
        </form>
    </section>;
}