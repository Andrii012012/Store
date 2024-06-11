import { useRef } from "react";
import styles from './style.module.scss';

interface IProps {
    text?: string;
    className?: string;
    onChange: (value: boolean, text: string) => void;
    value: boolean;
}

export default function RadioButton(props: IProps): JSX.Element {
    let { text, className, onChange, value } = props;

    const refRadioButton = useRef<HTMLDivElement | null>(null);

    function hangleChange() {
        if (refRadioButton.current) {
            onChange(!value, text || '');
        }
    }

    if (text) {
        return (
            <div className={`${styles.bodyRadioButton} ${className}`}>
                <div className={styles.radio} ref={refRadioButton} style={{ background: value ? 'linear-gradient(92.38deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%)' : '' }} onClick={hangleChange}>
                    {value && <div></div>}
                </div>
                <p className={styles.text}>{text}</p>
            </div>
        );
    } else {
        return (
            <div ref={refRadioButton} style={{ background: value ? 'linear-gradient(92.38deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%)' : '' }} className={`${styles.radioButton} ${className}`} onClick={hangleChange}>
                {value && <div></div>}
            </div>
        );
    }
}