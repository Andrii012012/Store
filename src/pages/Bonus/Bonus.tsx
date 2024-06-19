import styles from './style.module.scss';
import gStyles from '../../styles/style.module.scss';
import image1Desktop from '../../assets/imgs/Bonus/image-1-desktop.png';
import image2Desktop from '../../assets/imgs/Bonus/image-2-desktop.png';
import image3Desktop from '../../assets/imgs/Bonus/image-3-desktop.png';
import image4Desktop from '../../assets/imgs/Bonus/image-4-desktop.png';
import image5Desktop from '../../assets/imgs/Bonus/image-5-desktop.png';
import image1TebletExtra from '../../assets/imgs/Bonus/image-1-teblet-extra.png';
import image2TebletExtra from '../../assets/imgs/Bonus/image-2-teblet-extra.png';
import image3TebletExtra from '../../assets/imgs/Bonus/image-3-teblet-extra.png';
import image4TebletExtra from '../../assets/imgs/Bonus/image-4-teblet-extra.png';
import image5TebletExtra from '../../assets/imgs/Bonus/image-5-teblet-extra.png';
import ListItem from './components/ListItem/ListItem';
import { TListItem } from './interface/interface';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';

const listItem: TListItem[] = [
    {
        text: 'Совершая покупки, а также определённые действия у нас на сайте, вы можете зарабатывать себе бонусные баллы. Этими баллами можно оплачивать покупки! Бонусные баллы можно найти в вашей Корзине',
        image: [image1Desktop, image1TebletExtra],
        extraText: null,
    },
    {
        text: 'Первое – регистрация. За регистрацию на сайте вам полагается 100 баллов. Сделать это не трудно: просто перейдите во вкладку Мой аккаунт',
        image: [image2Desktop, image2TebletExtra],
        extraText: 'Как их получить?',
    },
    {
        text: 'Второе – покупки. Если вы зарегистрированы на сайте, то после каждой покупки вам моментально начисляется кэшбэк. Причём, чем больше у вас покупок, тем больше кэшбек!',
        image: [image3Desktop, image3TebletExtra],
        extraText: null,
    },
    {
        text: '* – в отзыве необходимо указать свои фамилию и имя, а также место, куда был сделан заказ. Себя снимать не нужно – только духи',
        image: [image4Desktop, image4TebletExtra],
        extraText: 'Ну и, наконец, отзывы. Просто поделитесь в карточке товара своим мнением. За простой комментарий – 100 баллов. За отзыв с фото – 150 баллов. За видео-отзыв – 200 баллов*',
    },
    {
        text: 'Информацию о текущем количестве бонусных баллов, а также их историю, можно узнать в личном кабинете: откройте вкладку «Мой аккаунт» и выберите там пункт «‎Бонусы»',
        image: [image5Desktop, image5TebletExtra],
        extraText: null,
    },
];

export default function Bonus(): JSX.Element {
    return (
        <main className={styles.bonus}>
            <div className={`${gStyles.container} ${styles.container}`}>
                <HeaderComponent text='Бонусы' title='Бонусы' />
                <p className={`${gStyles.text} ${styles.text}`}>Совершая покупки, а также определённые действия у нас на сайте, вы можете зарабатывать себе бонусные баллы. Этими баллами можно оплачивать покупки!</p>
                <ul className={styles.list}>
                    <ListItem list={listItem} />
                </ul>
                <p className={`${gStyles.text} ${styles.extraInfo}`}>С любыми вопросами о бонусной системе вы всегда можете обратиться к нам</p>
            </div>
        </main>
    );
}