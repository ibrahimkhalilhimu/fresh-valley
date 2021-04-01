import React from 'react';
import Header from '../Home/Navbar/Header';

const CheckOut = () => {
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
     
      <td>Mark</td>
      <td>Otto</td>
      <td>mdo</td>
    </tr>
  </tbody>
</table>
<button style={{backgroundColor:"#71BA58"}} className="btn text-white">CheckOut</button>
            </div>
          
        </div>
    );
};

export default CheckOut;