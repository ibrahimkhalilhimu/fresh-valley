import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import './HomeDataCard.css'
const HomeDataCard = ({data}) => {

  const [loggedInUser,setLoggedInUser, isAdmin,setIsAdmin] = useContext(UserContext)
    const {img,_id,id,name,price,image} = data

    let history = useHistory();
    function handleClick(id) {
      history.push(`/checkOut/${id}`);
    }

    const handleAdminDelete =(e,_id)=>{
      console.log(e.target.parentNode);
      fetch(`https://pure-hollows-18299.herokuapp.com/deleteAdmin/${_id}`,{
          method:'DELETE',
      })
      .then(res => res.json())
      .then(result =>{
          console.log(result);
          alert('delete success')
          e.target.parentNode.style.display = 'none';
      })
  }


    return (
        <div className="dataCard col-md-4">
  <div className="card m-3">
   {
     image?<img  style={{height:"100%"}} className="card-img-top"src={`data:image/png;base64,${image.img}`}/> : <img className="card-img-top" src={img} alt="Card image cap"/>
   }
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
    </div>
    <div className="pricePart d-flex justify-content-between">
        <h6>৳{price}</h6>
        <button onClick={() =>handleClick(_id)} className="btn buyBtn">Buy Now</button>
    </div>
   {isAdmin && <button onClick={(e) =>handleAdminDelete(e,_id)} className="btn btn-primary">Delete</button>}
  </div>
        
        </div>
    );
};

export default HomeDataCard;