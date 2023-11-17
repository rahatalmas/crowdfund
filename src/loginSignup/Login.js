import './Login.css';
import { Link } from 'react-router-dom';
import { useState,useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../globalStates/AuthContext';
const Login = () =>{
    const {setUser,setAuth} = useContext(AuthContext);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();

    const loginFormSubmit = (e) =>{
        e.preventDefault();
        console.log({email,password});
        let user = {email,password};
        fetch('http://localhost:5000/login',{
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
          <div className="login-page-container">
              <section className="login-col1">
                 <img src='./assets/login.png'
                      className='login-page-img'
                 />
                 <div className="login-page-texts">
                    <h2>Welcome Back</h2>
                    <p style={{margin:"0",paddingBottom:"55px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                 </div>
              </section>
              <section className="login-col2">
                 <div className="login-page-form">
                     <h1 style={{color:"blue",textAlign:"center",marginBottom:"20px"}}>login</h1>
                     <form className="login-form" onSubmit={loginFormSubmit}>
                         <label htmlFor="email">Email<span>*</span></label>
                         <input id="email" className="input" placeholder="enter your email"
                            required type="email" autoComplete='true'
                            onChange={(e)=>{setEmail(e.target.value)}} 
                         />
                        <label htmlFor="password">Password<span>*</span></label>
                         <input id="password" className="input" placeholder="********"
                            required type="password" autoComplete='true'
                            onChange={(e)=>{setPassword(e.target.value)}} 
                         />
                        <input type='submit' value="Submit" className='login-btn'/>
                        <h4>Don't Have Account?<Link to='/signup' style={{color:"blue",marginLeft:"5px"}}>signup</Link></h4>
                     </form>
                 </div>
              </section>
          </div>
        </>
    );
}

export default Login;