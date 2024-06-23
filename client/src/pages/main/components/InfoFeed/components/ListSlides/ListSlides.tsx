import { Swiper, SwiperSlide } from "swiper/react";
import './style.scss';
import styles from './style.module.scss';
import gStyles from '../../../../../../styles/style.module.scss';
import { TSlides } from "../../interface/interface";
import { Pagination } from "swiper/modules";

interface IProps {
    list: TSlides[]
}

export default function ListSlides(props: IProps) {
    let { list } = props;
    return (
        <Swiper
        modules={[Pagination]}
        pagination={true}
        slidesPerView={1}
        >
            {
                list.map((item) => (
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
                ))
            }
        </Swiper>
    )
}