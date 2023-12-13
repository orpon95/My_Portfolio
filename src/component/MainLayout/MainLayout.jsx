import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import "./Mainlayout.css"
import Footer from '../Footer/Footer';
import backImg from "../../assets/dark-wavy-colors-background/3334896.jpg"


const MainLayout = () => {
    const customStyle = {
        backgroundImage: `url(${backImg})`,
        backgroundSize: 'cover', // You can set other background properties as needed
        backgroudRepeat:"no-repeat"
      };
    return (
        <div className='w-[80%] mx-auto my-6 ' style={customStyle}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;