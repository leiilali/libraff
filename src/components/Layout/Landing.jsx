import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Landing() {
    return (
        <>
            <Header />
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Landing