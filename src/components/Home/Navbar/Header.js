import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light container">
  <a className="navbar-brand" href="#">
      <img className="img-fluid" src="https://i.ibb.co/PDScdfP/Group-33072.png" alt=""/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">Orders</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">Admin</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#">Deals</a>
      </li>
      <li className="nav-item">
        <a style={{color:'white'}} className="nav-link logBtn" href="#">Login</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default Header;