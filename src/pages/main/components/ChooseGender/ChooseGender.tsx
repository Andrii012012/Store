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

    const dispatch = useAppDispatch();

    useEffect(() => {
        setCheckBox({
            women: gender.women === 'women' ? true : false,
            men: gender.men === 'men' ? true : false,
            unisex: gender.unisex === 'unisex' ? true : false,
        })
    }, [gender]);

    function handleChange(value: boolean, text: any) {
        dispatch(chooseGender({ gender: text, value }));
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