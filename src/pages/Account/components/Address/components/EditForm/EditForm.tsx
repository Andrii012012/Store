import ButtonGoods from '../../../../../../components/api/ButtonGoods/ButtonGoods';
import InputForm from '../../../../../../components/api/InputForm/InputForm';
import { setAddressURL } from '../../../../../../config/config';
import styles from './style.module.scss';
import gStyles from '../../../../../../styles/style.module.scss';
import validation from '../../../../../../utils/helps/validation';
import { useRef, useState } from 'react';
import { useAppDispatch } from '../../../../../../hooks/useAppDispatch';
import { IUser } from '../../../../../../interfaces/user';
import { setAddressThunk } from '../../../../../../features/user/slice';
import { IAddressInfo } from '../../../../../../interfaces/addressInfo';

interface IProps {
    user: IUser | null;
    onChange: () => void;
}

export default function EditForm(props: IProps): JSX.Element {

    let { user, onChange } = props;

    const [addressInfo, setAddressInfo] = useState<IAddressInfo>({
        name: '',
        surname: '',
        country: '',
        address: '',
        locality: '',
        area: '',
        postcode: '',
        phone: '',
        email: '',
    });

    const refWrapperInput = useRef<HTMLDivElement | null>(null);

    const dispatch = useAppDispatch();

    function hangleChange(target: HTMLInputElement): void {
        setAddressInfo((prevState) => {
            const newState = { ...prevState };
            const value = target.value;
            const name = target.name;
            switch (name) {
                case 'name': {
                    newState.name = value;
                    break;
                }
                case 'surname': {
                    newState.surname = value;
                    break;
                }
                case 'country': {
                    newState.country = value;
                    break;
                }
                case 'address': {
                    newState.address = value;
                    break;
                }
                case 'locality': {
                    newState.locality = value;
                    break;
                }
                case 'area': {
                    newState.area = value;
                    break;
                }
                case 'postcode': {
                    newState.postcode = value;
                    break;
                }
                case 'phone': {
                    newState.phone = value;
                    break;
                }
                case 'email': {
                    newState.email = value;
                    break;
                }
            }
            return newState;
        })
    }

    function hangleResetForm() {
        setAddressInfo({
            name: '',
            surname: '',
            country: '',
            address: '',
            locality: '',
            area: '',
            postcode: '',
            phone: '',
            email: '',
        });
    }

    function hangleSend(e: React.FormEvent) {
        e.preventDefault();
        const result = validation({ arrayParentInput: [refWrapperInput] });
        if (result && user) {
            const form = new FormData();
            form.append('id', user.id);
            form.append('name', addressInfo.name);
            form.append('surname', addressInfo.surname);
            form.append('country', addressInfo.country);
            form.append('address', addressInfo.address);
            form.append('area', addressInfo.area);
            form.append('postcode', addressInfo.postcode);
            form.append('phone', addressInfo.phone);
            form.append('email', addressInfo.email);
            form.append('locality', addressInfo.locality);
            dispatch(setAddressThunk({ url: setAddressURL, form, hangleReset: hangleResetForm }));
            onChange();
        }
    }

    return (
        <section className={styles.address}>
            <h1 className={`${styles.title} ${gStyles.titleSmall}`}>Адрес</h1>
            <h2 className={styles.addressPay}>Платёжный адрес:</h2>
            <form action={setAddressURL} onSubmit={(e) => hangleSend(e)}>
                <div ref={refWrapperInput} className={styles.wrapper}>
                    <div className={styles.bodyInput}>
                        <InputForm type='text' text='Имя *' className={styles.inputName} name='name' hangleChange={hangleChange} value={addressInfo.name} />
                        <InputForm type='text' text='Фамилия *' className={styles.inputSurname} name='surname' hangleChange={hangleChange} value={addressInfo.surname} />
                    </div>
                    <InputForm type='text' text='Страна / регион *' className={styles.input} name='country' hangleChange={hangleChange} value={addressInfo.country} />
                    <InputForm type='text' text='Адрес *' className={styles.input} name='address' hangleChange={hangleChange} value={addressInfo.address} />
                    <InputForm type='text' text='Населённый пункт *' className={styles.input} name='locality' hangleChange={hangleChange} value={addressInfo.locality} />
                    <InputForm type='text' text='Область / район *' className={styles.input} name='area' hangleChange={hangleChange} value={addressInfo.area} />
                    <InputForm type='text' text='Почтовый индекс *' className={styles.input} name='postcode' hangleChange={hangleChange} value={addressInfo.postcode} />
                    <InputForm type='text' text='Телефон *' className={styles.input} name='phone' hangleChange={hangleChange} value={addressInfo.phone} />
                    <InputForm type='text' text='Email *' className={`${styles.input} ${styles.inputEmail}`} name='email' hangleChange={hangleChange} value={addressInfo.email} />
                    <ButtonGoods className={styles.btn} text='Сохранить' />
                </div>
            </form>
        </section>
    )
}