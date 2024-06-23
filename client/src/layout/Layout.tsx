import { ReactElement, ReactNode } from 'react';
import styles from './style.module.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Layout({ children }: { children?: ReactNode }): JSX.Element {
    return (
        <div className={styles.wrapper}>
            <Header />
                {children}
            <Footer />
        </div>
    )
}