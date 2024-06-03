import { useEffect, useState } from "react";

type TValue = {
    elementHangle: HTMLElement | null,
    watchClassName: string;
    removeClassName: string;
}

export default function useWatchElement() {

    const [value, setValue] = useState<TValue>({
        elementHangle: null,
        watchClassName: '',
        removeClassName: '',
    });

    useEffect(() => {
        setWatch();
        return () => {
            document.removeEventListener('click', (e) => { });
        }
    }, [value]);

    function setWatch() {
        document.addEventListener('click', (e) => {
            if (e.target instanceof HTMLElement && value.watchClassName && !e.target.closest(`.${value.watchClassName}`) && value.elementHangle) {
                value.elementHangle.classList.remove(`${value.removeClassName}`);
            }
        });
    }

    return setValue;

}