import pStyles from '../LeaveComment/style.module.scss';
import { IOptions } from '../interface/interface';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import screenIcon from '../../../../assets/imgs/Catalog/camera.svg';

interface IProps {
    count: number,
    screen: string[],
    setOptions: React.Dispatch<React.SetStateAction<IOptions>>;
    showSlide: number,
}

export default function ChooseScreen(props: IProps) {
    let { count, screen, setOptions, showSlide } = props;

    const saveCountScreen = useRef<number>(count);

    const JSXArray: JSX.Element[] = [];

    function hangleSetScreen(e: React.ChangeEvent<HTMLInputElement>) {
        setOptions((prevState) => {
            const newState = { ...prevState };
            if (e.target.files && e.target.files[0]) {
                newState.screens[saveCountScreen.current] = URL.createObjectURL(e.target.files[0]);
                saveCountScreen.current = saveCountScreen.current - 1;
            }
            return newState;
        });
    }

    for (let index = 0; index <= count; index++) {
        const element = (
            <>
                {index === 0 ? <SwiperSlide key={screen[index]}><div className={pStyles.item}>
                    <input onChange={(e) => hangleSetScreen(e)} className={pStyles.chooseFiles} type='file' />
                    {screen[0] ? <img src={screen[0]} /> : <img className={pStyles.icon} src={screenIcon} alt='' />}
                </div></SwiperSlide> : <SwiperSlide>
                    <div className={pStyles.item}>
                        <img src={screen[index]} alt="" />
                    </div></SwiperSlide>}
            </>
        );
        JSXArray.push(element);
    }

    return (
        <Swiper slidesPerView={showSlide

        }>
            {JSXArray}
        </Swiper>
    );
}