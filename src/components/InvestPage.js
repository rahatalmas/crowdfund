import './InvestPage.css';
import FundCard2 from './utilities/FundCard2';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const InvestPage = () =>{
   const [cards,setCards] = useState([]);
   useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/invests');
          const responseData = await response.json();
          setCards(responseData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);
    return(
        <>
           <div className="invest-page-container">
              <div className="i-p-r">
                 <div className="i-p-c1">
                    <div className='check-box-container'>
                      <h2>Filter</h2>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>New Buniess</label>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>Most Invest</label>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>Trending</label>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>Techno</label>
                      <label htmlFor="new-business"><input id="new-business" type="checkbox" value="newBusiness"/>LowRange</label>
                    </div>
                 </div>
                 <div className="i-p-c2">
                       <div className="s-c">
                          <input className="search" type="search" placeholder="search..."/>
                          <button className='search' style={{width:"10%"}}>Search</button>
                       </div>
                    <div className="invest-page-business-container">

                          {
                           cards.map(card=>(
                             
                           <FundCard2 
                              id={card.id}
                              title={card.title}
                              headline={card.headline}
                              reason={card.reason}
                              pitch={card.pitch}
                              amount={card.amount}
                              valuation={card.valuation}
                              mininvest={card.mininvest}

                              />
                           ))
                          }

    
                    </div>
                    
                 </div>
              </div>
           </div>
        </>
    );
}

export default InvestPage;