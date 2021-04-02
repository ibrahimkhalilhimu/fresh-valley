import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Data from '../Home/Data/Data';
import Header from '../Home/Navbar/Header';

const CheckOut = () => {
  let { id } = useParams();
  const [checkOutProduct,setCheckOutProduct]=useState({});
const [loggedInUser,setLoggedInUser] = useContext(UserContext)
  const currentDate = new Date().toLocaleDateString();

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
    .then(res => res.json())
    .then(data => {
      setCheckOutProduct(data)
    })
  },[])

const handleAddOrder = () => {
const newOrder = {...loggedInUser,checkOutProduct,currentDate}
  fetch(`http://localhost:5000/addOrder`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newOrder),
  })
  .then(res=>res.json())
  .then(data=>{
    if(data){
      alert('Your Order Successfully');
    }
  })
}

    return (
        <div className="check-out">
            <Header/>
            <div className="container mt-5">
                <h4>CheckOut</h4>
                <table className="table mt-4">
  <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>{checkOutProduct.name}</td>
      <td>1</td>
      <td>$ {checkOutProduct.price}</td>
    </tr>
  </tbody>
</table>
<div className="d-flex justify-content-end">
<button onClick={handleAddOrder} style={{backgroundColor:"#71BA58"}} className="btn text-white">CheckOut</button>
</div>
            </div>
          
        </div>
    );
};

export default CheckOut;