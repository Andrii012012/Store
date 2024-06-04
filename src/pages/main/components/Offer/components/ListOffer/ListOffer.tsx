import { TOffer } from "../../interface/interface";
import styles from './style.module.scss';
import gStyles from '../../../../../../styles/style.module.scss';
import { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";

interface IProps {
    list: TOffer[],
}

type TSettingsSwiper = {
    isSwiper: boolean;
    showSlides: number;
}

export default function ListOffer(props: IProps): JSX.Element {
    let { list } = props;

    const [settingsSwiper, setSettingsSwiper] = useState<TSettingsSwiper>({
        isSwiper: window.matchMedia('(max-width: 768px)').matches,
        showSlides: window.matchMedia('(max-width: 480px)').matches ? 1 : 2,
    });

    useEffect(() => {
        function hangleRender() {
            let matchTeblet = window.matchMedia('(max-width: 768px)').matches;
            let matchPhone = window.matchMedia('(max-width: 480px)').matches;

            setSettingsSwiper((prevState: TSettingsSwiper): TSettingsSwiper => {

                const newState = {...prevState};

                if (matchTeblet && !settingsSwiper.isSwiper) {
                    newState.isSwiper = true;
                } else if (!matchTeblet && settingsSwiper.isSwiper) {
                    newState.isSwiper = false;
                }

                if (matchPhone && newState.showSlides === 2) {
                    newState.showSlides = 1;
                } else if (!matchPhone && newState.showSlides === 1) {
                    newState.showSlides = 2;
                }

                return newState;
            });

        }

        window.addEventListener('resize', hangleRender);

        return () => {
            window.removeEventListener('resize', hangleRender);
        };

    }, []);

    return (
        <>
            {
                !settingsSwiper.isSwiper ? list.map((item, _) => (
                    <li key={item.title} className={styles.item}>
                        <img className={styles.background} src={item.background} alt="" />
                        <div className={styles.content}>
                            <h3 className={`${styles.titleCard} ${gStyles.titleSmall}`}>{item.title}</h3>
                            <p className={styles.text}>{item.text}</p>
                            <button className={styles.btn}><span>В корзину</span></button>
                        </div>
                    </li>
                )) : <Swiper
                    spaceBetween={10}
                    slidesPerView={settingsSwiper.showSlides}
                >
                    <>
                        {list.map((item, _) => (
                            <SwiperSlide>
                                <li key={item.title} className={styles.item}>
                                    <img className={styles.background} src={item.background} alt="" />
                                    <div className={styles.content}>
                                        <h3 className={`${styles.titleCard} ${gStyles.titleSmall}`}>{item.title}</h3>
                                        <p className={styles.text}>{item.text}</p>
                                        <button className={styles.btn}><span>В корзину</span></button>
                                    </div>
                                </li>
                            </SwiperSlide>
                        ))}
                    </>
                </Swiper>
            }</>
    )
}