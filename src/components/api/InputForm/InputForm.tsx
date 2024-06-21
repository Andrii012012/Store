import { ReactNode } from 'react';
import styles from './style.module.scss';

interface IProps {
    text?: string;
    id?: string;
    type: string;
    value: string;
    hangleChange: (value: HTMLInputElement) => void;
    className?: string;
    name: string;
    children?: JSX.Element;
    refInput?: React.MutableRefObject<HTMLInputElement | null>;
    placeholder?: string;
}

export default function InputForm(props: IProps): JSX.Element {

    let { text, id, type, value, hangleChange, className, name, children, refInput, placeholder } = props;

    if (!children) {
        return (<div className={`${className} ${styles.bodyInput}`}>
            <label htmlFor={id}>{text}</label>
            <input placeholder={placeholder || ''} id={id} type={type} value={value} name={name} onChange={(e) => hangleChange(e.target)} />
        </div>
        );
    } else {
        return (<div className={`${className} ${styles.bodyInput}`}>
            <label htmlFor={id}>{text}</label>
            <div className={styles.body}>
                <input placeholder={placeholder || ''} ref={refInput} id={id} type={type} value={value} name={name} onChange={(e) => hangleChange(e.target)} />
                {children}
            </div>
        </div>
        );
    }
}