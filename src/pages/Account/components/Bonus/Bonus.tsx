import { useAppSelector } from "../../../../hooks/useAppSelector";
import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import Pagination from "../../../../components/api/Pagination/Pagination";
import { useRef, useState } from "react";
import RatingStarUser from "./components/RatingStarUser/RatingStarUser";
import LineBreakpoint from "./components/LineBreakpoint/LineBreakpoint";
import { IHistoryBonus } from "../../../../interfaces/user";

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
                        <p>Ваш статус: {user?.status === '1' ? 'Новый покупать' : user?.status === '2' ?  'Часный покупатель' : 'Постоянный покупатель'}</p>
                        <p>Ваш кэшбек: {user?.cashback}%</p>
                        <p>Баллов сейчас: {user?.marks} баллов</p>
                    </div>
                    <div className={styles.user}>
                        <img src={require(`../../../../assets/imgs/avatar/${user?.avatar}`)} alt="" />
                        <RatingStarUser status={Number(user.status)}/>
                    </div>
                    <div className={`${styles.bodyInfoBonus} ${gStyles.textSmall}`}>
                        <div className={styles.countBought}>
                            <p className={styles.infoBought}><span style={{ color: user?.historyOrder && user?.historyOrder.length < 5 ? 'orange' : 'green' }}>{user?.historyOrder ? user?.historyOrder.length : 0}</span><span>/5</span> покупок сделано</p>
                        </div>
                        <p className={styles.description}>Чтобы получать кэшбек 3% и статус «Частый покупатель» ,
                            вам нужно сделать количество покупок 5</p>
                    </div>
                </div>
                <LineBreakpoint status={Number(user.status)}
                 lengthHistoryOrder={user.historyOrder.length}/>
                <h2 className={`${gStyles.titleSmall} ${styles.titleBonus}`}>История бонусов</h2>
                <div className={styles.wrapperListBonus}>
                    <ul className={styles.listBonus}>
                        {JSXElements}
                    </ul>
                    <div className={styles.pagination}>
                       <Pagination<IHistoryBonus> countPage={2}
                            array={user.historyBonus} onChange={hangleChangePage} />
                    </div>
                </div>
            </section >
        )
    } else {
        return <></>;
    }

}