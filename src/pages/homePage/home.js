import React from 'react';
import './home.css';
import { Navbar } from '../../components/home/navbar';
import {LandingPage} from '../../components/home/landing-page';
const Home =()=>{
    return(
        <>
       
            <Navbar />
            <LandingPage />
    </>
    );
}
export {Home};