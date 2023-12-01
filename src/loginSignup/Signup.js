import './Signup.css';
import { Link } from 'react-router-dom';
import { useState,useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../globalStates/AuthContext';

const Signup = () =>{
   const {setUser,setAuth} = useContext(AuthContext);
    const [email,setEmail] = useState('');
    const [username,setName] = useState('');
    const [password,setPassword] = useState('');
    const [education,setEducation] = useState('');
    const [occupation,setOccupation] = useState('');
    const [number,setPhone] = useState('');
    const [cardnumber,setCardnumber] = useState('');
    const [bio,setBio] = useState('');
    
    const navigate = useNavigate();

    const signUpFormSubmit = (e) =>{
        e.preventDefault();
        let user = { email,username,education,occupation,number,cardnumber,bio,password };
        fetch('http://localhost:5000/signup',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(response=>response.json())
        .then(message=>{
            console.log(message)
            if(!message.message){
                setUser(message)
                setAuth(true)
                navigate('/')
            }else{
                alert(message.message)
            }
        })
    }

    return(
        <>
          <div className="signup-page-container">
              <section className="signup-col1">
                 <img src='./assets/signup.png'
                      className='signup-page-img'
                 />
                 <div className="signup-page-texts">
                    <h2>Register and Invest</h2>
                    <p style={{margin:"0",paddingBottom:"55px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                 </div>
              </section>
              <section className="signup-col2">
                 <div className="signup-page-form">
                     <h1 style={{color:"blue",textAlign:"center",marginBottom:"20px"}}>Signup</h1>
                     <form className="signup-form" onSubmit={signUpFormSubmit}>

                         <label htmlFor="email">Email<span>*</span></label>
                         <input id="email" className="input" placeholder="enter your email"
                            required type="email" autoComplete='true'
                            onChange={(e)=>{setEmail(e.target.value)}} 
                         />

                        <label htmlFor="name">Full Name<span>*</span></label>
                        <input id="name" className="input" placeholder="enter your name"
                            required type="text" autoComplete='true'
                            onChange={(e)=>{setName(e.target.value)}}
                         />

                        <label htmlFor="education">Education<span>*</span></label>
                        <input id="education" className="input" placeholder="your institute name"
                            required type="text" autoComplete='true'
                            onChange={(e)=>{setEducation(e.target.value)}}  
                        />

                         <label htmlFor="occupation">occupation<span>*</span></label>
                         <input id="occupation" className="input" placeholder="what you do"
                            required type="occupation" autoComplete='true'
                            onChange={(e)=>{setOccupation(e.target.value)}} 
                         />

                         <label htmlFor="number">number<span>*</span></label>
                         <input id="number" className="input" placeholder="01*********"
                            required type="number" autoComplete='true'
                            onChange={(e)=>{setPhone(e.target.value)}} 
                         />

                         <label htmlFor="cardNumber">cardNumber<span>*</span></label>
                         <input id="cardNumber" className="input" placeholder="123-456-789"
                            required type="text" autoComplete='true'
                            onChange={(e)=>{setCardnumber(e.target.value)}} 
                         />
                       
                        <label htmlFor="bio">bio<span>*</span></label>
                         <input id="bio" className="input" placeholder="about your self"
                            required type="text" autoComplete='true'
                            onChange={(e)=>{setBio(e.target.value)}} 
                         />

                         <label htmlFor="password">Password<span>*</span></label>
                         <input id="password" className="input" placeholder="********"
                            required type="password" autoComplete='true'
                            onChange={(e)=>{setPassword(e.target.value)}} 
                         />
                                                 <label htmlFor="photo">photo<span>*</span></label>

                        <input type='submit' value="Submit" className='signup-btn'/>
                        <h4>Already Have Account?<Link to='/login' style={{color:"blue",marginLeft:"5px"}}>Login</Link></h4>
                     </form>
                 </div>
              </section>
          </div>
        </>
    );
}

export default Signup;