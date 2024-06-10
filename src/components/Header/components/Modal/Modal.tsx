import { ReactElement, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import styles from './style.module.scss';

const modal = document.getElementById('modal')!;

export default function Modal({ children }: { children: ReactElement }) {
    const element = useMemo(() => document.createElement('div'), []);

    useEffect(() => {
        modal.append(element);

        return () => {
            modal.removeChild(element);
        }
    }, []);


    return createPortal(children, element);

}