import styles from './styles.module.scss';
import chackMark from '../../../assets/imgs/ChooseGender/check-mark.svg';
import { useRef } from 'react';

interface IProps {
    text?: string;
    className?: string;
    onChange: (value: boolean, text: string) => void;
    value: boolean;
    icon?: string;
    refCheckbox?: React.MutableRefObject<HTMLDivElement | null>;
}

export default function Checkbox(props: IProps): JSX.Element {
    let { text, className, onChange, value, icon, refCheckbox: checkboxRef } = props;

    const refCheckbox = useRef<HTMLDivElement | null>(null);

    function hangleChange() {
        if (refCheckbox.current) {
            onChange(!value, text || '');
        }
    }

    if (text) {
        return (
            <div ref={checkboxRef} role='checkbox' className={`${styles.bodyCheckbox} ${className}`}>
                <div className={styles.chackbox} ref={refCheckbox} style={{ background: value ? 'linear-gradient(92.38deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%)' : '' }} onClick={hangleChange}>
                    {value && <img className={icon ? icon : styles.icon} src={chackMark} />}
                </div>
                <p className={styles.text}>{text}</p>
            </div>
        );
    } else {
        return (
            <div role='checkbox' ref={refCheckbox} style={{ background: value ? 'linear-gradient(92.38deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%)' : '' }} className={`${styles.chackbox} ${className}`} onClick={hangleChange}>
                {value && <img className={icon ? icon : styles.icon} src={chackMark} />}
            </div>
        );
    }
}