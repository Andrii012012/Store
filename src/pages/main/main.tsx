import Category from "./components/Category/Category";
import GiftBonus from "./components/GiftBonus/GiftBonus";
import InfoFeed from "./components/InfoFeed/InfoFeed";
import Offer from "./components/Offer/Offer";


export default function Main (): JSX.Element {
   return (
     <main>
        <InfoFeed/>
        <Offer />
        <GiftBonus/>
        <Category/>
     </main>    
   );
}