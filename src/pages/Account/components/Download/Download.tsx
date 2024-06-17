import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import AlertMessage from '../../../../components/api/AlertMessage/AlertMessage';
import warning from '../../../../assets/imgs/global/warning.svg'

export default function Download(): JSX.Element {
    return (
        <section className={styles.download}>
            <h1 className={`${gStyles.titleSmall} ${styles.title}`}>Загрузки</h1>
            <AlertMessage text='Доступных загрузок нет' icon={warning} />
        </section>
    );
}