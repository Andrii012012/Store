import InputForm from '../../../../components/api/InputForm/InputForm';
import styles from './styles.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import { useState } from 'react';
import { IAddressInfo } from '../../../../interfaces/addressInfo';


interface IInputsValues extends IAddressInfo {
    description: string;
}

interface IProps {
    refWrapper: React.MutableRefObject<HTMLDivElement | null>;
}

export default function CheckoutForm(props: IProps): JSX.Element {

    let { refWrapper } = props;

    const [inputsValues, setInputsValues] = useState<IInputsValues>({
        name: '',
        surname: '',
        country: '',
        address: '',
        locality: '',
        area: '',
        postcode: '',
        phone: '',
        email: '',
        description: '',
    });

    function hangleChange(target: HTMLInputElement): void {
        setInputsValues((prevState) => {
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
                case 'description': {
                    newState.description = value;
                    break;
                }
            }
            return newState;
        })
    }

    return (
        <form className={styles.checkoutForm}>
            <div ref={refWrapper} className={styles.checkoutWrapper}>
                <h2 className={`${styles.title} ${gStyles.titleSmall}`}>Оплата и доставка</h2>
                <div className={styles.containerInput}>
                    <InputForm text='Имя *' name='name' id='checkoutName' type='text' value={inputsValues.name} hangleChange={hangleChange} />
                    <InputForm text='Фамилия *' name='surname' id='checkoutSurname' type='text' value={inputsValues.surname} hangleChange={hangleChange} />
                </div>
                <div className={styles.containerInput}>
                    <InputForm text='Страна / регион *' name='country' id='checkoutCountry' type='text' value={inputsValues.country} hangleChange={hangleChange} />
                    <InputForm text='Адрес *' name='address' id='checkoutAddress' type='text' value={inputsValues.address} hangleChange={hangleChange} />
                </div>
                <div className={styles.containerInput}>
                    <InputForm text='Населённый пункт *' name='locality' id='checkoutLocality' type='text' value={inputsValues.locality} hangleChange={hangleChange} />
                    <InputForm text='Область / район *' name='area' id='checkoutArea' type='text' value={inputsValues.area} hangleChange={hangleChange} />
                </div>
                <div className={styles.containerInput}>
                    <InputForm text='Почтовый индекс *' name='postcode' id='checkoutPostcode' type='text' value={inputsValues.postcode} hangleChange={hangleChange} />
                    <InputForm text='Телефон *' name='phone' id='checkoutPhone' type='text' value={inputsValues.phone} hangleChange={hangleChange} />
                </div>
                <InputForm className={styles.email} text='Email *' name='email' id='checkoutEmail' type='text' value={inputsValues.email} hangleChange={hangleChange} />
                <div className={styles.detailOrderBody}>
                    <h2 className={`${styles.detailOrder} ${gStyles.titleSmall}`}>Детали заказа</h2>
                    <p className={styles.text}>Что бы вы хотели, чтобы мы написали на флаконе? (необязательно)</p>
                </div>
                <InputForm className={styles.description} placeholder={'Например, «Любимой мамуле»'} name='description' id='checkoutDescription' type='text' value={inputsValues.description} hangleChange={hangleChange} />
            </div>
        </form>
    );
}