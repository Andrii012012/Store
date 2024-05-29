import styles from './style.module.scss';
import { NavLink } from 'react-router-dom';
import imgPhone from '../../assets/imgs/Header/phone-call.svg';
import imgCity from '../../assets/imgs/Header/message.svg';
import logo from '../../assets/imgs/Header/logo.svg';
import gStyles from '../../styles/style.module.scss';
import Accordion from '../../containers/Accordion/Accordion';
import user from '../../assets/imgs/Header/user.svg';
import basket from '../../assets/imgs/Header/basket.svg';
import seach from '../../assets/imgs/Header/search.svg';

export default function Header(): JSX.Element {
    return <header className={styles.header}>
        <div className={gStyles.container}>
            <div className={styles.sectionMenu}>
                <div className={styles.city}>
                    <img src={imgCity} alt="" />
                    <p>Ваш город: Москва</p>
                </div>
                <nav className={styles.menu}>
                    <ul className={styles.listMenu}>
                        <li className={styles.item}><NavLink to='#'>Бонусы</NavLink></li>
                        <li className={styles.item}><NavLink to='#'>Документация</NavLink></li>
                        <li className={styles.item}><NavLink to='#'>О нас</NavLink></li>
                    </ul>
                </nav>
                <div className={styles.numberPhone}>
                    <img src={imgPhone} alt="" />
                    <p>7(937) 136 - 77 - 66</p>
                </div>
            </div>
            <div className={styles.info}>
                <a className={styles.logo} href='#'><img src={logo} alt="" /></a>
                <Accordion text='каталог' selectClass={styles.select} selectItem={['Мужские', 'Женские', 'Унисекс']}>
                    <div className={styles.burgerAccordion}>
                        <span></span>
                    </div>
                </Accordion>
                <form className={styles.seach} action="#" >
                    <div className={`${gStyles.bodyInput} ${styles.bodyInput}`}>
                        <input type='text' placeholder='Найти парфюм..' />
                        <img className={gStyles.iconSeach} src={seach} alt="" />
                    </div>
                </form>
                <img className={styles.user} src={user} alt="" />
                <div className={styles.basket}>
                    <img src={basket} alt="" />
                </div>
            </div>
        </div>
    </header>
};