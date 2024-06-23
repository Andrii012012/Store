import { useState } from 'react';
import styles from './style.module.scss';
import playVideoImg from '../../../../assets/imgs/Catalog/play-video.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IProps {
    list: string[] | undefined;
    isSwiper?: boolean
}

export default function Video(props: IProps): JSX.Element {
    let { list, isSwiper = false } = props;

    const [isOneShot, setIsOneShot] = useState<number[]>([]);

    function hungleChangeStateShot(index: number) {
        setIsOneShot((prevState) => {
            const newState = [...prevState];
            if (!newState.includes(index)) {
                newState.push(index);
            }
            return newState;
        })
    }

    if (isSwiper) {
        return (<ul className={styles.listVideo}>
            {list?.map((item, index) => {
                if (!isOneShot.includes(index)) {
                    return <div onClick={() => hungleChangeStateShot(index)} className={styles.bodyShot}>
                        <div className={styles.play}><img src={playVideoImg} /></div>
                    </div>
                } else {
                    return <video src={item} key={item} className={styles.video} controls />
                }
            })}
        </ul>);
    } else {
        return <Swiper slidesPerView={2.5} spaceBetween={20} >
            {list?.map((item, index) => {
                if (!isOneShot.includes(index)) {
                    return (
                        <SwiperSlide>
                            <div onClick={() => hungleChangeStateShot(index)} className={styles.bodyShot}>
                                <div className={styles.play}><img src={playVideoImg} /></div>
                            </div>
                        </SwiperSlide>
                    )
                } else {
                    return (<SwiperSlide>
                        <video src={item} key={item} className={styles.video} controls />
                    </SwiperSlide>);
                }
            })}
        </Swiper>
    }
}
