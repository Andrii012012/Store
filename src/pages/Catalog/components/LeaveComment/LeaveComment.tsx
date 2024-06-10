import { useCallback, useRef, useState } from 'react';
import Rating from '../../../../components/api/Rating/Rating';
import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import ButtonGoods from '../../../../components/api/ButtonGoods/ButtonGoods';
import bonus from '../../../../assets/imgs/Catalog/icon-bonus.svg';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { addComments } from '../../../../features/goods/slice';
import { IGoods } from '../../../../interfaces/goods';
import ChooseVideo from '../ChooseVideo/ChooseVideo';
import { IOptions } from '../interface/interface';
import ChooseScreen from '../ChooseScreen/ChooseScreen';
import useWatchMedia from '../../../../hooks/useWatchMedia';

interface IProps {
    goods: IGoods,
    close: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LeaveComment(props: IProps): JSX.Element {

    let { goods, close } = props;

    const dispatch = useAppDispatch();

    const refAddComment = useRef<HTMLDivElement | null>(null);

    const [options, setOptions] = useState<IOptions>({
        stars: 1,
        date: new Date().toLocaleString().split(',')[0],
        description: "",
        videos: [],
        screens: [],
    });

    const dataMedia = useWatchMedia({ widthTeblet: 768, widthTebletExtra: 480, widthPhone: 390, showSlide: [3, 2.5, 2] });

    function hangleChangeRating(rating: number) {
        setOptions((prevState) => {
            const newState = { ...prevState };
            newState.stars = rating;
            return newState;
        });
    }

    const hangleChangeDescription = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setOptions((prevState) => {
                const newState = { ...prevState };
                newState.description = e.target.value;
                return newState;
            });
        }, []);

    function hangleSendComment() {
        setOptions((prevState) => {
            const newState = { ...prevState };
            newState.date = new Date().toLocaleString().split(',')[0];
            return newState;
        });
        dispatch(addComments({ id: goods.id, comment: options }));
        close(false);
    }

    return (
        <section ref={refAddComment} className={`${styles.leaveComment}`}>
            <div className={`${styles.wrapper} leaveCommentWrapper`}>
                <div className={styles.close} onClick={() => close(false)}></div>
                <div>
                    <h2 className={`${gStyles.titleSmall} ${styles.title}`}>The devil is a loser by Mushfig</h2>
                </div>
                <div className={styles.bonusInfo}>
                    <div className={styles.iconBonus}><img src={bonus} alt="" /></div>
                    <ul>
                        <li>За текстовый отзыв Вы получите 100 бонусных баллов</li>
                        <li>За отзыв с фото 150 бонусных баллов</li>
                        <li>За видео-отзыв с фото 200 бонусных баллов</li>
                    </ul>
                </div>
                <div className={styles.ratingChoose}>
                    <Rating setRatingFunc={hangleChangeRating} className={styles.rating} width={28} height={26} />
                    <p className={styles.textRating}>Оцените покупку*</p>
                </div>
                <p className={styles.text}>Отзыв*</p>
                <textarea value={options.description} className={styles.description}
                    onChange={(e) => hangleChangeDescription(e)}></textarea>
                <p className={styles.textAdd}>Добавьте фотографии (до 10ти штук)</p>
                <div className={styles.bodyChoose}>
                    <ChooseScreen showSlide={dataMedia.showSlide} count={9} setOptions={setOptions} screen={options.screens} />
                </div>
                <div className={styles.bodyChoose}>
                    <p className={styles.textAdd}>Добавьте видео</p>
                    <ChooseVideo showSlide={dataMedia.showSlide} setOptions={setOptions} count={9} video={options.videos} />
                </div>
                <ButtonGoods hangle={hangleSendComment} text='Отправить отзыв' className={styles.btn} />
            </div>
        </section >
    );
}