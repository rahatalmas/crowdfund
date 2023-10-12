import './InvestPage.css';

const InvestPage = () =>{
    return(
        <>
           <div className="invest-page-container">
              <div className="i-p-r">
                 <div className="i-p-c1">

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
                 </div>
              </div>
           </div>
        </>
    );
}

export default InvestPage;