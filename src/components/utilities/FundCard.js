import { Link } from "react-router-dom";
import './FundCard.css';
const FuncCard = () =>{
    return(
        <>
            <Link style={{textDecoration:"none",}} to='/invest'>
            <div className="startup-card-container">
                      <div className="card-image">
                        <img className="img-card" src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80" style={{width:"100%",height:"160px",objectFit:"cover",borderRadius:"10px"}}/>
                      </div>
                      <div className="startup-card-details">
                          <h2 className="card-header">Ai Drone</h2>
                          <p className="card-business-line">Technology of future</p>
                          <div className="card-fund-info">
                              <div className="info">
                                <h2 className="card-header">$500k</h2>
                                <p className="card-text">Raised</p>
                              </div>
                              <div className="info">
                                <h2 className="card-header">50</h2>
                                <p className="card-text">Investors</p>
                              </div>
                              <div className="info">
                                <h2 className="card-header">50</h2>
                                <p className="card-text">Investors</p>
                              </div>
                          </div>
                          <div className="card-bar"></div>
                          <p className="card-text"><span className="card-text-span">$50M</span> valuation <span className="card-btn">Details ---|</span></p>
                      </div>
            </div>
            </Link>
        </>
    );
}

export default FuncCard;