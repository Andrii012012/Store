import styles from '../../styles.module.scss';

interface IProps {
    refCheckbox: React.MutableRefObject<HTMLDivElement | null>;
    icon?: string;
    value: boolean;
    chackMark: string;
    className?: string;
    hangleChange: () => void;
}

export default function CheckboxDefault(props: IProps): JSX.Element {

    let { refCheckbox, icon, value, chackMark, className, hangleChange } = props;

    return (
            <div role='checkbox' ref={refCheckbox} style={{ background: value ? 'linear-gradient(92.38deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%)' : '' }} className={`${styles.chackbox} ${className}`} onClick={hangleChange}>
                {value && <img className={icon ? icon : styles.icon} src={chackMark} />}
            </div>
    );
}