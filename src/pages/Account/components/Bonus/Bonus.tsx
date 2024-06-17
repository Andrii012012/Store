import { useAppSelector } from "../../../../hooks/useAppSelector";
import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import Pagination from "../../../../components/api/Pagination/Pagination";
import { useRef, useState } from "react";


export default function Bonus(): JSX.Element {
    const user = useAppSelector((state) => state.user.user);

    const JSXElements: JSX.Element[] = [];

    const [countShow, setCountShow] = useState<number>(2);

    const savePrevCountPage = useRef<number>(0);

    function hangleChangePage(page: number) {

        if (savePrevCountPage.current !== (page - 2)) {
            savePrevCountPage.current = (page - 2);
            setCountShow(page);
        }
        else {
            savePrevCountPage.current = countShow;
            setCountShow(page);
        }

    }

    if (user && user.id) {

        user.historyBonus.forEach((item, index) => {
            if (index >= savePrevCountPage.current && index <= countShow) {
                const element = (
                    <li className={`${styles.item} ${gStyles.textSmall}`}>
                        <p className={styles.date}>{item.date}</p>
                        <p className={styles.marks}>Баллы: +{item.marks}</p>
                        <p className={styles.dateGetting}>Дата: {item.specificDate}</p>
                        <p className={styles.cause}>Причина: {item.cause}</p>
                    </li>
                );
                JSXElements.push(element);
            }
        });

        return (
            <section className={styles.bonus}>
                <h1 className={`${gStyles.titleSmall} ${styles.title}`}>Бонусы</h1>
                <div className={styles.wrapperInfo}>
                    <div className={styles.bodyInfo}>
                        <p>Ваш статус: {user?.status === '1' ? 'Новый покупать' : 'Часный покупатель'}</p>
                        <p>Ваш кэшбек: {user?.cashback}%</p>
                        <p>Баллов сейчас: {user?.marks} баллов</p>
                    </div>
                    <div className={styles.user}>
                        <img src={require(`../../../../assets/imgs/avatar/${user?.avatar}`)} alt="" />
                        <div className={styles.bodyStars}>
                            {Array.from({ length: 3 }, (_, index: number) => {
                                if (Number(user?.status) > index) {
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
                    </div>
                    <div className={`${styles.bodyInfoBonus} ${gStyles.textSmall}`}>
                        <div className={styles.countBought}>
                            <p className={styles.infoBought}><span style={{ color: user?.historyOrder && user?.historyOrder.length < 5 ? 'green' : 'orange' }}>{user?.historyOrder ? user?.historyOrder.length : 0}</span><span>/5</span> покупок сделано</p>
                        </div>
                        <p className={styles.description}>Чтобы получать кэшбек 3% и статус «Частый покупатель» ,
                            вам нужно сделать количество покупок 5</p>
                    </div>
                </div>
                <div className={styles.lineMarking}>
                    <div className={styles.wrapperIndexation}>
                        <div className={styles.indexation} style={{ width: `${(Number(user?.historyOrder?.length) * 10)}%` }}></div>
                        {Array.from({ length: 3 }, (_, index) => {
                            if ((index + 1) === Number(user?.status)) {
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
                <h2 className={`${gStyles.titleSmall} ${styles.titleBonus}`}>История бонусов</h2>
                <div className={styles.wrapperListBonus}>
                    <ul className={styles.listBonus}>
                        {JSXElements}
                    </ul>
                    <div className={styles.pagination}>
                        <Pagination countPage={2}
                            array={user.historyBonus} onChange={hangleChangePage} />
                    </div>
                </div>
            </section >
        )
    } else {
        return <></>;
    }

}