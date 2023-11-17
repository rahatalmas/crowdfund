import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav/Nav';
import InvestPage from './components/InvestPage';
import Signup from './loginSignup/Signup';
import Login from './loginSignup/Login';
import BusinessDetailsPage from './components/BusinessDetailsPage';
import ProfilePage from './components/UserProfile/ProfilePage';
import {AuthProvider} from './globalStates/AuthContext';
import UploadForm from './components/UploadForm';

function App() {
  return (
     <AuthProvider>
          <div className="App">
        <BrowserRouter>
           <Nav/>
           <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/invest' element={<InvestPage/>}/>
              <Route path='/upload' element={<UploadForm/>}/>
              <Route path='/user/:id' element={<ProfilePage/>}/>
              <Route path='/invests/:id' element={<BusinessDetailsPage/>}/>
           </Routes>
        </BrowserRouter>
    </div>
     </AuthProvider>
  );
}

export default App;
