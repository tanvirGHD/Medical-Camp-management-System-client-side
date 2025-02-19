import React from 'react';
import Home from '../../Home/Home';
import PopularCamp from '../../Home/PopularCamp';
import FeedBack from '../../../pages/Feedback/FeedBack';
import FAQ from '../../../pages/StaticPage/Faq';
import InsuranceAndFacilities from '../../../pages/StaticPage/InsuranceAndFacilities';
import HealthQuiz from '../../../pages/StaticPage/HealthQuiz';
import WhyChooseUs from '../../../pages/StaticPage/WhyChooseUs';
import ContactAndSupport from '../../../pages/StaticPage/ContactAndSupport';

const Banner = () => {
    return (
        <div>
            <Home></Home>
            <div className='max-w-7xl mx-auto'>
            <WhyChooseUs></WhyChooseUs>
            <PopularCamp></PopularCamp>
            <FeedBack></FeedBack>
            <FAQ></FAQ>
            <InsuranceAndFacilities></InsuranceAndFacilities>
            <HealthQuiz></HealthQuiz>
            <ContactAndSupport></ContactAndSupport>
            </div>
        </div>
    );
};

export default Banner;