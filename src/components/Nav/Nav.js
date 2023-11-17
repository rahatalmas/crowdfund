import {NavLink,Link} from 'react-router-dom';
import './Nav.css';
import AuthContext from '../../globalStates/AuthContext';
import { useContext } from 'react';

const Nav = () =>{
  const {user,auth} = useContext(AuthContext);
    return(
        <>
          <nav className='nav-container'>
             <h2>KickStart</h2>
             <div className='nav-item-container'>
             <NavLink className="nav-item" to="/">Home</NavLink>
             <NavLink className="nav-item" to="/invest">Invests</NavLink>
             </div>
             {
              auth?<Link className='pro-pic' to={`user/${user.id}`}><img src='https://w0.peakpx.com/wallpaper/254/297/HD-wallpaper-naruto-eyes-naruto-uzumaki-sage-mode-naruto-uzumaki-sage-mode-anime.jpg' style={{height:"50px",width:"50px",borderRadius:"100px",objectFit:"cover"}}/></Link>:<div></div>
             }
          </nav>
        </>
    );
}

export default Nav;