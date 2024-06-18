import styles from './style.module.scss';
import './style.scss';
import gStyles from '../../../../styles/style.module.scss';
import Valume from '../../../../components/api/Valume/Valume';
import ButtonGoods from '../../../../components/api/ButtonGoods/ButtonGoods';
import imgBack from '../../../../assets/imgs/global/image-goods1.png';
import { useState } from 'react';
import Accordion from '../../../../containers/Accordion/Accordion';
import Comment from '../Comment/Commet';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { filterGoods } from '../../../../features/goods/createSelect';

interface IChooseSettingGoods {
    count: number,
    valume: 10 | 30 | 50 | 100,
}

export default function GoodsInfo(): JSX.Element {

    const goods = useAppSelector(filterGoods);

    const [settingGoods, setSettingsGoods] = useState<IChooseSettingGoods>({
        count: 0,
        valume: 10,
    });

    function increment() {
        setSettingsGoods((prevState) => {
            const newSetting = { ...prevState };
            newSetting.count += 1;
            return newSetting;
        });
    }

    function decrement() {
        setSettingsGoods((prevState) => {
            const newSetting = { ...prevState };
            if (newSetting.count > 1) newSetting.count += - 1;
            return newSetting;
        });
    }

    if (goods) {
        return (
            <section className={styles.goodsInfo}>
                <h1 className={`${styles.title} ${gStyles.title}`}>Каталог</h1>
                <div className={styles.kinds}>
                    <p>Главная<span>/</span></p>
                    <p>{goods.gender}<span>/</span></p>
                    <p>{goods.name}</p>
                </div>
                <div className={styles.goodsBody}>
                    <div className={styles.imgGoods}>
                        <img src={imgBack} alt="" />
                    </div>
                    <div className={styles.aboutGoods}>
                        <p className={`${styles.nameGoods} ${gStyles.titleSmall}`}>
                            {goods.name}
                        </p>
                        <Valume className={styles.valume} list={[...goods.volume]} />
                        <div>
                            <p className={`${styles.textCount} ${gStyles.text}`}>Кол-в</p>
                            <div className={styles.count}>
                                <div className={`${styles.btn} ${styles.decrement}`} onClick={decrement}></div>
                                <p className={styles.bodyNumberCount}><span>{settingGoods.count}</span></p>
                                <div className={`${styles.btn} ${styles.increment}`} onClick={increment}></div>
                            </div>
                        </div>
                        <div className={`${styles.bodyInfoPrice} ${styles.bodyFirst}`}>
                            <p className={`${styles.cost} ${gStyles.text}`}>Cтоимость:</p>
                            <p className={styles.price}>{goods.price}$</p>
                            <ButtonGoods />
                        </div>
                    </div>
                    <div className={`${styles.bodyInfoPrice} ${styles.changeBodyFirst}`}>
                        <div>
                            <p className={`${styles.cost} ${gStyles.text}`}>Cтоимость:</p>
                            <p className={styles.price}>{goods.price}$</p>
                        </div>
                        <ButtonGoods className={styles.btnBasket} />
                    </div>
                </div>
                <div className={styles.infoGoods}>
                    <Accordion text='Описание' defaultMode={false} selectClass={`${styles.accordion} goodsInfoSelect`} selectItem={[`
                 Этот аромат для мужчин и женщин. Композиция аромата
                 состоит из: апельсина, имбиря,бергамота, толуанского бальзама, ванили и мускуса. Уникальная композиция 
                 нот доставит удовольствие своему обладателю. А название аромата придаст ему уверенность и хорошее настроение`]} />
                    <Accordion text='Отзывы' selectClass={`${styles.accordion} ${styles.reviews}`} defaultMode={false} selectItem={[<Comment goods={goods} />]} />
                </div>

            </section>
        );
    } else {
        return <>The goods didn't found....</>;
    }
}