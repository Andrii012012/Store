import { ReactNode, useEffect, useRef, memo } from 'react';

import styles from './style.module.scss';


interface IProps {
    selectClass: string;
    text: string;
    selectItem: string[] | JSX.Element[];
    children?: ReactNode;
    defaultMode?: boolean;
    handleChoose: (name: string) => void;
}

const Accordion = memo((props: IProps): JSX.Element => {
    let { selectClass, text, selectItem, children, defaultMode = true, handleChoose } = props;

    let toggle = true;

    const select = useRef<HTMLDivElement | null>(null);
    const refBodySelect = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        if (refBodySelect.current) {
            refBodySelect.current.style.maxHeight = '0px';
            refBodySelect.current.style.overflow = 'hidden';
        }
    }, [refBodySelect.current]);

    function handleOpenSelect() {
        if (refBodySelect.current && select.current) {
            if (toggle) {
                refBodySelect.current.style.maxHeight = `initial`;
                select.current.classList.add('select-active');
                toggle = false;
            } else {
                refBodySelect.current.style.maxHeight = `0px`;
                select.current.classList.remove('select-active');
                toggle = true;
            }
        }
    }

    function handleCloseSelect(e: React.MouseEvent<HTMLLIElement>) {
        if (refBodySelect.current && select.current && defaultMode && e.target instanceof HTMLLIElement) {
            handleChoose(e.target.children[0].innerHTML);
            refBodySelect.current.style.maxHeight = '0px';
            select.current.classList.remove('select-active');
            toggle = true;
        }
    }


    return (
        <div ref={select} className={`${selectClass} ${styles.accordion}`}>
            <div onClick={handleOpenSelect} style={{ display: 'flex' }}>
                {children}
                <div className={styles.accordionHeader}>
                    <p className={styles.text}>{text}</p>
                </div>
            </div>
            <ul ref={refBodySelect} className={styles.accordionBody}>
                {selectItem.map((item: string | JSX.Element, index) => {
                    return (
                        <li key={index} onClick={(e) => handleCloseSelect(e)} className={`${styles.item}`}><p>{item}</p></li>
                    )
                })}
            </ul>
        </div>
    );
});

export default Accordion;