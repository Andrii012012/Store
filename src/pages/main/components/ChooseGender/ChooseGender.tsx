import { useState } from 'react';
import Checkbox from '../../../../components/Header/api/Checkbox/Checkbox';
import styles from './styles.module.scss';

type TCheckbox = {
    women: boolean;
    men: boolean;
    unisex: boolean;
}

export default function ChooseGender(): JSX.Element {

    const [checkbox, setCheckBox] = useState<TCheckbox>({
        women: false,
        men: false,
        unisex: false,
    });

    function handleChange(value: boolean, text: string) {
        setCheckBox((prevState: TCheckbox): TCheckbox => {
            const newOptions = {...prevState};
            if (text === 'Мужские') {
                newOptions.men = value;
            } else if (text === 'Женские') {
                newOptions.women = value;
            } else if (text === 'Унисекс') {
                newOptions.unisex = value;
            }
            return newOptions;
        });
    }

    const women = 'Женские';
    const men = 'Мужские';
    const unisex = 'Унисекс';

    return (
        <section className={styles.gender}>
            <div className={styles.wrapper}>
                <Checkbox onChange={handleChange} className={styles.checkbox} text={women} value={checkbox.women} />
                <Checkbox onChange={handleChange} className={styles.checkbox} text={men} value={checkbox.men} />
                <Checkbox onChange={handleChange} className={styles.checkbox} text={unisex} value={checkbox.unisex} />
            </div>
        </section>
    );
}