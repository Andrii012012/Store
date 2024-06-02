import { useEffect, useState } from "react";


export default function useDebunceValue<T>(value: T, delay: number) {
    const [debunceValue, setDebunceValue] = useState(value);

    useEffect(() => {
        const time = setTimeout(() => {
            setDebunceValue(value);
        }, delay);

        return () => {
            clearTimeout(time);
        }

    }, [value, debunceValue]);

    return debunceValue;

}