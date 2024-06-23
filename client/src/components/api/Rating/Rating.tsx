import { ReactNode } from 'react';
import styles from './style.module.scss';
import RatingMove from './components/RatingIndicator/RatingIndicator';

interface IProps {
    count?: number,
    className?: string,
    ratingIcon?: ReactNode;
    gradient?: JSX.Element,
    gradientColor?: string,
    color?: string,
    isMove?: boolean,
    width?: number,
    height?: number,
    stars?: number,
    setRatingFunc?: (rating: number) => void;
}

export default function Rating(props: IProps): JSX.Element {
    let { count = 5, className = '',
        ratingIcon,
        stars = 5,
        color, gradientColor = 'url(#gradient)', gradient, isMove = true, width = 16, height = 15, setRatingFunc } = props;

    if (true) {
        return (
            <div className={`${styles.rating} ${className}`} >
                <div className={styles.ratingIdentifire}>
                    <RatingMove
                        width={width}
                        height={height}
                        stars={stars}
                        color={color}
                        setRatingFunc={setRatingFunc}
                        gradientColor={gradientColor}
                        gradient={gradient}
                        ratingIcon={ratingIcon}
                        isMove={isMove}
                        count={count}
                    />
                </div>
            </div>
        )
    }
}