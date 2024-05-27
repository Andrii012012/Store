import { ReactNode, useEffect, useRef } from 'react';
import styles from './style.module.scss';


interface IProps {
    selectClass: string;
    text: string;
    selectItem: string[];
    children?: ReactNode;
}

let isFirst = true;

export default function Accordion(props: IProps) {
    let { selectClass, text, selectItem, children } = props;

    let toggle = true;

    const saveHeightSelect = useRef<number | null>(null);
    const refBodySelect = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        if (refBodySelect.current) {
            if (isFirst) {
                saveHeightSelect.current = Number(refBodySelect.current?.getBoundingClientRect().height);
                isFirst = false;
            }
            refBodySelect.current.style.maxHeight = '0px';
            refBodySelect.current.style.overflow = 'hidden';
        }
    }, []);

    function handleOpenSelect() {
        if (refBodySelect.current) {
            if (toggle) {
                refBodySelect.current.style.maxHeight = `${saveHeightSelect.current}px`;
                toggle = false;
            } else {
                refBodySelect.current.style.maxHeight = `0px`;
                toggle = true;
            }
        }
    }

    function handleCloseSelect() {
        if (refBodySelect.current) {
            refBodySelect.current.style.maxHeight = '0px';
            toggle = true;
        }
    }

    return (
        <div className={`${selectClass} ${styles.accordion}`}>
            <div onClick={handleOpenSelect} style={{ display: 'flex' }}>
                {children}
                <div className={styles.accordionHeader}>
                    <p className={styles.text}>{text}</p>
                </div>
            </div>
            <ul ref={refBodySelect} className={styles.accordionBody}>
                {selectItem.map((item: string, _) => (
                    <li onClick={handleCloseSelect} key={item} className={`${styles.item}`}><p>{item}</p></li>
                ))}
            </ul>
        </div>
    );

}