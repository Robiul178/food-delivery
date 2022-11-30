import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../../img/hero--img.jpg';

const HeroSection = () => {
    return (
        <>
            <div className=' lg:flex  p-4 items-center '>
                <div className='lg:w-1/2 md:w-full w-full md:text-left lg:text-left text-center p-4'>
                    <h1 className='text-primary font-bold lg:text-6xl md:text-6xl text-4xl py-2'>Organic Food <span className='text-dark'>Delivery Service</span></h1>
                    <p className='text-dark lg:text-2xl md:text-xl  text-lg py-4'>Vestibulum maximus egestas tortor nec volutpat. Suspendisse lobortis lorem vel enim semper rutrum nulla ac dolor ullamcorper aliquam.</p>
                    <button className='btn btn-outline btn-accen'><Link to='/order'>view plans</Link></button>
                </div>
                <div className='lg:w-1/2 md:w-full w-full'>
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </>
    );
};

export default HeroSection;