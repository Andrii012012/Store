import './styles/style.module.scss';
import './styles/style.scss';
import Layout from './layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/main';
import Catalog from './pages/Catalog/Catalog';
import Account from './pages/Account/Account';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='catalog/:id' element={<Catalog />} />
        <Route path='account' element={<Account />} />
      </Routes>
    </Layout>
  );
}

export default App;
