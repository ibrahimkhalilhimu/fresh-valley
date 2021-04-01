import React, { useState } from 'react';
import Header from '../Home/Navbar/Header';
import './LogIn.css'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from "react-icons/ai";
const caretRight = <AiFillCaretRight/>

const LogIn = () => {
    const [passwordShown, setPasswordShown] = useState(false);
const togglePasswordVisiblity = () => {
  setPasswordShown(passwordShown ? false : true);
};
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
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
               <button  className="googleBtn ">
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