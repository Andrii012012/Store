import { useEffect, useState } from 'react';
import ButtonGoods from '../../../../components/api/Button/Button';
import ListComment from '../ListComment/ListComment';
import styles from './style.module.scss';
import LeaveComment from '../LeaveComment/LeaveComment';
import Modal from '../../../../components/Header/components/Modal/Modal';
import { IGoods } from '../../../../interfaces/goods';

interface IProps {
    goods: IGoods;
}

export default function Comment(props: IProps) {

    let { goods } = props;

    const [value, setValue] = useState<boolean>(false);

    function hangleChangeValue() {
        setValue(!value);
    }

    useEffect(() => {
        if (value) {
            window.scrollTo(0, 0);
            document.getElementById('root')!.classList.add('modal');
        } else {
            document.getElementById('root')!.classList.remove('modal');
        }
    }, [value]);

    return (
        <section className={styles.comment}>
            <div className={styles.bodyBtn}>
                <ButtonGoods className={styles.btn} hangle={hangleChangeValue} text='Оставить отзыв' />
            </div>
            <ListComment />
            {value && <Modal><LeaveComment close={setValue} goods={goods} /></Modal>}
        </section>
    );
}