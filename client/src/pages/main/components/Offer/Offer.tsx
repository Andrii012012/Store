import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import backgroundImg1 from '../../../../assets/imgs/Offer/background-img-1.png';
import backgroundImg2 from '../../../../assets/imgs/Offer/background-img-2.png';
import backgroundImg3 from '../../../../assets/imgs/Offer/background-img-3.png';
import { TOffer } from './interface/interface';
import ListOffer from './components/ListOffer/ListOffer';


const offer: TOffer[] = [
    {
        background: backgroundImg1,
        title: 'Для неё',
        text: 'Victoria Secret Bombshell',
    },
    {
        background: backgroundImg2,
        title: 'Для него',
        text: 'Aventus By Creed',
    },
    {
        background: backgroundImg3,
        title: 'Унисекс',
        text: 'Narcotiqe',
    },
]

export default function Offer(): JSX.Element {
    return (
        <section className={styles.offer}>
            <div className={`${gStyles.container} ${styles.container}`}>
                <h2 className={`${gStyles.titleSmall} ${styles.title}`}>Популярные ароматы</h2>
                <ul className={styles.list}>
                    <ListOffer list={offer}/>
                </ul>
                <p className={`${gStyles.titleSmall} ${styles.bonus}`}>Бонусы от покупок</p>
            </div>
        </section>
    );
}