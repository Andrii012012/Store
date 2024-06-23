import { useRef } from "react";
import styles from './style.module.scss';
import RadioButtonExtra from "./components/RadioButtonExtra/RadioButtonExtra";
import RadioButtonDefault from "./components/RadioButtonDefault/RadioButtonDefault";

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
            <RadioButtonExtra
                hangleChange={hangleChange}
                value={value} text={text}
                className={className}
                refRadioButton={refRadioButton} />
        );
    } else {
        return (
            <RadioButtonDefault
                hangleChange={hangleChange}
                value={value}
                className={className}
                refRadioButton={refRadioButton}
            />
        );
    }
}