import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Header.css'
const Header = () => {
  const [loggedInUser,setLoggedInUser, isAdmin,setIsAdmin] = useContext(UserContext)

  useEffect(()=>{
        
    fetch('https://pure-hollows-18299.herokuapp.com/isAdmin',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({email:loggedInUser.email})
    })
    .then(res => res.json())
    .then(data=>{setIsAdmin(data)})
},[])
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light container">
  <Link className="navbar-brand" to="/">
     <h4>StoreFront</h4>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/orders">Orders</Link>
      </li>
      <li className="nav-item">
       {isAdmin? <Link className="nav-link text-dark" to="/addProduct">Admin</Link>: 
       
       <Link className="nav-link text-dark" to="/login">Admin</Link>
       
       }
      </li>
      <li className="nav-item">
        {loggedInUser.email?<a className="nav-link text-dark" to="#">{loggedInUser.displayName}</a>:<a className="nav-link text-dark" to="#">Deals</a>}
      </li>
      <li className="nav-item">
      {loggedInUser.email?  <Link onClick={()=>setLoggedInUser({})} style={{color:'white'}} className="nav-link logBtn" to="">LogOut</Link>  :<Link style={{color:'white'}} className="nav-link logBtn" to="/login">Login</Link>
      }
      </li>
     {loggedInUser.email &&
        <li className="nav-item">
        <a className="nav-link text-dark" to="#">
          <img className="hideImg rounded-circle" src={loggedInUser.photoURL} alt=""/>
        </a>
      </li>
     }
    </ul>
  </div>
</nav>
        </div>
    );
};

export default Header;