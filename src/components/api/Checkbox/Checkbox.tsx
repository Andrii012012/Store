import CheckboxText from './components/CheckboxText/CheckboxText';
import { useRef } from 'react';
import chackMark from '../../../assets/imgs/ChooseGender/check-mark.svg';
import CheckboxDefault from './components/CheckboxDefault/CheckboxDefault';

interface IProps {
    text?: string;
    className?: string;
    onChange?: (value: boolean, text: string) => void;
    value: boolean;
    icon?: string;
    refCheckbox?: React.MutableRefObject<HTMLDivElement | null>;
}

export default function Checkbox(props: IProps): JSX.Element {
    let { text, className, onChange, value, icon, refCheckbox: checkboxRef } = props;

    const refCheckbox = useRef<HTMLDivElement | null>(null);

    function hangleChange() {
        if (refCheckbox.current) {
            onChange && onChange(!value, text || '');
        }
    }

    if (text) {
        return (
            <CheckboxText
                className={className}
                text={text}
                icon={icon}
                value={value}
                checkboxRef={checkboxRef}
                refCheckbox={refCheckbox}
                hangleChange={hangleChange}
                chackMark={chackMark}
            />
        );
    } else {
        return (
            <CheckboxDefault
                className={className}
                icon={icon}
                refCheckbox={refCheckbox}
                hangleChange={hangleChange}
                chackMark={chackMark}
                value={value}
            />
        );
    }
}