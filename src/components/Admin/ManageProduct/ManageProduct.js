import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import { AiOutlineDelete } from "react-icons/ai";
const ManageProduct = () => {

  const [manageProduct,setManageProduct] = useState([])
  useEffect(() => {
    fetch('https://pure-hollows-18299.herokuapp.com/productAll')
    .then(res =>res.json())
    .then(data => {
        setManageProduct(data);
        console.log(data);
    })
  },[])

console.log(manageProduct);

const handleClickDelete= (_id)=>{
  fetch(`https://pure-hollows-18299.herokuapp.com/delete/${_id}`,{
    method:'DELETE',
})
.then(res => res.json())
.then(result =>{
    console.log(result);
    alert('delete success')
})
}
    return (
        <div>
           <div className="container-fluid">
               <div className="row">
                   <div className="col-md-3">
                       <SideBar/>
                   </div>
                   <div className="col-md-9">
                       <h4 className="mt-4">ManageProduct</h4>
                       <table  className="table mt-5">
  <thead>
    <tr>
      <th scope="col">Product Name and Wight </th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {manageProduct.map(data=>
      <tr key={data._id}>
      <td>{data.name}</td>
      <td>${data.price}</td>
      <td>
        <AiOutlineDelete onClick={() =>handleClickDelete(data._id)} color="red" size="25px" cursor="pointer"/>
      </td>
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

export default ManageProduct;