import styles from '../../styles.module.scss';

interface IProps {
    checkboxRef?: React.MutableRefObject<HTMLDivElement | null>;
    refCheckbox: React.MutableRefObject<HTMLDivElement | null>;
    icon?: string;
    className?: string;
    value: boolean;
    text?: string;
    hangleChange: () => void;
    chackMark: string;
}

export default function CheckboxText(props: IProps): JSX.Element {

    let { checkboxRef, icon, className = '', value, text, refCheckbox, hangleChange, chackMark } = props;

    return <div ref={checkboxRef} role='checkbox' className={`${styles.bodyCheckbox} ${className}`}>
        <div className={styles.chackbox} ref={refCheckbox} style={{ background: value ? 'linear-gradient(92.38deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%)' : '' }} onClick={hangleChange}>
            {value && <img className={icon ? icon : styles.icon} src={chackMark} />}
        </div>
        <p className={styles.text}>{text}</p>
    </div>
}