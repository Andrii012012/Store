import { useEffect, useState } from "react";

interface IProps {
    widthTeblet: number,
    widthTebletExtra: number,
    widthPhone?: number | null,
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
        if (window.innerWidth <= widthTeblet && window.innerWidth > widthTebletExtra) {
            return true;
        }
        if (window.innerWidth <= widthTebletExtra && window.innerWidth > (widthPhone || 0)) {
            return true;
        }
        if (widthPhone && window.innerWidth <= widthPhone) {
            return true;
        }
        return false;
    }

    function getShowSlide() {
        if (window.innerWidth <= widthTeblet && window.innerWidth > widthTebletExtra) {
            return showSlide[1];
        }
        if (window.innerWidth <= widthTebletExtra && window.innerWidth > (widthPhone || 0)) {
            return showSlide[2];
        }
        if (widthPhone && window.innerWidth <= widthPhone) {
            return showSlide[3];
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
                if (window.innerWidth <= widthTeblet && window.innerWidth > widthTebletExtra && !newState.isRender) {
                    newState.media = true;
                    newState.showSlide = showSlide[1];
                    newState.isRender = true;
                } else if (window.innerWidth > widthTeblet && newState.isRender) {
                    newState.media = false;
                    newState.showSlide = showSlide[0];
                    newState.isRender = false;
                } else if (window.innerWidth <= widthTebletExtra && window.innerWidth > (widthPhone || 0) && newState.isRender) {
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