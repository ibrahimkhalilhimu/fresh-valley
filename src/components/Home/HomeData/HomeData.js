import React, { useState } from 'react';
import Data from '../Data/Data';
import HomeDataCard from './HomeDataCard';

const HomeData = () => {
    const [valley,setValley] = useState(Data)
    console.log(valley);
    return (
        <div className="my-5">
            <div className="container">
               <div className="row">
                   
                   {
                    valley.map(data =><HomeDataCard data={data} key={data.id}></HomeDataCard> )
                }
                  
               </div>
            </div>
        </div>
    );
};

export default HomeData;