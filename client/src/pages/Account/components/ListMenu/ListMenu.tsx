import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { Link } from 'react-router-dom';
import { leaveAccount } from '../../../../features/user/slice';
import { IMenu } from '../../interface/interface';
import { useState } from 'react';

interface IProps {
    list: IMenu[];
}

export default function ListMenu(props: IProps): JSX.Element {

    let { list } = props;

    const dispatch = useAppDispatch();

    function hangleActiveLink(e: React.MouseEvent<HTMLElement>){
        if(e.target instanceof HTMLElement){
          document.querySelectorAll(`.${styles.item}`).forEach((item) => item.classList.remove(styles.activeNav));
           e.currentTarget.classList.add(styles.activeNav);
        }
    }

    return (
        <>
            {list.map((item) => (
                <>
                    {item.text === 'Выйти' ? <Link onClick={() => dispatch(leaveAccount())} key={item.text} className={styles.item} to={item.to}>
                        <p className={gStyles.text}>{item.text}</p>
                        {item.img}
                    </Link> : <Link onClick={(e) => hangleActiveLink(e)} key={item.text} className={styles.item} to={item.to}>
                        <p className={gStyles.text}>{item.text}</p>
                        {item.img}
                    </Link>}
                </>
            ))}
        </>
    );
}