import React from 'react';
import MakeAppointment from './Appointment/MakeAppointment';
import Info from './Cards/Info';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Services from './Services/Services';
import Banner from './Shared/Banner/Banner';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className="px-12">
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;