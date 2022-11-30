import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useApi from '../ContextApi/useApi';

const PrivetRoute = ({ children, ...rest }) => {
    const location = useLocation();
    const { firebase } = useApi();
    const { user } = firebase;
    return (
        user.email ? children :
            <Navigate to="/login"
                replace
                state={{ path: location.pathname }}
            />
    );
};

export default PrivetRoute;