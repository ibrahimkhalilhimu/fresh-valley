import React from 'react';
import SideBar from '../SideBar/SideBar';
import { AiOutlineDelete } from "react-icons/ai";
const ManageProduct = () => {
    return (
        <div>
           <div className="container-fluid">
               <div className="row">
                   <div className="col-md-3">
                       <SideBar/>
                   </div>
                   <div className="col-md-9">
                       <h4 className="mt-4">Manage Product</h4>
                       <table  className="table mt-5">
  <thead>
    <tr>
      <th scope="col">Product Name and Wight </th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>
        <AiOutlineDelete color="red" size="25px"/>
      </td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
  </tbody>
</table>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default ManageProduct;