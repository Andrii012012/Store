import { Swiper, SwiperSlide } from "swiper/react";
import './style.scss';
import { Pagination } from 'swiper/modules';
import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import backgroundImg1 from '../../../../assets/imgs/InfoFeed/background-img-1.png';
import backgroundImg2 from '../../../../assets/imgs/InfoFeed/background-img-2.png';
import backgroundImg3 from '../../../../assets/imgs/InfoFeed/background-img-3.png';
import backgroundImg4 from '../../../../assets/imgs/InfoFeed/background-img-4.png';
import backgroundImg5 from '../../../../assets/imgs/InfoFeed/background-img-5.png';

type TSlides = {
    title?: string;
    subtitle?: string | JSX.Element;
    img: string;
}

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
            <Swiper
                modules={[Pagination]}
                pagination={true}
                slidesPerView={1}
            >
                {slides.map((item) => (
                    <SwiperSlide key={item.img}>
                        <div className={styles.body}>
                            <img className={styles.img} src={item.img} alt="" />
                            <div className={`${styles.container} ${gStyles.container}`}>
                                <h1 className={styles.title}>
                                    {item.title}
                                </h1>
                                <p className={`${styles.extraInfo} ${gStyles.titleSmall}`}>
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
