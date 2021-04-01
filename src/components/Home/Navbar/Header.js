import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light container">
  <Link className="navbar-brand" to="/">
      <img className="img-fluid" src="https://i.ibb.co/PDScdfP/Group-33072.png" alt=""/>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" to="#">Orders</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" to="#">Admin</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" to="#">Deals</a>
      </li>
      <li className="nav-item">
        <Link style={{color:'white'}} className="nav-link logBtn" to="/login">Login</Link>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default Header;