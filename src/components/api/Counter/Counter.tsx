import styles from './style.module.scss';

interface IProps {
    className?: string;
    value: number;
    setValue?: React.Dispatch<React.SetStateAction<number>>;
    selfProcessing?: boolean;
    increment?: () => void;
    decrement?: () => void;
}

export default function Counter(props: IProps): JSX.Element {
    let { value, setValue, selfProcessing = true, increment, decrement, className = '' } = props;

    function hangleIncrement() {
        setValue && setValue((prevState) => ++prevState);
    }

    function hangleDecrement() {
        setValue && setValue((prevState) => {
            if (prevState < 2) {
                return prevState;
            } else {
                return --prevState;
            }
        });
    }

    return (
        <div className={`${styles.count} ${className}`}>
            <div className={`${styles.btn} ${styles.decrement}`}
                onClick={() => selfProcessing ? hangleDecrement() : decrement && decrement()}></div>
            <p className={styles.bodyNumberCount}><span>{value}</span></p>
            <div className={`${styles.btn} ${styles.increment}`}
                onClick={() => selfProcessing ? hangleIncrement() : increment && increment()}></div>
        </div>
    );
}