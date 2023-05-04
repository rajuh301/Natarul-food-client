/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer';
import { ToastContainer } from 'react-toastify';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;