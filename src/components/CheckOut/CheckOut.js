import React from 'react';
import { useParams } from 'react-router';
import Data from '../Home/Data/Data';
import Header from '../Home/Navbar/Header';

const CheckOut = () => {
  let { id } = useParams();
  const homeData = Data.find(data => data.id == id);
  console.log(homeData);
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
     
      <td>{homeData.name}</td>
      <td>1</td>
      <td>$ {homeData.price}</td>
    </tr>
  </tbody>
</table>
<div className="d-flex justify-content-end">
<button style={{backgroundColor:"#71BA58"}} className="btn text-white">CheckOut</button>
</div>
            </div>
          
        </div>
    );
};

export default CheckOut;