import React from 'react';
import about from '../../../img/about_02.jpg';

const OtherSection = () => {
    return (
        <>
            <div className='lg:mt-20 md:mt-15 mt-10 p-6 lg:flex items-center'>
                <div className='lg:w-1/2 md:w-full w-full'>
                    <img className='rounded-lg mx-auto' width='80%' src={about} alt="" />
                </div>
                <div className='lg:w-1/2 md:w-full w-full'>
                    <h1 className='text-dark font-bold lg:text-6xl md:text-6xl text-4xl py-2'>Healthy and tasty foods with</h1>
                    <h1 className='text-primary font-bold lg:text-6xl md:text-6xl text-4xl py-4'>natural ingredients</h1>
                    <p className='py-4'>Quisque pretium dolor turpis, quis blandit turpis semper ut. Nam malesuada eros nec luctus laoreet. Fusce sodales consequat velit eget dictum. Integer ornare magna vitae ex eleifend congue. Morbi sit amet nisi iaculis, fringilla orci nec.</p>
                    <h1 className='py-4 text-dark text-2xl font-bold'> <i className="far fa-clock px-4 text-primary text-4xl"></i> Every day from 8:00 to 12:00</h1>
                    <h1 className='py-4 text-dark text-2xl font-bold'><i className="fas fa-phone-volume px-4 text-primary text-4xl"></i>+49260-5731-08</h1>
                </div>
            </div>
        </>
    );
};

export default OtherSection;