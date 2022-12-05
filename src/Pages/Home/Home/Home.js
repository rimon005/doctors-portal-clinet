import React from 'react';
import About from '../../About/About';
import Banner from '../Banner/Banner';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <About />
            <MakeAppointment />
            <Testimonials />
        </div>
    );
};

export default Home;