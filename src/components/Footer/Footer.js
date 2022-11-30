import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png';
const Footer = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-20 bg-dark p-4'>
                <div className='p-4'>
                    {/* <img src='http://fitmeal.like-themes.com/wp-content/themes/fitmeal/assets/images/logo-white.png' width='50%' alt="" /> */}
                    <h1 className='text-4xl font-bold text-success'>Door-Dash</h1>
                    <p className='text-gray'>Integer maximus accumsan nunc, sit amet tempor lectus facilisis eu. Cras vel elit felis. Vestibulum convallis ipsum id aliquam varius.</p>
                </div>
                <div>
                    <h2 className='text-4xl font-bold mb-4 text-primary'>Explore</h2>
                    <p> <NavLink to="/home" className='font-bold text-xl mx-4 text-white'>Home</NavLink></p>
                    <p>  <NavLink to="/order" className='font-bold text-xl mx-4 text-white'>Order</NavLink></p>
                    <p> <NavLink to="/login" className='font-bold text-xl mx-4 text-white'>Login</NavLink></p>
                </div>
                <div>
                    <h2 className='text-4xl font-bold mb-4 text-primary'>Contact info</h2>
                    <p className='py-2 text-primary'><i className="fas fa-map-marker-alt pr-2 text-primary text-xl"></i>Our location:</p>
                    <p className='px-4 text-white'>BUBT,Rupnagar, Mirpur-2, Dhaka ,Bangladesh</p>
                    <p className='text-primary py-2'><i className="fas fa-phone-volume pr-2 text-primary text-xl"></i>Phones:</p>
                    <p className='px-4 text-white'>+49078-039-23-11</p>
                    <p className='px-4 text-white'> +49078-028-55-60</p>
                </div>
                <div>
                    <h2 className='text-4xl font-bold mb-4 text-primary'>Privacy Policy</h2>
                    <p className='p-4 text-white'>A Privacy Policy is a statement or a legal document that states how a company or website collects, handles and processes data of its customers and visitors. </p>
                </div>
            </div>
        </div >
    );
};

export default Footer;