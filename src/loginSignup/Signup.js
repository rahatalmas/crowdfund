import './Signup.css';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

const Signup = () =>{
    
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [cpassword,setCpassword] = useState('');

    const signUpFormSubmit = (e) =>{
        e.preventDefault();
        console.log({email,name,password});
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
                        <label htmlFor="password">Password<span>*</span></label>
                         <input id="password" className="input" placeholder="********"
                            required type="password" autoComplete='true'
                            onChange={(e)=>{setPassword(e.target.value)}} 
                         />
                        <label htmlFor="Cpassword">Confirm Password<span>*</span></label>
                        <input id="Cpassword" className="input" placeholder="********"
                            required type="password" autoComplete='true'
                            onChange={(e)=>{setCpassword(e.target.value)}}  
                        />
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