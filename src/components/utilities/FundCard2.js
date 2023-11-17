import { Link } from "react-router-dom";
import './FundCard2.css';
const FuncCard2 = ({id,title,headline,reason,pitch,amount,valuation,mininvest}) =>{
    return(
        <>
            <Link style={{textDecoration:"none",}} to={`/invests/${id}`}>
                <div className="fundCard2-container">
                    <div className="f2-image-container">
                        <img src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80" className="f2-img"/>
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