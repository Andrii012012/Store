import { useEffect, useState } from "react";

interface IProps {
    widthTeblet: number,
    widthTebletExtra: number,
    widthPhone?: number,
    showSlide: number[],
}

interface TMedia {
    media: boolean,
    isRender: boolean,
    showSlide: number,
}

export default function useWatchMedia(props: IProps) {

    let { showSlide, widthTeblet, widthTebletExtra, widthPhone } = props;
    function checkWidth() {
        if (window.innerWidth <= widthTebletExtra && window.innerWidth > (widthPhone || 0)) {
            return true;
        } else if (widthPhone && window.innerWidth <= widthPhone) {
            return true;
        }
        return false;
    }

    function getShowSlide() {
        if (window.innerWidth >= widthTeblet && window.innerWidth > widthTebletExtra) {
            return showSlide[0];
        }
        if (window.innerWidth >= widthTebletExtra && window.innerWidth > (widthPhone || 0)) {
            return showSlide[1];
        }
        if (widthPhone && window.innerWidth <= widthPhone) {
            return showSlide[2];
        }
        return showSlide[0];
    }

    const [dataMedia, setDataMedia] = useState<TMedia>({
        media: checkWidth(),
        isRender: false,
        showSlide: getShowSlide(),
    });

    useEffect(() => {

        function hangleChangeOptions() {
            setDataMedia((prevState: TMedia) => {
                const newState = { ...prevState };
                if (window.matchMedia(`(max-width: ${widthTeblet}px)`).matches && !newState.isRender) {
                    newState.media = true;
                    newState.showSlide = showSlide[1];
                    newState.isRender = true;
                } else if (window.matchMedia(`(min-width: ${widthTeblet && widthTeblet + 1}px)`).matches && newState.isRender) {
                    newState.media = false;
                    newState.showSlide = showSlide[0];
                    newState.isRender = false;
                } else if (window.matchMedia(`(max-width: ${widthPhone}px)`).matches && newState.isRender) {
                    newState.media = true;
                    newState.showSlide = showSlide[2];
                    newState.isRender = true;
                }
                return newState;
            })
        }


        window.addEventListener('resize', hangleChangeOptions);

        return () => {
            window.removeEventListener('resize', hangleChangeOptions);
        }

    }, []);

    return dataMedia;

}