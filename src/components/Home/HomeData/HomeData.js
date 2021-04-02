import React, { useEffect, useState } from 'react';
import HomeDataCard from './HomeDataCard';

const HomeData = () => {
    const [valley,setValley] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then((response) => response.json())
        .then((data) => setValley(data));
    },[])
    return (
        <div className="my-5">
            <div className="container">
               <div className="row">
                   
                   {
                    valley.map(data =><HomeDataCard data={data} key={data._id}></HomeDataCard> )
                }
                  
               </div>
            </div>
        </div>
    );
};

export default HomeData;