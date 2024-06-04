import styles from './style.module.scss';

interface IProps {
    list: number[];
}

export default function ListValume(props: IProps): JSX.Element {
    let { list } = props;
    return (
        <>
            {list.map((item) => (
                <li key={item} className={styles.itemValume}><span>{item}</span></li>
            ))}</>
    );
}