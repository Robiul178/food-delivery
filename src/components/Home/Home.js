import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Delivery from './Delivery/Delivery';
import OtherSection from './OtherSection/OtherSection';
import ServiceHome from './ServiceHome/ServiceHome';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ServiceHome></ServiceHome>
            <OtherSection></OtherSection>
            <Delivery></Delivery>
            <Footer></Footer>
        </div>
    );
};

export default Home;