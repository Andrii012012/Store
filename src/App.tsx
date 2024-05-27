import './styles/style.module.scss';
import Layout from './layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/main';

function App() {
  return (
    <Layout>
      <Routes>
         <Route path='/' element={<Main />} />
      </Routes>
    </Layout>
  );
}

export default App;
