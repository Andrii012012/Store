import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import ButtonGoods from '../../../../components/api/ButtonGoods/ButtonGoods';
import { useRef } from 'react';

interface IProps {
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function SpendMarks(props: IProps): JSX.Element {

    let { setValue } = props;

    const refInput = useRef<HTMLInputElement | null>(null);

    function hangleSetMarks() {
        if (refInput.current && refInput.current instanceof HTMLInputElement) {
            setValue(refInput.current.value);
        }
    }

    return (
        <>
            <p className={`${gStyles.text} ${styles.textSpendMarks}`}>Укажите, сколько баллов потратить:</p>
            <div className={styles.bodySpendMarks}>
                <input ref={refInput}
                    className={`${styles.countMarks} ${gStyles.textInfo}`}
                    type='text' />
                <ButtonGoods hangle={hangleSetMarks} className={styles.btnSpendMarks} text='Потратить баллы' />
            </div>
            <p className={gStyles.text}>Хотите получить больше баллов? Узнайте как!</p></>
    )
}