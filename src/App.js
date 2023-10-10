import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav/Nav';
import InvestPage from './components/InvestPage';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
           <Nav/>
           <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route path='/invest' element={<InvestPage/>}/>
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
