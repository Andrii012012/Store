import pStyles from '../../style.module.scss';

interface IProps {
    className?: string;
    refRadioButton: React.MutableRefObject<HTMLDivElement | null>;
    value: boolean;
    text?: string;
    hangleChange: () => void;
}

export default function RadioButtonExtra(props: IProps): JSX.Element {

    let { className, refRadioButton, value, text, hangleChange } = props;

    return (
        <div className={`${pStyles.bodyRadioButton} ${className}`}>
            <div className={pStyles.radio} ref={refRadioButton} style={{ background: value ? 'linear-gradient(92.38deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%)' : '' }} onClick={hangleChange}>
                {value && <div></div>}
            </div>
            <p className={pStyles.text}>{text}</p>
        </div>
    )
}