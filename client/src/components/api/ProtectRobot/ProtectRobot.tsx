import Checkbox from "../Checkbox/Checkbox";
import styles from './styles.module.scss';

interface IProps {
    value: boolean,
    onChange: (value: boolean, text: string) => void;
    refCheckbox?: React.MutableRefObject<HTMLDivElement | null>;
}

export default function ProtectRobot(props: IProps): JSX.Element {

    let { value, onChange, refCheckbox } = props;

    return (
        <div ref={refCheckbox} className={styles.protect}>
            <Checkbox value={value} className={styles.checkRobot} onChange={onChange} text='Я не робот' />
        </div>
    );
}