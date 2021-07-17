import React, { useContext, useState } from 'react';
import Header from '../Home/Navbar/Header';
import './LogIn.css'
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AiFillCaretRight } from "react-icons/ai";
import { UserContext } from '../../App';
import { googleBtn, handleSignOut, initializeLoginInFrameWorker,signInWithEmailAndPassword } from '../Firebase/LoggedInManager';

const caretRight = <AiFillCaretRight/>
const LogIn = () => {

    const [passwordShown, setPasswordShown] = useState(false);
const togglePasswordVisiblity = () => {
  setPasswordShown(passwordShown ? false : true);
};

const [loggedInUser,setLoggedInUser] = useContext(UserContext)
let history = useHistory();
let location = useLocation();
let { from } = location.state || { from: { pathname: "/" } };

initializeLoginInFrameWorker()

const googleSignIn =()=> {
  googleBtn().then((res)=> {
    setLoggedInUser(res)
    history.replace(from)
  })
}

    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    signInWithEmailAndPassword(data.email,data.password)
    .then(res=>{
     setLoggedInUser(res)
     history.replace(from);
    })
  };


  
  const handleResponse =(res,redirect)=>{
    setLoggedInUser(res)
  if(redirect){
     history.replace(from);
  }
  
  }
    return (
        <div className="logInPage">
            <Header/>
            <div className="container mt-5 pt-5">
            <div className="logInBox">
              <div className="logInText">
              <h4>Login</h4>
                <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
    <input type="email" name="email" className="form-control input"placeholder="Username or Email" ref={register({ required: true })} />
    {errors.email && <span className="error text-danger">Email is required</span>}
    <br/>
  </div>
  <div className="form-group pass-wrapper">
    <input type={passwordShown ? "text" : "password"} name="password" className="form-control input"placeholder="Password" ref={register({ required: true })} />
    {errors.password && <span className="error text-danger">Password is required</span>}
    <i onClick={togglePasswordVisiblity}>{caretRight}</i>
  </div>
  <div className="d-flex justify-content-between ">
     <div>
     <input type="checkbox" id="RememberPassword" name="RememberPassword" value="RememberPassword"/>
      <label style={{paddingLeft:"5px",fontWeight:"600"}} htmlFor="RememberPassword">Remember Me</label>
     </div>
    <h6>Forgot Password</h6>
  </div>
  <button style={{backgroundColor:"#71BA58"}} className="btn btn-block text-white mt-5" type='submit'>Login</button>
  <h6 className="text-center pt-2">Don't have an account?<Link style={{color:"#71BA58"}} to="/signIn" >Create an account</Link></h6>
                </form>
              </div>
            </div>
            <div className="text-center pt-3">
               <button onClick={googleSignIn} className="googleBtn ">
                   <span style={{marginRight:"auto"}}>
                   <img src="https://i.ibb.co/R0cy8Yn/Group-571.png" alt=""/>
                   </span>
                    <span>Continue with Google</span> </button>
               </div>
            </div>
        </div>
    );
};

export default LogIn;