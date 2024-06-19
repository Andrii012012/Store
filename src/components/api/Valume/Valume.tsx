import styles from './style.module.scss';
import gStyles from '../../../styles/style.module.scss';
import { useState } from 'react';

interface IProps {
    list: number[];
    className?: string;
    volume: number;
    hangleChangeVolume: (value: number) => void;
}

export default function Valume(props: IProps): JSX.Element {
    let { list, className = '', volume, hangleChangeVolume } = props;

    function hangleChange(e: React.MouseEvent<HTMLLIElement>) {
        if (e.currentTarget && e.currentTarget instanceof HTMLLIElement && e.currentTarget.children[0]) {
            hangleChangeVolume(Number(e.currentTarget.children[0].innerHTML));
        }
    }

    return (
        <div className={`${styles.valume} ${className}`}>
            <p className={`${gStyles.text} ${styles.textVolume}`}>Объем мл.</p>
            <ul className={styles.listVolume}>
                {list.map((item) => {
                    if (volume === item) {
                        return (
                            <li key={item} className={`${styles.itemVolume} ${styles.itemVolumeAction}`}><span>{item}</span></li>
                        )
                    } else {
                       return( <li onClick={(e) => hangleChange(e)} key={item} className={styles.itemVolume}><span>{item}</span></li>)
                    }
                })}
            </ul>
        </div>
    );
}