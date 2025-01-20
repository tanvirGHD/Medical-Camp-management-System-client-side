import React from 'react';
import Home from '../../Home/Home';
import PopularCamp from '../../Home/PopularCamp';
import FeedBack from '../../../pages/Feedback/FeedBack';

const Banner = () => {
    return (
        <div>
            <Home></Home>
            <div className='max-w-7xl mx-auto'>
            <PopularCamp></PopularCamp>
            <FeedBack></FeedBack>
            </div>
        </div>
    );
};

export default Banner;