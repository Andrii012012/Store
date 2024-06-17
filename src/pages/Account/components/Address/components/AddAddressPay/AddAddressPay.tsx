import Header from '../Header/Header';
import styles from './style.module.scss';
import gStyles from '../../../../../../styles/style.module.scss';

interface IProps{
    onChange: () => void;
}

export default function AddAddressPay(props: IProps): JSX.Element {

    let { onChange } = props;

    return (
        <section className={styles.addAddressPay}>
            <Header className={styles.header} alertMessage={false} />
            <button className={`${styles.btn} ${gStyles.textSmall}`} onClick={onChange}>Добавить</button>
        </section>
    );
}