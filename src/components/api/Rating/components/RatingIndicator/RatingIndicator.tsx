import { ReactNode, useState } from 'react';
import styles from './style.module.scss';

interface IProps {
    width: number;
    height: number;
    ratingIcon?: ReactNode;
    gradient: JSX.Element | undefined;
    stars: number;
    isMove: boolean;
    setRatingFunc?: (rating: number) => void;
    gradientColor?: string;
    color?: string;
    count: number
}

export default function RatingMove(props: IProps): JSX.Element {

    let { width, height, ratingIcon, gradient, stars, isMove, setRatingFunc, gradientColor, color, count } = props;

    const [rating, setRating] = useState<number>(stars);

    function hangleHoverRating(index: number) {
        if (isMove) {
            setRating(index);
            setRatingFunc && setRatingFunc(index);
        }
    }

    function hangleChangeClick(index: number) {
        if (isMove) {
            setRating(index);
            setRatingFunc && setRatingFunc(index);
        }
    }

    function isCheckStyles(index: number) {
        if (rating >= index && gradientColor) {
            return gradientColor;
        } else if (rating <= index && color) {
            return color;
        }
    }

    const elementJsx: JSX.Element[] = [];

    for (let index = 1; index <= count; index++) {
        const element = (
            <label key={index} className={styles.item}>
                <input onMouseMove={() => hangleHoverRating(index)} onClick={() => hangleChangeClick(index)} className={styles.itemInput} type="radio" name="rating" value={index} />
                {ratingIcon
                    ? ratingIcon
                    : <svg className={styles.icon} width={width} height={height} viewBox="0 0 16 15" fill={isCheckStyles(index)} xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="-1.94%" stop-color="#C09E6C" />
                                <stop offset="40.99%" stop-color="#FFEBCC" />
                                <stop offset="98.79%" stop-color="#BF936B" />
                            </linearGradient>
                            {gradient && gradient}
                        </defs>
                        <path d="M8 0L10.472 4.93691L16 5.73344L12 9.57413L12.944 15L8 12.4369L3.056 15L4 9.57413L0 5.73344L5.528 4.93691L8 0Z" />
                    </svg>}
            </label>
        );

        elementJsx.push(element);
    }


    return <>{elementJsx}</>;
}