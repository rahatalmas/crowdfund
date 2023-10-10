import {NavLink} from 'react-router-dom';
import './Nav.css';

const Nav = () =>{
    return(
        <>
          <nav className='nav-container'>
             <h2>Sirius</h2>
             <div className='nav-item-container'>
             <NavLink className="nav-item" to="/">Home</NavLink>
             <NavLink className="nav-item" to="/invest">Invest</NavLink>
             <NavLink className="nav-item" to="/about">About</NavLink>
             <NavLink className="nav-item" to="/news">News</NavLink>
             </div>
          </nav>
        </>
    );
}

export default Nav;