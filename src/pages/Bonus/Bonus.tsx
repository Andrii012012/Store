import styles from './style.module.scss';
import gStyles from '../../styles/style.module.scss';

export default function Bonus(): JSX.Element {
    return (
        <main className={styles.bonus}>
             <h1 className={`${gStyles.title} ${styles.title}`}>Бонусы</h1>
             <ul className={styles.listInfo}>
                <li>Главная <span>/</span></li>
                <li>Бонусы</li>
             </ul>
             <p className={`${gStyles.text} ${styles.text}`}>Совершая покупки, а также определённые действия у нас на сайте, вы можете зарабатывать себе бонусные баллы. Этими баллами можно оплачивать покупки!</p>
             <p className={`${gStyles.text} ${styles.textInfoBuy}`}>Совершая покупки, а также определённые действия у нас на сайте, вы можете зарабатывать себе бонусные баллы. Этими баллами можно оплачивать покупки! Бонусные баллы можно найти в вашей Корзине</p>
        </main>
    );
}