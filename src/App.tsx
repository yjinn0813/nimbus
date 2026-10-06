import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import './global.css';

export default function App() {
  return (
    <div id='container' className='flex flex-col min-h-screen'>
      <Header />
      <div id='wrap' className='grow flex flex-col'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/detail/:city' element={<Detail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
