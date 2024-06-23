import styles from './style.module.scss';
import gStyles from '../../styles/style.module.scss';
import file from '../../assets/imgs/Documention/icon-file.svg';
import imageFragment from '../../assets/imgs/Documention/image1.png';

export default function Documention(): JSX.Element {
    return (
        <main className={styles.documention}>
            <div className={`${gStyles.container} ${styles.container}`}>
                <div className={styles.fragment}><img src={imageFragment} alt="" /></div>
                <h1 className={`${gStyles.title} ${styles.title}`}>Документация</h1>
                <ul className={`${styles.listPath} ${gStyles.textSmall}`}>
                    <li>Главная<span>/</span></li>
                    <li>Документация</li>
                </ul>
                <p className={`${gStyles.textInfo} ${styles.text}`}>Наш товар сертифицирован</p>
                <ul className={`${styles.list} ${gStyles.textInfo}`}>
                    <li className={styles.item}><a href="" download=""><img src={file} /><p>Сертификат EAC</p></a></li>
                    <li className={styles.item}><a href="" download=""><img src={file} /><p>Выпуска из ЕГРН</p></a></li>
                </ul>
            </div>
        </main>
    )
}