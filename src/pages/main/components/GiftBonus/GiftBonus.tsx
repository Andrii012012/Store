import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import backgroundMain from '../../../../assets/imgs/GiftBonus/background-img.png';
import { Link } from 'react-router-dom';
import { BONUS_PATH } from '../../../Account/route/routes';

export default function GiftBonus(): JSX.Element {
    return (
        <section className={styles.GiftBonus}>
            <img className={styles.backgroundMain} src={backgroundMain} />
            <div className={`${gStyles.container} ${styles.container}`}>
                <h2 className={`${gStyles.titleSmall} ${styles.title}`}>Получайте кэшбэк за покупки</h2>
                <p className={styles.text}>Бонусные баллы за регистрацию и покупки</p>
                <Link to={BONUS_PATH} className={styles.btn}><span>Узнать подробнее</span></Link>
            </div>
        </section>
    );
}