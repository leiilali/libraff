import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import BottomNavbar from '../Header/BottomNavbar/BottomNavbar'
import HelpButton from '../Contact/HelpButton'

function Landing() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />


            <BottomNavbar />
            <div className='hidden xl:block'>
                <HelpButton />
            </div>
        </>
    )
}

export default Landing