import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SearchBar from '../SearchBar/SearchBar';
import HomeDataCard from './HomeDataCard';

const HomeData = () => {
    const [valley,setValley] = useState([])
    const [loading,setLoading] = useState(true)
    const [search, setSearch] = useState('');
    const [loggedInUser,setLoggedInUser] =useContext(UserContext)
    useEffect(() => {
        fetch('https://pure-hollows-18299.herokuapp.com/products?search='+search)
        .then((response) => response.json())
        .then((data) => {
            setValley(data)
            setLoading(false)
        })
    },[search])

     const handleSearch = event =>{
        console.log(event.target.value);
        setSearch(event.target.value);
    }
    return (
        <div className="my-5">
             <SearchBar handleSearch={handleSearch} />
            <div className="container">
          {
              loading ? (
                <div className="text-center">
                    <div className="spinner-border text-success"  role="status" >
                <span className="visually-hidden">Loading...</span>
              </div>
                </div>
              )
            
            :(
        
               <div className="row">
                
                  
                   
                   {
                    valley.map(data =><HomeDataCard data={data} key={data._id}></HomeDataCard> )
                }
          
               </div>
            )}

            </div>
            
        </div>
    );
};

export default HomeData;