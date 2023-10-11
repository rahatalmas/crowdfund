import './BusinessDetailsPage.css';

const BusinessDetailsPage = () =>{
    return(
        <>
           <div className="details-page-container">
               
               
               <div className='business-image-container'>
                  <img className='business-img' src='https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80' style={{width:"100%",height:"36vh",objectFit:"cover"}}/>
                  <div className='image-container-text'>
                      
                  </div>
               </div>



               <div className='details-row'>


                   <div className='details-col-1'>
                      <div className='business-menu'>
                          <span className='b-m-item'>Overview</span >
                          <span className='b-m-item'>About</span>
                          <span className='b-m-item'>Teams</span>
                          <span className='b-m-item'>Email</span>
                      </div>
                      <div className='business-descriptions'>
                      <div className='pitch-header-c'> <div className='pitch-start-point'></div><h2 className='pitch-header'>Reasons To Invest</h2><div className='picth-header-finish'></div></div>
                          <ul className='ui-container'>
                             <li className='b-li'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                             <div className='b-dash-border'></div>
                             <li className='b-li'>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</li>
                             <div className='b-dash-border'></div>
                             <li className='b-li'>remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
                             <div className='b-dash-border'></div>
                          </ul>
                         <div className='pitch-header-c'> <div className='pitch-start-point'></div><h2 className='pitch-header'>The Pitch</h2><div className='picth-header-finish'></div></div>
                          <p className='the-pitch'>
                             Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                          </p>
                      </div>
                   </div>



                   <div className='details-col-2'>
                        <div className='investment-info-card'>
                            <h4 className='i-c-h4'>Raised</h4 >
                            <h2 className='i-c-h2'>$50,00,000</h2>
                            <h4 className='i-c-h4'>Valuation</h4>
                            <h2 className='i-c-h2'>$100,00,00,000</h2>
                            <h4 className='i-c-h4'>Investors</h4>
                            <h2 className='i-c-h2'>50</h2>
                            <h4 className='i-c-h4'>Minimum Investment</h4>
                            <h2 className='i-c-h2'>$10,000</h2>
                            <button className='i-c-btn'>Invest Now</button>
                        </div>
                   </div>


               </div>
           </div>
        </>
    );
}

export default BusinessDetailsPage;