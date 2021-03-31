import React from 'react';
import './HomeDataCard.css'
const HomeDataCard = ({data}) => {
    const {img,id,name,price} = data
    return (
        <div className="dataCard col-md-4">
  <div className="card">
    <img className="card-img-top" src={img} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
    </div>
    <div className="pricePart d-flex justify-content-between">
        <h6>${price}</h6>
        <button className="btn buyBtn">Buy Now</button>
    </div>
  </div>
        
        </div>
    );
};

export default HomeDataCard;