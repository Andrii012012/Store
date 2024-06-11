import gStyles from '../../styles/style.module.scss';
import styles from './style.module.scss';
import Sign from './components/Sign/Sign';
import Register from './components/Register/Register';

export default function Account(): JSX.Element {
    return (<main className={styles.account}>
        <div className={gStyles.container}>
            <h1 className={`${gStyles.title} ${styles.title}`}>Мой аккаунт</h1>
            <div className={styles.page}>
                <p>Главная</p>
                <span>/</span>
                <p>Аккаунт</p>
            </div>
            <div className={styles.container}>
                <Sign />
                <Register />
            </div>
        </div>
    </main>);
}