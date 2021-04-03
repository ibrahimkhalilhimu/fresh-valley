import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Home/Navbar/Header';

const Orders = () => {

    const [order,setOrder] = useState([])
    const [loggedInUser,setLoggedInUser] =useContext(UserContext)
    useEffect(()=>{
        fetch('http://localhost:5000/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data=> setOrder(data))
    },[])

    const handleDelete =(_id)=>{
        fetch(`http://localhost:5000/delete/${_id}`,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            alert('delete success')
        })
    }
    console.log(order);
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="orders mt-5 pt-5 d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-12">
                           {
                               order.map(data=>
                                <div key={data._id} className="card m-3">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img style={{width:"120px"}} className="" src={data.checkOutProduct.img} alt=""/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5>{data.checkOutProduct.name}</h5>
                                            <h6>${data.checkOutProduct.price}</h6>
                                           <div className="d-flex justify-content-end">
                                           <button onClick={() =>handleDelete(data._id)} className="btn btn-success">Cancel</button>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                
                                
                                )
                           }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;