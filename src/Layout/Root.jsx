import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Banner/Banner';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;