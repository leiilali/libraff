import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderNav from './HeaderNav'

function Header() {
  return (
    <div className='container lg:pt-8 !pb-0'>
        <HeaderTop/>
        <HeaderNav/>
    </div>
  )
}

export default Header