import styles from '../../style.module.scss';
import { ICheckbox } from '../../interface/interface';

export default function InputFormExtra(props: ICheckbox): JSX.Element {

    let { className, id, text, placeholder, type, value, name, hangleChange, children, refInput } = props;

    return (
        <div className={`${className} ${styles.bodyInput}`}>
            <label htmlFor={id}>{text}</label>
            <div className={styles.body}>
                <input placeholder={placeholder || ''} ref={refInput} id={id} type={type} value={value} name={name} onChange={(e) => hangleChange(e.target)} />
                {children}
            </div>
        </div>
    )
}