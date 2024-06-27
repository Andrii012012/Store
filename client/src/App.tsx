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
  ROUTE_BASKET,
  ROUTE_BONUS, ROUTE_CATALOG_ITEM,
  ROUTE_CHECKOUT,
  ROUTE_DOCUMATION,
  ROUTE_MAIN
} from './route/route';
import Bonus from './pages/Bonus/Bonus';
import About from './pages/About/About';
import Documention from './pages/Documention/Documention';
import Basket from './pages/Basket/Basket';
import Checkout from './pages/Checkout/Checkout';
import { useAppDispatch } from './hooks/useAppDispatch';
import { useEffect } from 'react';
import { signThunk } from './features/user/slice';
import { signURL } from './config/config';

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    const form = new FormData();
    form.append('token', String(localStorage.getItem('token')));
    form.append('login', '');
    form.append('password', '');
    dispatch(signThunk({ url: signURL, form }));
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path={ROUTE_MAIN} element={<Main />} />
        <Route path={ROUTE_CATALOG_ITEM} element={<Catalog />} />
        <Route path={ROUTE_ACCOUNT} element={<Account />} />
        <Route path={ROUTE_BONUS} element={<Bonus />} />
        <Route path={ROUTE_ABOUT} element={<About />} />
        <Route path={ROUTE_DOCUMATION} element={<Documention />} />
        <Route path={ROUTE_BASKET} element={<Basket />} />
        <Route path={ROUTE_CHECKOUT} element={<Checkout />} />
      </Routes>
    </Layout>
  );
}

export default App;
