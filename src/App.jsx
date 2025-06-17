import React, { useEffect } from 'react'
import Main from './components/Main/Main'
import { Route, Routes, useLocation } from 'react-router-dom'
import Payment from './components/Payment/Payment'
import LoyaltyCard from './components/LoyaltyCard/LoyaltyCard'
import Faq from './components/Faq/Faq'
import Contact from './components/Contact/Contact'
import Discounts from './components/Discounts/Discounts'
import Wishlist from './components/Wishlist/Wishlist'
import { scrollYuxari } from './utils/scrollTop'
import Authors from './components/Authors/Authors'
import Details from './components/Details/Details'
import Error from './components/Error/Error'
import Landing from './components/Layout/Landing'
import SubCategory from './components/Kataloq/SubCategory'
import BestSeller from './components/BestSellers/BestSeller'
import SearchPage from './components/Search/SearchPage'
import Registration from './auth/Registration'
import Login from './auth/Login'
import LoginPage from './auth/LoginPage'
import BasketPage from './components/Basket/BasketPage'

function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    scrollYuxari()
  }, [pathname])
  return (
    <>
      {/* <Header /> */}
      {/* <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/odenis-ve-catdirilma' element={<Payment />} />
        <Route path='/loyalty-card' element={<LoyaltyCard />} />
        <Route path='/faq-az' element={<Faq />} />
        <Route path='/bizimle-elaqe' element={<Contact />} />
        <Route path='/kampaniyalar-az' element={<Discounts />} />
        <Route path='/wishlist-view' element={<Wishlist />} />
        <Route path='/muellifler' element={<Authors />} />
        <Route path='/kitab' element={<Details />} />
        <Route path='*' element={<Error />} />
      </Routes> */}
      {/* <Footer /> */}
      <Routes>
        <Route path='/' element={<Landing />}>
          <Route path='/' element={<Main />} />
          <Route path='/odenis-ve-catdirilma' element={<Payment />} />
          <Route path='/loyalty-card' element={<LoyaltyCard />} />
          <Route path='/faq-az' element={<Faq />} />
          <Route path='/bizimle-elaqe' element={<Contact />} />
          <Route path='/kampaniyalar-az' element={<Discounts />} />
          <Route path='/wishlist-view' element={<Wishlist />} />
          <Route path='/muellifler' element={<Authors />} />
          <Route path='/kitab/:id' element={<Details />} />
          <Route path='/subkateqoriya' element={<SubCategory />} />
          <Route path='/klassiklr' element={<SubCategory />} />
          <Route path='/bestsellerler' element={<BestSeller />} />
          <Route path='/axtar/:searchValue' element={<SearchPage />} />
          <Route path='/sebet' element={<BasketPage />} />
          <Route path='/login' element={<Login />} z/>
          <Route path='*' element={<Error />} />
        </Route>
        <Route path='/qeydiyyat' element={<Registration />} />
        <Route path='/login2' element={<LoginPage />} />

      </Routes>



    </>
  )
}

export default App