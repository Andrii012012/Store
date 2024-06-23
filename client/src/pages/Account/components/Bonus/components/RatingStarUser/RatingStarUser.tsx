import styles from './style.module.scss';

interface IProps {
    status: number;
}

export default function RatingStarUser(props: IProps): JSX.Element {

    let { status } = props;

    return (
        <div className={styles.bodyStars}>
            {Array.from({ length: 3 }, (_, index: number) => {
                if (status > index) {
                    return (
                        <svg className={styles.iconStar} width={24} height={24} viewBox="0 0 16 15" fill='url(#gradient)' xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="-1.94%" stop-color="#C09E6" />
                                    <stop offset="40.99%" stop-color="#FFEBCC" />
                                    <stop offset="98.79%" stop-color="#BF936B" />
                                </linearGradient>
                            </defs>
                            <path d="M8 0L10.472 4.93691L16 5.73344L12 9.57413L12.944 15L8 12.4369L3.056 15L4 9.57413L0 5.73344L5.528 4.93691L8 0Z" />
                        </svg>
                    )
                } else {
                    return (
                        <svg className={styles.iconStar} width={20} height={20} viewBox="0 0 16 15" fill='#000' xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="-1.94%" stop-color="#C09E6" />
                                    <stop offset="40.99%" stop-color="#FFEBCC" />
                                    <stop offset="98.79%" stop-color="#BF936B" />
                                </linearGradient>
                            </defs>
                            <path d="M8 0L10.472 4.93691L16 5.73344L12 9.57413L12.944 15L8 12.4369L3.056 15L4 9.57413L0 5.73344L5.528 4.93691L8 0Z" />
                        </svg>
                    )
                }
            })}
        </div>
    );
}