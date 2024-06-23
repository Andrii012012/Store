import InputFormDefault from './components/InputFormDefault/InputFormDefault';
import InputFormExtra from './components/InputFormExtra/InputFormExtra';

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
        return <InputFormDefault
            text={text}
            type={type}
            name={name}
            className={className}
            placeholder={placeholder}
            hangleChange={hangleChange}
            value={value}
            id={id} />
    } else {
        return <InputFormExtra
            text={text}
            type={type}
            name={name}
            className={className}
            placeholder={placeholder}
            hangleChange={hangleChange}
            value={value}
            children={children}
            refInput={refInput}
            id={id} />
    }
}