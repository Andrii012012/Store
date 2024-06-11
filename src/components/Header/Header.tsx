import styles from './style.module.scss';
import './style.scss';
import { Link, NavLink } from 'react-router-dom';
import imgPhone from '../../assets/imgs/Header/phone-call.svg';
import imgCity from '../../assets/imgs/Header/message.svg';
import logo from '../../assets/imgs/global/logo.svg';
import gStyles from '../../styles/style.module.scss';
import user from '../../assets/imgs/Header/user.svg';
import basket from '../../assets/imgs/Header/basket.svg';
import { useEffect, useRef, useState } from 'react';
import Seach from './components/Seach/Seach';
import Catalog from './components/Catalog/Catalog';

export default function Header(): JSX.Element {

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
                    <p>Ваш город: Москва</p>
                </div>
                <nav className={styles.menu}>
                    <ul className={styles.listMenu}>
                        <li onClick={hangleCloseBurger} className={styles.item}><NavLink to='#'>Бонусы</NavLink></li>
                        <li onClick={hangleCloseBurger} className={styles.item}><NavLink to='#'>Документация</NavLink></li>
                        <li onClick={hangleCloseBurger} className={styles.item}><NavLink to='#'>О нас</NavLink></li>
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
                <a className={styles.logo} href='#'><img src={logo} alt="" /></a>
                <Catalog />
                <Seach refHeader={refHeader} />
                <Link className={styles.user} to='account'><img src={user} alt="" /></Link>
                <div className={styles.basket}>
                    <img src={basket} alt="" />
                </div>
            </div>
        </div>
    </header>
};