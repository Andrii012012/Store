import Checkbox from "../Checkbox/Checkbox";
import styles from './styles.module.scss';

interface IProps {
    value: boolean,
    onChange: (value: boolean, text: string) => void;
}

export default function ProtectRobot(props: IProps): JSX.Element {

    let { value, onChange } = props;

    return (
        <div className={styles.protect}>
            <Checkbox value={value} className={styles.checkRobot} onChange={onChange} text='Я не робот' />
        </div>
    );
}