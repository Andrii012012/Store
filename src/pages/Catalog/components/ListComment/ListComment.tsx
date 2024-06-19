import { useAppSelector } from "../../../../hooks/useAppSelector";
import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import { useEffect, useState } from "react";
import Rating from "../../../../components/api/Rating/Rating";
import Video from "../Video/Video";
import Screen from "../Screen/Screen";
import { filterGoods } from "../../../../features/goods/createSelect";

type TRender = {
    media: boolean,
    isRender: boolean,
}

export default function ListComment() {

    const [showComments, setShowComments] = useState<number>(3);

    const [render, setRender] = useState<TRender>({
        media: window.matchMedia('(max-width: 480px)').matches ? true : false,
        isRender: false,
    });

    const elementJsx: JSX.Element[] = [];

    let comments = useAppSelector(filterGoods);

    comments = comments?.comments;

    useEffect(() => {
        function hangleResize() {
            setRender((prevState: TRender) => {
                const newState = { ...prevState };
                if (window.matchMedia('(max-width: 480px)').matches && !newState.isRender) {
                    newState.media = true;
                    newState.isRender = true;
                } else if (window.matchMedia('(min-width: 481px)').matches && newState.isRender) {
                    newState.media = false;
                    newState.isRender = false;
                }
                return newState;
            })
        }
        window.addEventListener('resize', hangleResize);

        return () => {
            window.removeEventListener('resize', hangleResize);
        }

    }, []);


    for (let index = 0; index < comments?.length; index++) {
        if (index < showComments) {
            const element = (
                <li className={styles.item} key={comments[index].date}>
                    <div className={styles.header}>
                        <p className={`${styles.author} ${gStyles.textSmall}`}>
                            {comments[index].author &&
                                <>
                                    {comments[index].author.name} {comments[index].author.lastName}
                                </>
                            }
                        </p>
                        <Rating stars={comments[index].stars} isMove={false} count={5} />
                    </div>
                    <p className={`${styles.date} ${gStyles.textSmall}`}>{comments[index].date}</p>
                    <p className={`${styles.description} ${gStyles.textSmall}`} style={{ marginBottom: comments[index].screens ? '16px' : '0' }}>{comments[index].description}</p>
                    <ul className={styles.listScreen}>
                        <Screen screen={comments[index].screens || []} media={render.media} />
                    </ul>
                    <ul className={styles.listVideo}>
                        {render.media ?
                            comments[index].videos && <Video isSwiper={false} list={comments[index].videos} /> :
                            <Video isSwiper={true} list={comments[index].videos} />}
                    </ul>
                </li>
            );
            elementJsx.push(element);
        }
    }

    return (
        <ul className={styles.list}>
            {elementJsx}
            {comments?.length > showComments && <p className={styles.extraComments}
                onClick={() => setShowComments((prevState) => prevState += 3)}>Показать еще</p>}
        </ul>
    );
}