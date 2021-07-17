import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
import { BsFillGridFill,BsFillPersonPlusFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
const SideBar = () => {
    return (
        <div className="sidebar">
           <div className="container">
              <Link to="/">
              <img className="logo" src="https://i.ibb.co/PDScdfP/Group-33072.png" alt=""/>
              </Link>
           <Link to="/manageProduct"> 
           <div className="text-white d-flex manageProduct">
                <BsFillGridFill size="30px" className="text-white"/>
                <h6 className="pl-2"> Manage Product</h6>
            </div>
           </Link>
           <Link to="/orderList"> 
           <div className="text-white d-flex manageProduct">
                <BsFillGridFill size="30px" className="text-white"/>
                <h6 className="pl-2"> Order list</h6>
            </div>
           </Link>
         <Link to="/addProduct">
         <div className="text-white d-flex manageProduct">
                <AiOutlinePlus size="30px" className="text-white"/>
                <h6 className="pl-2">Add Product</h6>
            </div>
         </Link>
         <Link to="/makeAdmin">
         <div className="text-white d-flex manageProduct">
                <BsFillPersonPlusFill size="30px" className="text-white"/>
                <h6 className="pl-2">Make Admin</h6>
            </div>
         </Link>
           </div>
        </div>
    );
};

export default SideBar;