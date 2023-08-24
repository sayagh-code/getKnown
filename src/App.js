import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ListCards from './pages/ListCards';
import requests from './services/Requests';
import CardDetails from './pages/CardDetails';
import CardsByType from './pages/CardsByType';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ListCards' element={<ListCards fetchURL={requests.cardsDetails}/>}/>
        <Route path='/CardDetails/:code' element={<CardDetails fetchURL={requests.cardDetails}/>}/>
        <Route path='/CardsByType/:type' element={<CardsByType fetchURL={requests.cardsDetails}/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
