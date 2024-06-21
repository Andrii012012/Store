import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import ButtonGoods from '../../../../components/api/ButtonGoods/ButtonGoods';
import { useRef } from 'react';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { checkBonusFiledThunk } from '../../../../features/basket/basket';
import { checkBonusFieldURL } from '../../../../config/config';
import { TStatusReducer } from '../../../../interfaces/statusReducer';
import { changeColor } from '../../../../utils/helps/validation';

interface IProps {
    setValue: React.Dispatch<React.SetStateAction<string>>;
    id: string;
    status: TStatusReducer;
}

export default function SpendMarks(props: IProps): JSX.Element {

    let { setValue, id, status } = props;

    const dispatch = useAppDispatch();

    const refInput = useRef<HTMLInputElement | null>(null);

    function hangleSetMarks() {
        if (refInput.current && refInput.current instanceof HTMLInputElement) {
            const form = new FormData();
            form.append('id', id);
            form.append('marks', refInput.current.value);
            dispatch(checkBonusFiledThunk({ url: checkBonusFieldURL, form }));
            if (status === 'success') {
                setValue(refInput.current.value);
            } else if (status === 'reject') {
                changeColor(refInput.current);
            }
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