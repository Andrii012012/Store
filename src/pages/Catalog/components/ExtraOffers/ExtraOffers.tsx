import styles from './style.module.scss';
import './style.scss';
import gStyles from '../../../../styles/style.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import ItemGoods from '../../../../components/ItemGoods/ItemGoods';
import { filterGoodsOffers } from '../../../../features/goods/createSelect';
import { IGoods } from '../../../../interfaces/goods';
import { Navigation } from 'swiper/modules';


type TRender = {
    media: boolean,
    isRender: boolean,
    showSlide: number,
}

interface IProps {
    dataMedia: TRender,
}

export default function ExtraOffers(props: IProps): JSX.Element {

    let { dataMedia } = props;
    
    const goods = useAppSelector(filterGoodsOffers);

    return (
        <section className={styles.extraOffer}>
            <h2 className={`${styles.title} ${gStyles.titleSmall}`}>Вам так же может понравиться</h2>
            <div className={`${styles.body} extraOfferBody`}>
                <Swiper
                    slidesPerView={dataMedia.showSlide}
                    modules={[Navigation]}
                    navigation
                >
                    {goods.map((item: IGoods) => (
                        <SwiperSlide className={styles.slide} >
                            <div className={styles.bodyGoods}>
                                <ItemGoods className={styles.goods} item={item} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div >
        </section >
    );
}