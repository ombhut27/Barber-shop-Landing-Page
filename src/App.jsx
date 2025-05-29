import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div>


      <Header/>

      <Routes>
        <Route path='/' element={<Home />} />

      </Routes>

      <Footer/>
    </div>
  )
}

export default App
