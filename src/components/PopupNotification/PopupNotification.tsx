import ButtonGoods from '../api/ButtonGoods/ButtonGoods';
import styles from './style.module.scss';
import gStyles from '../../styles/style.module.scss';
import { useNavigate } from 'react-router-dom';

interface IProps {
    title: string;
    text: string;
    to?: string;
    hangle?: () => void; 
    close: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PopupNotification(props: IProps): JSX.Element {

    let { title, text, to = '/', close, hangle } = props;

    const goTo = useNavigate();

     function hangleGoTo(){
        goTo(to);
        close(false);
        hangle && hangle();
     }

    return (
        <div className={styles.popup}>
            <div className={styles.container}>
                <h2 className={`${styles.title} ${gStyles.titleSmall}`}>{title}</h2>
                <ButtonGoods hangle={hangleGoTo} className={styles.btn} text={text} />
            </div>
        </div>
    );
}