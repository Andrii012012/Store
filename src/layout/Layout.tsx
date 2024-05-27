import { ReactElement, ReactNode } from 'react';
import Header from '../components/Header/Header';

export default function Layout({ children }: { children?: ReactNode }): JSX.Element {
    return (
        <div className='App'>
            <Header />
            {children}
        </div>
    )
}