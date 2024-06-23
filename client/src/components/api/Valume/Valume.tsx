import styles from './style.module.scss';
import gStyles from '../../../styles/style.module.scss';
import { useState } from 'react';
import ListItem from './components/ListItem/ListItem';

interface IProps {
    list: number[];
    className?: string;
    volume: number;
    hangleChangeVolume: (value: number) => void;
}

export default function Valume(props: IProps): JSX.Element {
    let { list, className = '', volume, hangleChangeVolume } = props;

    return (
        <div className={`${styles.valume} ${className}`}>
            <p className={`${gStyles.text} ${styles.textVolume}`}>Объем мл.</p>
            <ul className={styles.listVolume}>
                <ListItem volume={volume} list={list} hangleChangeVolume={hangleChangeVolume} />
            </ul>
        </div>
    );
}