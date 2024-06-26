import styles from './style.module.scss';
import './style.scss';
import { Link, NavLink } from 'react-router-dom';
import imgPhone from '../../assets/imgs/Header/phone-call.svg';
import imgCity from '../../assets/imgs/Header/message.svg';
import logo from '../../assets/imgs/global/logo.svg';
import gStyles from '../../styles/style.module.scss';
import user from '../../assets/imgs/Header/user.svg';
import basket from '../../assets/imgs/Header/basket.svg';
import { useEffect, useRef } from 'react';
import Seach from './components/Seach/Seach';
import Catalog from './components/Catalog/Catalog';
import { ROUTE_ABOUT, ROUTE_BASKET, ROUTE_BONUS, ROUTE_DOCUMATION } from '../../route/route';
import { useAppSelector } from '../../hooks/useAppSelector';

export default function Header(): JSX.Element {

    const basketArray = useAppSelector((state) => state.basket.basket);

    const refHeader = useRef<HTMLDivElement | null>(null);

    const burger = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (refHeader.current && window.pageYOffset > 0) {
                refHeader.current.classList.add(styles.headerScroll);
            } else if (window.pageYOffset === 0 && refHeader.current) {
                refHeader.current.classList.remove(styles.headerScroll);
            }
        })
        return () => window.removeEventListener('scroll', () => { })
    }, []);

    function hangleOpen() {
        if (burger.current && refHeader.current) {
            burger.current.classList.toggle(styles.activeBurger);
            refHeader.current.classList.toggle(styles.activeHeader);
        }
    }

    function hangleCloseBurger() {
        if (refHeader.current && burger.current) {
            burger.current.classList.remove(styles.activeBurger);
            refHeader.current.classList.remove(styles.activeHeader);
        }
    }

    return <header ref={refHeader} className={styles.header}>
        <div className={gStyles.container}>
            <div className={styles.sectionMenu}>
                <div className={styles.city}>
                    <img src={imgCity} alt="" />
                    <p>Ваш город: Киев</p>
                </div>
                <nav className={styles.menu}>
                    <ul className={styles.listMenu}>
                        <li onClick={hangleCloseBurger} className={styles.item}><NavLink to={ROUTE_BONUS}>Бонусы</NavLink></li>
                        <li onClick={hangleCloseBurger} className={styles.item}><NavLink to={ROUTE_DOCUMATION}>Документация</NavLink></li>
                        <li onClick={hangleCloseBurger} className={styles.item}><NavLink to={ROUTE_ABOUT}>О нас</NavLink></li>
                    </ul>
                </nav>
                <div className={styles.numberPhone}>
                    <img src={imgPhone} alt="" />
                    <p>7(937) 136 - 77 - 66</p>
                </div>
            </div>
            <div className={styles.info}>
                <div ref={burger} onClick={hangleOpen} className={styles.burger}>
                    <div className={styles.burgerWrapper}>
                        <span></span>
                    </div>
                </div>
                <Link className={styles.logo} to='/'><img src={logo} alt="" /></Link>
                <Catalog />
                <Seach refHeader={refHeader} />
                <NavLink className={styles.user} to='account'><img src={user} alt="" /></NavLink>
                <NavLink to={ROUTE_BASKET} className={styles.basket}>
                    <img src={basket} alt="" />
                    <div>{basketArray.length}</div>
                </NavLink>
            </div>
        </div>
    </header>
};