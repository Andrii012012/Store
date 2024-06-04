import styles from './style.module.scss';
import gStyles from '../../styles/style.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/imgs/global/logo.svg';

export default function Footer(): JSX.Element {
    return (
        <footer className={styles.footer}>
            <div className={gStyles.container}>
                <Link className={styles.logo} to='/'><img src={logo} alt='logo' /></Link>
                <div className={`${styles.info} ${gStyles.textInfo}`}>
                    <ul className={styles.list}>
                        <li>
                            <div className={`${styles.block} ${styles.IconAddress}`}> </div>
                            <address>г. Астрахань: ул. Свердлова, 106;ул. Победы 55А, пав. 10.</address>
                        </li>
                        <li>
                            <div className={`${styles.block} ${styles.iconTime}`}> </div>
                            <time>Ежедневно с 9:00 до 18:00</time>
                        </li>
                    </ul>
                    <ul className={styles.list}>
                        <li>
                            <div className={`${styles.block} ${styles.iconViber}`}> </div>
                            <p>Мы в Whatsapp</p>
                        </li>
                        <li>
                            <div className={`${styles.block} ${styles.iconTelegram}`}> </div>
                            <p>Мы в Telegram</p>
                        </li>
                        <li>
                            <div className={`${styles.block} ${styles.iconEmail}`}> </div>
                            <p> parfumpomotivam@gmail.com</p>
                        </li>
                    </ul>
                    <ul className={styles.list}>
                        <li>
                            <div className={`${styles.block} ${styles.iconOffice}`}> </div>
                            <strong>
                                <p> ИП РАГИМОВА А.М.К. ИНН 510704693888</p>
                            </strong>
                        </li>
                    </ul>
                </div>
                <p className={styles.rights}>© Parfumpomotivam 2023</p>
                <p className={styles.politics}>Политика конфиденциальности</p>
            </div>
        </footer>
    );
}