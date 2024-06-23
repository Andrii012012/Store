import { useEffect, useState } from "react";

type TValue = {
    elementHangle?: HTMLElement | null,
    watchClassName: string;
    removeClassName: string;
    another?: string;
    hangleClose?: (value: boolean) => void;
}

export default function useWatchElement() {

    const [value, setValue] = useState<TValue>({
        elementHangle: null,
        watchClassName: '',
        removeClassName: '',
        another: '',
    });

    useEffect(() => {
        setWatch();
        return () => {
            document.removeEventListener('click', setWatch);
        }
    }, [value]);

    function setWatch() {
        document.addEventListener('click', (e) => {
            if (e.target instanceof HTMLElement && value.watchClassName && !e.target.closest(`.${value.watchClassName}`) && value.elementHangle) {
                value.elementHangle.classList.remove(`${value.removeClassName}`);
            }
            if (e.target instanceof HTMLElement && value.watchClassName && !e.target.closest(`.${value.watchClassName}`)) {
                document.getElementById(`${value.another}`)?.classList.remove(`${value.removeClassName}`);
            }
        });
    }

    return setValue;

}