import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import BottomNavbar from '../Header/BottomNavbar/BottomNavbar'
import HelpButton from '../Contact/HelpButton'
import Breadcrumbs from '../Main/Breadcrumbs'

function Landing() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />

            {/* for mobile screen */}
            <BottomNavbar />


            <div className='hidden xl:block'>
                <HelpButton />
            </div>
        </>
    )
}

export default Landing