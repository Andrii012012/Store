import './styles/style.module.scss';
import './styles/style.scss';
import Layout from './layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/main';
import Catalog from './pages/Catalog/Catalog';
import Account from './pages/Account/Account';
import {
  ROUTE_ABOUT,
  ROUTE_ACCOUNT,
  ROUTE_BONUS, ROUTE_CATALOG_ITEM,
  ROUTE_DOCUMATION,
  ROUTE_MAIN
} from './route/route';
import Bonus from './pages/Bonus/Bonus';
import About from './pages/About/About';
import Documention from './pages/Documention/Documention';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={ROUTE_MAIN} element={<Main />} />
        <Route path={ROUTE_CATALOG_ITEM} element={<Catalog />} />
        <Route path={ROUTE_ACCOUNT} element={<Account />} />
        <Route path={ROUTE_BONUS} element={<Bonus />} />
        <Route path={ROUTE_ABOUT} element={<About />} />
        <Route path={ROUTE_DOCUMATION} element={<Documention />} />
      </Routes>
    </Layout>
  );
}

export default App;
