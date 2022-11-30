import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div className='lg:pt-10 md:pt-10 pt-20'>
            <HeroSection></HeroSection>
        </div>
    );
};

export default Header;