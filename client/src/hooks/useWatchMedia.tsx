import { useEffect, useState } from "react";

interface IProps {
    widthTeblet?: number,
    widthTebletExtra?: number,
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
        if (window.matchMedia(`max-width: ${widthTeblet}px`).matches) {
            return window.matchMedia(`max-width: ${widthTeblet}px`).matches;
        } else if (window.matchMedia(`max-width: ${widthTebletExtra}px`).matches) {
            return window.matchMedia(`max-width: ${widthTebletExtra}px`).matches;
        } else if (window.matchMedia(`max-width: ${widthPhone}px`).matches) {
            return window.matchMedia(`max-width: ${widthPhone}px`).matches;
        }
        return false;
    }

    function getShowSlide() {
        if (widthTeblet) {
            return showSlide[0];
        } else if (widthTebletExtra) {
            return showSlide[1];
        } else if (widthPhone) {
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
        function hangleResize() {
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
        window.addEventListener('resize', hangleResize);

        return () => {
            window.removeEventListener('resize', hangleResize);
        }

    }, []);

    return dataMedia;

}