import { useEffect, useState } from 'react';
import Checkbox from '../../../../components/api/Checkbox/Checkbox';
import styles from './styles.module.scss';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { chooseGender } from '../../../../features/goods/slice';
import { useAppSelector } from '../../../../hooks/useAppSelector';

type TCheckbox = {
    women: boolean;
    men: boolean;
    unisex: boolean;
}

export default function ChooseGender(): JSX.Element {

    const gender = useAppSelector((state) => state.goods.filterGoods.gender);

    const [checkbox, setCheckBox] = useState<TCheckbox>({
        women: gender.women === 'women' ? true : false,
        men: gender.men === 'men' ? true : false,
        unisex: gender.unisex === 'unisex' ? true : false,
    });

    useEffect(() => {
        setCheckBox((prevState: TCheckbox): TCheckbox => {
            const newState = { ...prevState };
            newState.women = gender.women === 'women' ? true : false;
            newState.men = gender.men === 'men' ? true : false;
            newState.unisex = gender.unisex === 'unisex' ? true : false;
            return newState;
        })
    }, [gender]);

    const dispatch = useAppDispatch();

    function handleChange(value: boolean, text: string) {
        setCheckBox((prevState: TCheckbox): TCheckbox => {
            const newOptions = { ...prevState };
            const allGender = { ...gender };
            if (text === 'Мужские') {
                newOptions.men = value;
                allGender.men = 'men';
                if (value) {
                    dispatch(chooseGender(allGender));
                } else {
                    allGender.men = '';
                    dispatch(chooseGender(allGender));
                }
            } else if (text === 'Женские') {
                newOptions.women = value;
                allGender.women = 'women';
                if (value) {
                    dispatch(chooseGender(allGender));
                } else {
                    allGender.women = '';
                    dispatch(chooseGender(allGender));
                }
            } else if (text === 'Унисекс') {
                newOptions.unisex = value;
                allGender.unisex = 'unisex';
                if (value) {
                    dispatch(chooseGender(allGender));
                } else {
                    allGender.unisex = '';
                    dispatch(chooseGender(allGender));
                }
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