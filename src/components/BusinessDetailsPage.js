import { useEffect, useState } from 'react';
import './BusinessDetailsPage.css';
import { useParams } from 'react-router-dom';
const BusinessDetailsPage = () =>{

    const [card, setCard] = useState({});
    const {   id } = useParams();
    const [edit,setEdit] = useState(false);
    useEffect(() => {
        console.log(id)
        console.log(card)
        const fetchProduct = async () => {
          try {
            const response = await fetch(`http://localhost:5000/invests/${id}`);
            const data = await response.json();
            console.log(data)
            setCard(data)
          } catch (error) {
            console.error('Error fetching product:', error);
          }
        };
    
        fetchProduct();
      }, [  id]);
    return(
        <>
           <div className="details-page-container">
               
               <div className='business-image-container'>
                  <img className='business-img' src={`http://localhost:5000/static/${card.photo}`} style={{width:"100%",height:"36vh",objectFit:"cover"}}/>
                  <div className='image-container-text'>
                      
                  </div>
               </div>



               <div className='details-row'>


                   <div className='details-col-1'>
                      <div className='business-descriptions'>
                      {
                        <h1>{card.title}</h1>
                      }
                      <div className='pitch-header-c'> <div className='pitch-start-point'></div><h2 className='pitch-header'>Reasons To Invest</h2><div className='picth-header-finish'></div></div>
                          <div className='ui-container'>
                          <p className='the-pitch'>
                            {card.reason}
                          </p>
                          </div>
                         <div className='pitch-header-c'> <div className='pitch-start-point'></div><h2 className='pitch-header'>The Pitch</h2><div className='picth-header-finish'></div></div>
                          <p className='the-pitch'>
                             {card.pitch}
                          </p>
                      </div>
                   </div>



                   <div className='details-col-2'>
                        <div className='investment-info-card'>
                            <h4 className='i-c-h4'>Valuation</h4>
                            <h2 className='i-c-h2'>${card.valuation}</h2>
                            <h4 className='i-c-h4'>Minimum Investment</h4>
                            <h2 className='i-c-h2'>${card.minInvest}</h2>

                            {
                              edit?< input/>:<div></div>
                            }
                            <button onClick={()=>{setEdit(!edit)}} className='i-c-btn'>Invest Now</button>
                        </div>
                   </div>


               </div>
           </div>
        </>
    );
}

export default BusinessDetailsPage;