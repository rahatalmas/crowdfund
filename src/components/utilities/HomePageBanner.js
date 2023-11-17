import { Link } from 'react-router-dom';
import './HomePageBanner.css';
import { useContext, useState } from 'react';
import AuthContext from '../../globalStates/AuthContext';

const HomePageBanner = () =>{
    const {auth} = useContext(AuthContext);
    const images = ["bannerimg2.png","bannerimg1.png"]
    return(
        <>
          <div className="home-page-banner-container">
              <div className="banner-img-container">
                  <img className="banner-img" src={`./assets/${images[1]}`} />
              </div>
              <div className="home-banner-items">
                  <h3>Loream Ipsum</h3>
                  <h1>Crowd Fund</h1>
                  <p>Lorem ipsum dolor sit amet consecteru adpicing elit do ecution</p>
                  {
                    auth?
                    <button className="home-banner-button"><Link className='nav-item1' to='/invest'>Explore</Link></button>
                    :
                    <button className="home-banner-button"><Link className='nav-item1' to='/signup'>Signup</Link></button>
                  }
              </div>
              <div className="circle"></div>
          </div>
          
        </>
    );
}

export default HomePageBanner;