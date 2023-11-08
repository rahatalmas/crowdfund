import './ProfilePage.css';
import FundCard2 from '../utilities/FundCard2';

const ProfilePage = () =>{
    return(
        <>
           <div className='profile-page-container'>
             <div className='profile-info-section'> 
                 <div className='profile-image-container'>
                      <img className='profile-page-image' src='https://w0.peakpx.com/wallpaper/254/297/HD-wallpaper-naruto-eyes-naruto-uzumaki-sage-mode-naruto-uzumaki-sage-mode-anime.jpg'/>
                 </div>
                 <div className='profile-info-container'>
                      <h3 className='p-i-t'>Uzumaki Naruto</h3>
                      <h3 className='p-i-t'>Daffodil Internation Unversity</h3>
                      <h3 className='p-i-t'>Ninja</h3>
                      <h3 className='p-i-t'>i am a ninja. i love ramen</h3>
                      <h3 className='p-i-t'>uzumaki@ninja.com</h3>
                      <h3 className='p-i-t'>+123456</h3>
                      <h3 className='p-i-t'>123-455-789</h3>
                      <button>Edit</button>
                 </div>
             </div>
             <div>
                <h2 style={{marginLeft:"10px"}}>My Cards</h2>
                <div className='my-cards'>
                    <FundCard2/>
                    <FundCard2/>
                    <FundCard2/>
                    <FundCard2/>
                </div>
             </div>
             <div>
                <h2 style={{marginLeft:"10px"}}>My Invests</h2>
                <div className='my-invests'>
                    <FundCard2/>
                    <FundCard2/>
                    <FundCard2/>
                </div>
             </div>
           </div>
        </>
    );
}

export default ProfilePage;