import pStyles from '../LeaveComment/style.module.scss';
import { IOptions } from '../interface/interface';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import videoIcon from '../../../../assets/imgs/Catalog/video.svg';

interface IProps {
    count: number,
    video: string[],
    setOptions: React.Dispatch<React.SetStateAction<IOptions>>;
    showSlide: number,
}

export default function ChooseVideo(props: IProps) {
    let { count, video, setOptions, showSlide } = props;

    const saveCountVideo = useRef<number>(count);

    const JSXArray: JSX.Element[] = [];

    function hangleSetVideo(e: React.ChangeEvent<HTMLInputElement>) {
        setOptions((prevState) => {
            const newState = { ...prevState };
            if (e.target.files && e.target.files[0]) {
                newState.videos[saveCountVideo.current] = URL.createObjectURL(e.target.files[0]);
                saveCountVideo.current = (saveCountVideo.current - 1);
            }
            return newState;
        });
    }


    for (let index = 0; index <= count; index++) {
        const element = (
            <>
                {index === 0 ? <SwiperSlide key={video[index]}><div className={pStyles.item}>
                    <input onChange={(e) => hangleSetVideo(e)} className={pStyles.chooseFiles} type='file' />
                    {video[0] ? <img src={video[0]} /> : <img className={pStyles.icon} src={videoIcon} alt='' />}
                </div></SwiperSlide> : <SwiperSlide>
                    <div className={pStyles.item}>
                        <img src={video[index]} alt="" />
                    </div></SwiperSlide>}
            </>
        );
        JSXArray.push(element);
    }

    return (
        <Swiper slidesPerView={showSlide}>
            {JSXArray}
        </Swiper>
    );
}