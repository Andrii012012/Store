import style from './style.module.scss';
import gStyle from '../../../../styles/style.module.scss';
import backgroundImg1 from '../../../../assets/imgs/Offer/background-img-1.png';
import backgroundImg2 from '../../../../assets/imgs/Offer/background-img-2.png';
import backgroundImg3 from '../../../../assets/imgs/Offer/background-img-3.png';

type TOffer = Record<'background' | 'title' | 'text', string>;

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
        <section className={style.offer}>
            <div className={gStyle.container}>
                <h2 className={`${gStyle.titleSmall} ${style.title}`}>Популярные ароматы</h2>
                <ul className={style.list}>
                    {offer.map((item, _) => (
                        <li key={item.title} className={style.item}>
                            <img className={style.background} src={item.background} alt="" />
                            <div className={style.content}>
                                <h3 className={`${style.titleCard} ${gStyle.titleSmall}`}>{item.title}</h3>
                                <p className={style.text}>{item.text}</p>
                                <button className={style.btn}><span>В корзину</span></button>
                            </div>
                        </li>
                    ))}
                </ul>
                <p className={`${gStyle.titleSmall} ${style.bonus}`}>Бонусы от покупок</p>
            </div>
        </section>
    );
}