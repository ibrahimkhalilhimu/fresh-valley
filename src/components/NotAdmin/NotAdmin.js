import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Home/Navbar/Header';
const NotAdmin = () => {

    let x = " 🙁 "
    return (
        <div>
            <Header/>
            <div className="container mt-5 pt-5">
                <div className="row text-center">
                    <div className="col-md-12">
                        <h1>Sorry You are not Admin {x}</h1>
                      <Link to="/">
                      
                      <button className="btn btn-danger">Back to Home</button>
                      </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotAdmin;