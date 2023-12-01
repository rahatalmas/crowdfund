
import { Link } from 'react-router-dom';
import { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../globalStates/AuthContext';
import axios from 'axios';

const UploadForm = () =>{
    const {user,setUser,setAuth} = useContext(AuthContext);
    const [title,settitle] = useState('');
    const [headline,setheadline] = useState('');
    const [reason,setreason] = useState('');
    const [pitch,setpitch] = useState('');
    const [valuation,setvaluation] = useState('');
    const [raised,setraised] = useState('');
    const [minInvest,setmininvest] = useState('');
    const [userId,setUserId] = useState(user.id);
    const [photo,setPhoto] = useState('');
    const [file,setFile] = useState();
    const navigate = useNavigate();

    const FileController = (e)=>{
       setFile(e.target.files[0]);
    }

    const signUpFormSubmit = (e) =>{
        e.preventDefault();
        let card = {title,headline,reason,pitch,valuation,raised,minInvest,userId,photo:`${file.name}`};
        //console.log(userId)
        //console.log(card);
        //console.log(file);
        console.log(file.name);
        const formData = new FormData();

        formData.append('file', file);
  
        fetch(
           'http://localhost:5000/fileupload',
           {
              method: 'POST',
              body: formData,
           }
        )
           .then((response) => response.json())
           .then((result) => {
              console.log('Success:', result);
           })
           .catch((error) => {
              console.error('Error:', error);
           });

        axios.post('http://localhost:5000/postcard',card)
        .then(res=>{
         console.log(res)
         if(res.status == 200){
            navigate('/invest')
         }
        })
        .catch(err=>{
         console.log(err)
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
                    <h2>Upload Your Business</h2>
                    <p style={{margin:"0",paddingBottom:"55px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                 </div>
              </section>
              <section className="signup-col2">
                 <div className="signup-page-form">
                     <h1 style={{color:"blue",textAlign:"center",marginBottom:"20px"}}>Raise Money</h1>
                     <form className="signup-form" onSubmit={signUpFormSubmit}>

                         <label htmlFor="title">title<span>*</span></label>
                         <input id="title" className="input" placeholder="enter your title"
                            required type="title" autoComplete='true'
                            onChange={(e)=>{settitle(e.target.value)}} 
                         />

                        <label htmlFor="headline">headline<span>*</span></label>
                        <input id="headline" className="input" placeholder="headline"
                            required type="text" autoComplete='true'
                            onChange={(e)=>{setheadline(e.target.value)}}
                         />

                         <label htmlFor="reason">reason<span>*</span></label>
                         <textarea id="reason" className="input" placeholder="why to invest"
                            required type="reason" autoComplete='true'
                            onChange={(e)=>{setreason(e.target.value)}} 
                         />
                         <label htmlFor="pitch">pitch<span>*</span></label>
                         <textarea id="pitch" className="input" placeholder="ceo speech"
                            required type="pitch" autoComplete='true'
                            onChange={(e)=>{setpitch(e.target.value)}} 
                         />

                        <label htmlFor="valuation">valuation<span>*</span></label>
                         <input id="valuation" className="input" placeholder="5000"
                            required type="text" autoComplete='true'
                            onChange={(e)=>{setvaluation(e.target.value)}} 
                         />
                        <label htmlFor="raised">Raised<span>*</span></label>
                         <input id="raised" className="input" placeholder="5000"
                            required type="text" autoComplete='true'
                            onChange={(e)=>{setraised(e.target.value)}} 
                         />
                        <label htmlFor="mininvest">mininvest<span>*</span></label>
                         <input id="mininvest" className="input" placeholder="50"
                            required type="text" autoComplete='true'
                            onChange={(e)=>{setmininvest(e.target.value)}} 
                         />
                        <label htmlFor="photo">photo<span>*</span></label>
                         <input id="photo" className="input"
                            required type="file"
                            name='file'
                            onChange={FileController} 
                         />
                        <input type='submit' value="Submit" className='signup-btn'/>
                     </form>
                 </div>
              </section>
          </div>
        </>
    );
}

export default UploadForm;