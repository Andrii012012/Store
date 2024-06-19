import styles from './style.module.scss';
import gStyles from '../../styles/style.module.scss';
import { ReactNode } from 'react';
import ButtonGoods from '../api/ButtonGoods/ButtonGoods';

interface IProps {
    children: ReactNode;
    result: number;
    resultPlusMarks: number;
    count: number;
}

export default function ConsistOrder(props: IProps): JSX.Element {

    let { children, result, resultPlusMarks, count } = props;

    return (
        <>
            <div className={styles.consistOrderBody}>
                <h2 className={`${gStyles.titleSmall} ${styles.title}`}>
                    {count} товара на сумму: <span>{result} $</span>
                </h2>
                {children}
                <p className={`${gStyles.titleSmall} ${styles.resultSum}`}>К оплате: <span>{resultPlusMarks} $</span></p>
                <div className={styles.btn}>
                    <ButtonGoods text='Оформить заказ' />
                </div>
            </div>
        </>
    );
}