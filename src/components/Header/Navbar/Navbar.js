import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../img/logo.png';
import useApi from '../../ContextApi/useApi';
import './navbar.css';

const Navbar = () => {
    const [isMobile, setMobile] = useState(false);
    const { store, setStore, firebase } = useApi();
    let key;
    if (store?.items) {
        key = Object.keys(store?.items);
    }

    const { user, signOutEmail } = firebase;

    return (
        <div>
            <div className="nav-items bg-white flex items-center justify-between lg:p-2 md:p-2 p-2  fixed w-full">
                <div>
                    <Link to='/' >
                        {/* <img src={logo} width='50%' alt="" /> */}
                        <h2 className='text-3xl font-bold'>Door-Dash</h2>
                    </Link>
                </div>
                <div className={isMobile ? 'nav-link-mobile' : 'nav-link'} onClick={() => setMobile(false)}>
                    <NavLink to="/home" className='font-bold text-xl mx-4'>HOME</NavLink>
                    <NavLink to="/order" className='font-bold text-xl mx-4'>FOOD</NavLink>
                    <NavLink to="/manageOrder" className='font-bold text-xl mx-4 relative'><i className="fas fa-shopping-cart text-dark"></i><span className='count-number text-dark'>{key?.length ? key.length : 0}</span></NavLink>
                    {
                        user?.email && <span className='text-primary font-bold mx-2'>{user.displayName}</span>
                    }
                    {
                        user?.email ? <button className='font-bold text-xl mx-4' onClick={signOutEmail}>LOG OUT</button> : <NavLink to="/login" className='font-bold text-xl mx-4'>LOG IN</NavLink>
                    }

                </div>
                <button className="hamburger"
                    onClick={() => setMobile(!isMobile)}
                >
                    {
                        isMobile ? <i className="fas fa-times font-bold text-2xl mx-4"></i> : <i className="fas fa-bars font-bold text-2xl mx-4"></i>
                    }
                </button>
            </div>
        </div >
    );
};

export default Navbar;