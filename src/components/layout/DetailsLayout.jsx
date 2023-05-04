/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Details from '../pages/Details';

const DetailsLayout = () => {

  
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default DetailsLayout;