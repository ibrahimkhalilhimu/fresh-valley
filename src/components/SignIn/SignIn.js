import React, { useState } from 'react';
import Header from '../Home/Navbar/Header';
import './SignIn.css'
import { useForm } from "react-hook-form";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
const caretRight = <AiFillCaretRight/>

const SignIn = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="SignInPage">
            <Header/>
            <div className="container mt-5 pt-5">
                <div className="signInBox ">
               <div className="signInText">
               <h4>Create an account</h4>
       <form className="pt-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
    <input type="text" name="name" className="form-control input"ref={register({ required: true })} placeholder="Name"/>
    {errors.name && <span className="error">Name is required</span>}
  </div>
       <div className="form-group">
    <input type="email" name="email" className="form-control input mt-4" placeholder="Username or Email" ref={register({ required: true })} />
    {errors.email && <span className="error">Email is required</span>}
  </div>
  <div className="form-group pass-wrapper">
    <input type={passwordShown ? "text" : "password"} name="password" className="form-control input mt-4"placeholder="Password" ref={register({ required: true })} />
    <i onClick={togglePasswordVisiblity}>{caretRight}</i>
    {errors.password && <span className="error">Password is required</span>}
  
  </div>
  <div className="form-group pass-wrapper">
    <input type={passwordShown ? "text" : "password"} name="confirm_password" className="form-control input mt-4"placeholder="Confirm Password"  ref={register({validate: (value) => value=== watch('password') })}/>
    {errors.confirm_password && <span className="error">Passwords don't match.</span>}
    <i onClick={togglePasswordVisiblity}>{caretRight}</i>
  </div>
<div className="form-group">
<button style={{backgroundColor:"#71BA58"}} className="btn btn-block text-white mt-4" type="submit">Crate an account</button>
</div>
  <h6 className="text-center pt-2">Already have an account?<Link style={{color:"#71BA58"}} to="/login" >Login</Link></h6>
                </form>
               </div>
                </div>
                
            </div>
        </div>
    );
};

export default SignIn;