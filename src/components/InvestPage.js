import './InvestPage.css';
import FundCard2 from './utilities/FundCard2';
import { Link } from 'react-router-dom';
const InvestPage = () =>{
    return(
        <>
           <div className="invest-page-container">
              <div className="i-p-r">
                 <div className="i-p-c1">
                    <div className='check-box-container'>
                      <h2>Trends</h2>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>New Buniess</label>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>New Buniess</label>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>New Buniess</label>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>New Buniess</label>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>New Buniess</label>
                    </div>
                    
                    <div className='check-box-container'>
                      <h2>Trends</h2>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>New Buniess</label>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>New Buniess</label>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>New Buniess</label>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>New Buniess</label>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>New Buniess</label>
                    </div>
                    
                    <div className='check-box-container'>
                      <h2>Trends</h2>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>New Buniess</label>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>New Buniess</label>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>New Buniess</label>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>New Buniess</label>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>New Buniess</label>
                    </div>

                    <div className='check-box-container'>
                      <h2>Trends</h2>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>New Buniess</label>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>New Buniess</label>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>New Buniess</label>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>New Buniess</label>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>New Buniess</label>
                    </div>
         
                 </div>
                 <div className="i-p-c2">
                    <div className="i-p-filter-container">
                       <div className="f-c">
                          <select className="filter">
                              <option>*</option>
                              <option>*</option>
                              <option>*</option>
                              <option>*</option>
                              <option>*</option>
                              <option>*</option>
                          </select>
                       </div>
                       <div className="s-c">
                          <input className="filter" type="search" placeholder="search..."/>
                       </div>
                    </div>
                    <div className="invest-page-business-container">
                          <FundCard2/>
                          <FundCard2/>
                          <FundCard2/>
                          <FundCard2/>
                          <FundCard2/>
                    </div>
                    <div class="pagination">
                        <a >&laquo;</a>
                        <a to='page/1' >1</a>
                        <a  class="active">2</a>
                        <a >3</a>
                        <a >4</a>
                        <a >5</a>
                        <a >6</a>
                        <a >&raquo;</a>
                    </div>   
                 </div>
              </div>
           </div>
        </>
    );
}

export default InvestPage;