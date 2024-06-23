export interface ICheckbox {
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
