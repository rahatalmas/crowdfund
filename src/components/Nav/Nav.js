import {NavLink,Link} from 'react-router-dom';
import './Nav.css';

const Nav = () =>{
    return(
        <>
          <nav className='nav-container'>
             <h2>KickStart</h2>
             <div className='nav-item-container'>
             <NavLink className="nav-item" to="/">Home</NavLink>
             <NavLink className="nav-item" to="/invest">Invest</NavLink>
             <NavLink className="nav-item" to="/about">About</NavLink>
             <NavLink className="nav-item" to="/news">News</NavLink>
             </div>
             <Link className='pro-pic' to='/profile/almas'><img src='./assets/gojo.jpg' style={{height:"50px",width:"50px",borderRadius:"100px",objectFit:"cover"}}/></Link>
          </nav>
        </>
    );
}

export default Nav;