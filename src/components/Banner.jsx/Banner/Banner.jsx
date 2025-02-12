import React from 'react';
import Home from '../../Home/Home';
import PopularCamp from '../../Home/PopularCamp';
import FeedBack from '../../../pages/Feedback/FeedBack';
import FAQ from '../../../pages/StaticPage/Faq';
import InsuranceAndFacilities from '../../../pages/StaticPage/InsuranceAndFacilities';

const Banner = () => {
    return (
        <div>
            <Home></Home>
            <div className='max-w-7xl mx-auto'>
            <PopularCamp></PopularCamp>
            <FeedBack></FeedBack>
            <FAQ></FAQ>
            <InsuranceAndFacilities></InsuranceAndFacilities>
            </div>
        </div>
    );
};

export default Banner;