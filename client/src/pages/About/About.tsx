import styles from './style.module.scss';
import gStyles from '../../styles/style.module.scss';
import imageSmall from '../../assets/imgs/About/image-small.png';
import imageBig from '../../assets/imgs/About/image-big-desktop.png';
import imageBigTeblet from '../../assets/imgs/About/image-big-teblet.png';

type TInfoNotes = {
    text: string;
}

const infoNotes: TInfoNotes[] = [
    {
        text: 'Верхние – это первое впечатление, которое оставляет о себе аромат. Их длительность не более часа',
    },
    {
        text: 'Средние ноты – появляются после верхних и длятся несколько часов. Они не такие яркие, как верхние ноты, тем не менее, составляют всю суть аромата',
    },
    {
        text: 'Базовые ноты – создают финальное впечатление об аромате и остаются на коже продолжительное время. Они оставляют легкий шлейф, который может длиться даже до нескольких дней',
    },
];

export default function About(): JSX.Element {
    return (
        <main className={styles.about}>
            <div className={`${gStyles.container} ${styles.container}`}>
                <div className={styles.fragmentImageSmall}>
                    <img src={imageSmall} />
                </div>
                <div className={styles.fragmentImageBig}>
                    <picture>
                        <source srcSet={imageBigTeblet} media='(max-width: 480px)' />
                        <img src={imageBig} />
                    </picture>
                </div>
                <h1 className={`${styles.title} ${gStyles.title}`}>
                    О нас
                </h1>
                <ul className={`${styles.listInfo} ${gStyles.textSmall}`}>
                    <li>Главная<span>/</span></li>
                    <li>О нас</li>
                </ul>
                <p className={`${styles.greating} ${gStyles.textInfo}`}>
                    Дорогие гости, рады приветствовать вас на нашем сайте!
                </p>
                <p className={`${styles.text} ${gStyles.textInfo}`}>
                    Мы собрали для вас самые известные ароматы со всего мира. Благодаря богатому ассортименту,
                    каждый сможет найти для себя то самое: мужчины — то,
                    что придаст им мужественности и статусности, женщины —
                    то что выгодно подчеркнёт их нежность, подарит изысканный шарм
                    и оставит шлейф очарования. Даже для самых скромных особ у нас всегда найдётся приятный аромат</p>
                <p className={`${styles.textModelNotes} ${gStyles.textInfo}`}>Каждая модель описана тремя нотами:</p>
                <ul className={styles.list}>
                    {infoNotes.map((item, index) => (
                        <li key={index} className={`${styles.item} ${gStyles.text}`}>{item.text}</li>
                    ))}
                </ul>
                <p className={`${gStyles.textInfo} ${styles.textAim}`}>Наша цель — доставлять вам радость от покупки,
                    совершив её в два клика. После
                    регистрации на сайте, отправьте в корзину
                    выбранный флакон и ожидайте доставку</p>
            </div>
        </main>
    );
}