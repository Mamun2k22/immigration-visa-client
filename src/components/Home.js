import React from 'react';
import Banner from './Banner';
import HomeService from './HomeService';
import useTitle from './hooks/usetitle';

const Home = () => {
    useTitle("home")
    return (
        <div>
            <Banner></Banner>
            <HomeService></HomeService>


        </div>

    );
};

export default Home;