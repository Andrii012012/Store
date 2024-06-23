import pStyles from '../../style.module.scss';

interface IProps {
    refRadioButton: React.MutableRefObject<HTMLDivElement | null>;
    value: boolean;
    className?: string;
    hangleChange: () => void;
}

export default function RadioButtonDefault(props: IProps): JSX.Element {

    let { refRadioButton, value, className = '', hangleChange } = props;

    return (
        <div ref={refRadioButton} style={{ background: value ? 'linear-gradient(92.38deg, #C09E6C -1.94%, #FFEBCC 40.99%, #BF936B 98.79%)' : '' }} className={`${pStyles.radioButton} ${className}`} onClick={hangleChange}>
            {value && <div></div>}
        </div>
    )
}