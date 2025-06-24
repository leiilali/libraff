import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import BottomNavbar from '../Header/BottomNavbar'

function Landing() {
    return (
        <>
            <Header />
            <Outlet/>
            <Footer/>

            
            <BottomNavbar/>
        </>
    )
}

export default Landing