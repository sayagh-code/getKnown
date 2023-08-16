import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ListCards from './pages/ListCards';
import requests from './services/Requests';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ListCards' element={<ListCards fetchURL={requests.cardsDetails}/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
