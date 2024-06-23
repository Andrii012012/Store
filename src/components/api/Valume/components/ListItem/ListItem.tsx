import styles from './style.module.scss';

interface IProps {
    list: number[];
    volume: number;
    hangleChangeVolume: (value: number) => void;
}

export default function ListItem(props: IProps): JSX.Element {

    let { list, volume, hangleChangeVolume } = props;

    function hangleChange(e: React.MouseEvent<HTMLLIElement>) {
        if (e.currentTarget && e.currentTarget instanceof HTMLLIElement && e.currentTarget.children[0]) {
            hangleChangeVolume(Number(e.currentTarget.children[0].innerHTML));
        }
    }

    return (
        <>
            {list.map((item) => {
                if (volume === item) {
                    return (
                        <li key={item} className={`${styles.itemVolume} ${styles.itemVolumeAction}`}><span>{item}</span></li>
                    )
                } else {
                    return (<li onClick={(e) => hangleChange(e)} key={item} className={styles.itemVolume}><span>{item}</span></li>)
                }
            })}
        </>
    )
}