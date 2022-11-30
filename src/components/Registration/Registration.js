import React, { useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import useApi from '../ContextApi/useApi';
import logo from '../../img/logo.png';

const Registration = () => {
    let navigate = useNavigate();
    const { state } = useLocation();
    const { firebase } = useApi();
    const { signUpEmail, error, setError, user, setUser, setDisplayName } = firebase;

    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        signUpEmail(email, pass)
            .then((result) => {
                setDisplayName(name);
                navigate(state?.path || "/manageOrder");
                setError('')
                console.log(result);
            })
            .catch((error) => {
                console.log(error.message)
                setError(error.message)
            })
        e.target.reset();
    }

    return (
        <div>
            <div className='pt-20'>
                <div className='login'>
                    <div className='flex items-center justify-center h-screen'>
                        <div>
                            <div>
                                <img src={logo} width="300px" alt="" />
                            </div>
                            <form onSubmit={handleSubmit} className='mt-6'>
                                <input type="text" ref={nameRef} className=' border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-primary focus:border-none mb-4' placeholder='Name' />
                                <br />
                                <input ref={emailRef} type="email" className=' border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-primary focus:border-none mb-4' placeholder='E-mail' />
                                <br />
                                <input ref={passRef} type="password" className=' border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-primary focus:border-none mb-4' placeholder='Password' />
                                <br />
                                <input className='bg-primary text-white  px-4 py-1 rounded w-full font-bold cursor-pointer mb-4 ' type="submit" value='submit' />
                            </form>
                            <Link to='/login' className='text-primary flex justify-center'>Already have an account</Link>
                            <p className='text-center text-danger'>{error}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
