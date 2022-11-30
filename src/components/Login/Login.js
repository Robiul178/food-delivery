import React, { useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import useApi from '../ContextApi/useApi';
import logo from '../../img/logo.png';

const Login = () => {
    let navigate = useNavigate();
    const { state } = useLocation();

    const { firebase } = useApi();

    const { logInEmail, user, setUser, error, setError } = firebase;
    const emailRef = useRef();
    const passRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

        logInEmail(email, password)
            .then((result) => {
                const user = result.user;
                navigate(state?.path || "/manageOrder");
                setError('');
            })
            .catch((error) => {
                setError(error.message);

            })
        e.target.reset();
    }

    return (
        <>
            <div className='pt-20'>
                <div className='login'>
                    <div className='flex items-center justify-center h-screen'>
                        <div>
                            <div>
                                <img src={logo} width="300px" alt="" />
                            </div>
                            <form onSubmit={handleSubmit} className='mt-6'>
                                <input ref={emailRef} type="email" className=' border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-primary focus:border-none mb-4' placeholder='E-mail' />
                                <br />
                                <input ref={passRef} type="password" className=' border-2 border-lightgray px-4 py-1 rounded w-full outline-offset-1 outline-primary focus:border-none mb-4' placeholder='Password' />
                                <br />
                                <input className='bg-primary text-white  px-4 py-1 rounded w-full font-bold cursor-pointer mb-4 ' type="submit" value='submit' />
                            </form>
                            <Link to='/registration' className='text-primary flex justify-center'>Create a new Account</Link>
                            <p className='text-center text-danger'>{error}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;

