import { Link } from "react-router-dom";
import './FundCard2.css';
const FuncCard2 = ({id,title,headline,reason,pitch,amount,valuation,mininvest,photo}) =>{
    return(
        <>
            <Link style={{textDecoration:"none",}} to={`/invests/${id}`}>
                <div className="fundCard2-container">
                    <div className="f2-image-container">
                        <img src={`http://localhost:5000/static/${photo}`} className="f2-img"/>
                    </div>
                    <div className="f2-text-container">
                          <h2 className="f2-card-header">{title}</h2>
                          <p className="f2-card-business-line">{headline}</p>
                          <div className="f2-card-fund-info">
                              <div className="info">
                                <h2 className="card-header">On</h2>
                                <p className="card-text">Status</p>
                              </div>
                              <div className="info">
                                <h2 className="card-header">{valuation}</h2>
                                <p className="card-text">Valuation</p>
                              </div>
                              <div className="info">
                                <h2 className="card-header">{mininvest}</h2>
                                <p className="card-text">MinInvest</p>
                              </div>
                          </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default FuncCard2;