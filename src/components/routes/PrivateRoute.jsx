/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log('User in private route', user);

    if(loading){
        return <Spinner animation="border" variant="primary"/>
    }

    if(user){
        return children;
    }

    return <Navigate state={{from: location}} to='/login' replace></Navigate>

};

export default PrivateRoute;