import React, { useContext, useEffect, useState } from 'react';
import { BsTypeH3 } from 'react-icons/bs';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Data from '../Home/Data/Data';
import Header from '../Home/Navbar/Header';

const CheckOut = () => {
  let { id } = useParams();
  const [checkOutProduct,setCheckOutProduct]=useState({});
const [loggedInUser,setLoggedInUser] = useContext(UserContext)

useEffect(() => {
  fetch(`https://pure-hollows-18299.herokuapp.com/product/${id}`)
  .then(res => res.json())
  .then(data => {
    setCheckOutProduct(data)
  })
  .catch(err => console.log(err))
},[])



const handleAddOrder = () => {
const newOrder = {
  ...checkOutProduct,
  email:loggedInUser.email,
  displayName:loggedInUser.displayName,
}
console.log(newOrder);
const url = `https://pure-hollows-18299.herokuapp.com/addOrder`
  fetch(url,{
    method: 'POST',
    // mode: "no-cors",
    headers: {
      // "Access-Control-Allow-Origin": "*",
      // 'Access-Control-Allow-Headers': "*",
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newOrder)
  })
  .then(res=>res.json())
  .then(data=>{
    if(data){
      alert('Your Order Successfully');
    }
    console.log(data);
  })
  .catch(err => console.log(err))
}
console.log(checkOutProduct);



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

     <td>
       <h4>{checkOutProduct.name }</h4>
     </td>
      <td>1</td>
      <td>
        <h4>
          ${checkOutProduct.price}
        </h4>
      </td>

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