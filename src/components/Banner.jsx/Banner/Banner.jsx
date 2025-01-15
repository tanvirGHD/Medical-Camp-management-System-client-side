import React from 'react';
import Home from '../../Home/Home';
import PopularCamp from '../../Home/PopularCamp';

const Banner = () => {
    return (
        <div>
            <Home></Home>
            <div className='max-w-7xl mx-auto'>
            <PopularCamp></PopularCamp>
            </div>
        </div>
    );
};

export default Banner;