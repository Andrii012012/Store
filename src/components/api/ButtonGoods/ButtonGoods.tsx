import styles from './style.module.scss';

interface IProps {
    className?: string;
    text?: string;
    hangle?: () => void; 
}

export default function ButtonGoods(props: IProps): JSX.Element {

    let { className = '', text = 'В корзину', hangle} = props;

    return (
        <button onClick={hangle} className={`${styles.btn} ${className}`}><span>{text}</span></button>
    )
}