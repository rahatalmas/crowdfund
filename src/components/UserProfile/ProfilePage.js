import './ProfilePage.css';
import FundCard2 from '../utilities/FundCard2';
import AuthContext from '../../globalStates/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import  axios  from 'axios';
const ProfilePage = () =>{
    const {setUser,setAuth} = useContext(AuthContext);
    const [user, setuser] = useState({});
    const [mycards,setMyCards] = useState([]);
    const {id } = useParams();
    const [editMode,setEditMode] = useState(false)
    //const {user} = useContext(AuthContext)

    useEffect(() => {
        console.log(id)
        const fetchuser = async () => {
          try {
            const response = await fetch(`http://localhost:5000/user/${id}`);
            const data = await response.json();
            console.log(data)
            setuser(data)
            setAuth(true)
            setUser(data)
          } catch (error) {
            console.error('Error fetching user:', error);
          }
        };
    
        fetchuser();
        //http://localhost:5000/mycards/1
        axios.get(`http://localhost:5000/mycards/${id}`)
        .then(cards=>{
          console.log(1)
          console.log(cards.data);
          setMyCards(cards.data);
        })
      },[id]);

    const [email,setEmail] = useState(user.email);
    const [username,setName] = useState(user.username);
    const [password,setPassword] = useState(user.password);
    const [education,setEducation] = useState(user.education);
    const [occupation,setOccupation] = useState(user.occupation);
    const [number,setPhone] = useState(user.number);
    const [cardnumber,setCardnumber] = useState(user.cardnumber);
    const [bio,setBio] = useState(user.bio);

    const EditHandle = (e)=>{
      console.log(user)
      e.preventDefault();
      setEditMode(!editMode);
      console.log({email,username,bio})
    }
    return(
        <>
           <div className='profile-page-container'>
             <div className='profile-info-section'> 
                 <div className='profile-image-container'>
                      <img className='profile-page-image' src='https://w0.peakpx.com/wallpaper/254/297/HD-wallpaper-naruto-eyes-naruto-uzumaki-sage-mode-naruto-uzumaki-sage-mode-anime.jpg'/>
                 </div>
                 <div className='profile-info-container'>
                      {
                        editMode?<input className='p-e-i' type='text' placeholder='name' value={username} onChange={(e)=>{setName(e.target.value)}} />:<h3 className='p-i-t'>{user.username}</h3>
                      }
                      {
                        editMode?<input className='p-e-i' type='text' placeholder='education' value={education} onChange={(e)=>{setEducation(e.target.value)}} />:<h3 className='p-i-t'>{user.education}</h3>
                      }
                      {
                        editMode?<input className='p-e-i' type='text' placeholder='occupation' value={occupation} onChange={(e)=>{setOccupation(e.target.value)}} />:<h3 className='p-i-t'>{user.occupation}</h3>
                      }
                      {
                        editMode?<textarea className='p-e-i' type='text' placeholder='bio' value={bio} onChange={(e)=>{setBio(e.target.value)}} />:<h3 className='p-i-t'>{user.bio}</h3>
                      }
                      {
                        editMode?<input className='p-e-i' type='text' placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />:<h3 className='p-i-t'>{user.email}</h3>
                      }
                      {
                        editMode?<input className='p-e-i' type='text' placeholder='phone' value={number} onChange={(e)=>{setPhone(e.target.value)}} />:<h3 className='p-i-t'>{user.phone}</h3>
                      }
                      {
                        editMode?<input className='p-e-i' type='text' placeholder='cardnumber' value={cardnumber} onChange={(e)=>{setCardnumber(e.target.value)}} />:<h3 className='p-i-t'>{user.cardnumber}</h3>
                      }
                      <div className='profile-page-buttons'> 
                         <button className='p-btn' to='/login'>logout</button>
                          {
                           editMode
                           ? 
                           <button className='p-btn' onClick={EditHandle}>Update</button>
                           :
                           <button className='p-btn' onClick={()=>setEditMode(!editMode)}>Edit</button>
                         }
                        
                         <Link className='p-btn' to='/upload'>Upload New</Link>
                      </div>
                 </div>
             </div>
             <div>
                <h2 style={{marginLeft:"10px"}}>My Cards</h2>
                <div className='my-cards'>
                    {
                      mycards.map(card=>(
                        <FundCard2 
                        id={card.id}
                        title={card.title}
                        headline={card.headline}
                        reason={card.reason}
                        pitch={card.pitch}
                        amount={card.amount}
                        valuation={card.valuation}
                        mininvest={card.mininvest}
                        photo={card.photo}
                        />
                      ))
                    }
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