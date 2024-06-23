import {Category} from "./components/Category/Category";
import GiftBonus from "./components/GiftBonus/GiftBonus";
import InfoFeed from "./components/InfoFeed/InfoFeed";
import Offer from "./components/Offer/Offer";
import styles from './style.module.scss';

export default function Main(): JSX.Element {
   return (
      <main className={styles.wrapper}>
         <InfoFeed />
         <Offer />
         <GiftBonus />
         <Category/>
      </main>
   );
}