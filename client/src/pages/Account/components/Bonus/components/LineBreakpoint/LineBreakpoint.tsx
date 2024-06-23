import styles from './style.module.scss';

interface IProps {
    status: number;
    lengthHistoryOrder: number;
}

export default function LineBreakpoint(props: IProps): JSX.Element {

    let { status, lengthHistoryOrder } = props;

    return (
        <div className={styles.lineMarking}>
            <div className={styles.wrapperIndexation}>
                <div className={styles.indexation} style={{ width: `${(Number(lengthHistoryOrder <= 10 ? lengthHistoryOrder : 10) * 10)}%` }}></div>
                {Array.from({ length: 3 }, (_, index) => {
                    if ((index + 1) === status) {
                        return (
                            <div className={
                                `${styles.breakpoint} ${styles.breakpointActive}`
                            }></div>
                        );
                    } else {
                        return (
                            <div className={`${styles.breakpoint}`}></div>
                        );
                    }
                })}
            </div>
        </div>
    );
}