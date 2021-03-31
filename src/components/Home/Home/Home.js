import React from 'react';
import HomeData from '../HomeData/HomeData';
import Header from '../Navbar/Header';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {
    return (
        <div>
            <Header/>
            <SearchBar/>
            <HomeData/>
        </div>
    );
};

export default Home;