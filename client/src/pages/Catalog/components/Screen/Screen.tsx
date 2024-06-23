import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './style.module.scss';

interface IProps {
    screen: string[],
    media: boolean,
}

export default function Screen(props: IProps) {
    let { media, screen } = props;
    return (
        <>
            {!media ?
                Array.isArray(screen) && screen?.map((item) => (
                    <div key={item} className={styles.screenImg}><img src={item} alt='screen' /></div>
                ))
                : <Swiper
                    slidesPerView={2.5}
                    spaceBetween={20}
                >
                    {Array.isArray(screen) && screen?.map((item) => (
                        <SwiperSlide><div key={item} className={styles.screenImg}><img src={item} alt='screen' /></div></SwiperSlide>
                    ))}
                </Swiper>
            }
        </>
    );
}