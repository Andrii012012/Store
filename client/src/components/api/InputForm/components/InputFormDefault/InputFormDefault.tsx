import { ICheckbox } from '../../interface/interface';
import styles from '../../style.module.scss';

export default function InputFormDefault(props: ICheckbox): JSX.Element {

    let { className, id, text, placeholder, type, value, name, hangleChange } = props;

    return (
        <div className={`${className} ${styles.bodyInput}`
        }>
            <label htmlFor={id}>{text}</label>
            <input placeholder={placeholder || ''} id={id} type={type} value={value} name={name} onChange={(e) => hangleChange(e.target)} />
        </div >
    );
}