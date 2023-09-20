import React from 'react';
import Naveber from '../../Pages/share/navebar/Naveber';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/share/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Naveber></Naveber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;