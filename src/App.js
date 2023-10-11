import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav/Nav';
import InvestPage from './components/InvestPage';
import Signup from './loginSignup/Signup';
import Login from './loginSignup/Login';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
           <Nav/>
           <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/invest' element={<InvestPage/>}/>
           </Routes>
        </BrowserRouter>
        <section className="site-map">

        </section>
    </div>
  );
}

export default App;
