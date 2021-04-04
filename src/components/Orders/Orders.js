import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Home/Navbar/Header';

const Orders = () => {

    const [order,setOrder] = useState([])
    const [loggedInUser,setLoggedInUser] =useContext(UserContext)
    useEffect(()=>{
        fetch('https://pure-hollows-18299.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data=> setOrder(data))
    },[])

    const handleDelete =(e,_id)=>{
        console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode);
        fetch(`https://pure-hollows-18299.herokuapp.com/delete/${_id}`,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            alert('delete success')
            e.target.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none'
        })
    }

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="orders mt-5 pt-5 d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-12">
                            {
                                order.length ===0 && <h4>You donot order any products</h4>
                            }
                           {
                               order.map(data=>
                                <div key={data._id} className="card m-3">
                                <div className="row">
                                    <div className="col-md-2">
                                       {
                                           data.checkOutProduct.image? <img style={{width:"100px"}} className="" src={`data:image/png;base64,${data.checkOutProduct.image.img}`} alt=""/> : <img style={{width:"120px"}} className="" src={data.checkOutProduct.img} alt=""/>
                                       }
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body ml-3">
                                            <h5>{data.checkOutProduct.name}</h5>
                                            <h6>${data.checkOutProduct.price}</h6>
                                           <div className="d-flex justify-content-end">
                                           <button onClick={(e) =>handleDelete(e,data._id)} className="btn btn-success">Cancel</button>
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