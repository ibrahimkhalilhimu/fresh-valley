import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import { AiOutlineDelete } from "react-icons/ai";
const OrderList = () => {

  const [orderList,setOrderList] = useState([])
  useEffect(() => {
    fetch('https://pure-hollows-18299.herokuapp.com/order')
    .then(res =>res.json())
    .then(data => {
      setOrderList(data);
    })
  },[])

// const handleClickDelete= (_id)=>{
//   fetch(`https://pure-hollows-18299.herokuapp.com/delete/${_id}`,{
//     method:'DELETE',
// })
// .then(res => res.json())
// .then(result =>{
//     console.log(result);
//     alert('delete success')
// })
// }
    return (
        <div>
           <div className="container-fluid">
               <div className="row">
                   <div className="col-md-3">
                       <SideBar/>
                   </div>
                   <div className="col-md-9">
                       <h4 className="mt-4">Orders List</h4>
                       <table  className="table mt-5">
  <thead>
    <tr>
      <th scope="col">Product Name and Wight </th>
      <th scope="col">Email</th>
      <th scope="col">Price</th>
      {/* <th scope="col">Action</th> */}
    </tr>
  </thead>
  <tbody>
  {orderList.map(data=>
      <tr key={data._id}>
      <td>{data.name|| data.checkOutProduct.name}</td>
      <td>{data.email}</td>
      <td>${data.price ||data.checkOutProduct.price}</td>
      {/* <td>
        <AiOutlineDelete onClick={() =>handleClickDelete(data._id)} color="red" size="25px" cursor="pointer"/>
      </td> */}
    </tr>
    )}
  </tbody>
</table>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default OrderList;