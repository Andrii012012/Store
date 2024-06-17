import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { Link } from 'react-router-dom';
import { leaveAccount } from '../../../../features/user/slice';
import { IMenu } from '../../interface/interface';

interface IProps {
    list: IMenu[];
}

export default function ListMenu(props: IProps): JSX.Element {

    let { list } = props;

    const dispatch = useAppDispatch();

    return (
        <>
            {list.map((item) => (
                <>
                    {item.text === 'Выйти' ? <Link onClick={() => dispatch(leaveAccount())} key={item.text} className={styles.item} to={item.to}>
                        <p className={gStyles.text}>{item.text}</p>
                        {item.img}
                    </Link> : <Link key={item.text} className={styles.item} to={item.to}>
                        <p className={gStyles.text}>{item.text}</p>
                        {item.img}
                    </Link>}
                </>
            ))}
        </>
    );
}