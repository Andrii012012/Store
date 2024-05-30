import './style.scss';
import styles from './styles.module.scss';
import chackMark from '../../../../assets/imgs/ChooseGender/check-mark.svg';

interface IProps {
    text?: string;
    className?: string;
    onChange: (value: boolean, text: string) => void;
    value: boolean;
    icon?: string;
}

export default function Checkbox(props: IProps): JSX.Element {
    let { text, className, onChange, value, icon } = props;

    function hangleChange(e: React.MouseEvent<HTMLDivElement>) {
        if (e.target instanceof HTMLDivElement) {
            e.target.classList.toggle('active-checkbox');
            onChange(!value, text || '');
        }
    }

    if (text) {
        return (
            <div className={`${styles.bodyCheckbox} ${className}`}>
                <div className={styles.chackbox} onClick={(e) => hangleChange(e)}>
                    {value && <img className={icon ? icon : styles.icon} src={chackMark} />}
                </div>
                <p className={styles.text}>{text}</p>
            </div>
        );
    } else {
        return (
            <div className={`${styles.chackbox} ${className}`} onClick={(e) => hangleChange(e)}>
                {value && <img className={icon ? icon : styles.icon} src={chackMark} />}
            </div>
        );
    }
}