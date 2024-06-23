import styles from './style.module.scss';
import backgroundImg1 from '../../../../assets/imgs/InfoFeed/background-img-1.png';
import backgroundImg2 from '../../../../assets/imgs/InfoFeed/background-img-2.png';
import backgroundImg3 from '../../../../assets/imgs/InfoFeed/background-img-3.png';
import backgroundImg4 from '../../../../assets/imgs/InfoFeed/background-img-4.png';
import backgroundImg5 from '../../../../assets/imgs/InfoFeed/background-img-5.png';
import ListSlides from "./components/ListSlides/ListSlides";
import { TSlides } from "./interface/interface";

const slides: TSlides[] = [
    {
        title: 'Оптовая продажа люксовой парфюмерии с маржой до 100% и доставкой по РФ и СНГ',
        subtitle: <>В наличии более <span>500</span> ароматов</>,
        img: backgroundImg1,
    },
    {
        title: 'Оптовая продажа люксовой парфюмерии с маржой до 100% и доставкой по РФ и СНГ',
        subtitle: <>В наличии более <span>500</span> ароматов</>,
        img: backgroundImg2,
    },
    {
        title: 'Оптовая продажа люксовой парфюмерии с маржой до 100% и доставкой по РФ и СНГ',
        subtitle: <>В наличии более <span>500</span> ароматов</>,
        img: backgroundImg3,
    },
    {
        title: 'Оптовая продажа люксовой парфюмерии с маржой до 100% и доставкой по РФ и СНГ',
        subtitle: <>В наличии более <span>500</span> ароматов</>,
        img: backgroundImg4,
    },
    {
        title: 'Оптовая продажа люксовой парфюмерии с маржой до 100% и доставкой по РФ и СНГ',
        subtitle: <>В наличии более <span>500</span> ароматов</>,
        img: backgroundImg5,
    }
]

export default function InfoFeed() {
    return (
        <section className={styles.infoFeed}>
            <ListSlides list={slides}/>
        </section>
    );
}
