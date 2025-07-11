import React from 'react'
import { Link } from 'react-router-dom'

function HeaderNav() {
  return (

    <div>
      <div className='xl:flex hidden justify-between h-[45px] items-center'>

        <ul className='flex gap-3 text-[#334155] font-semibold text-[15px] nunito-font'>
          <li>
            <Link to={"/bestsellerler"}> Bestseller </Link>
          </li>
          <li>
            <Link to={"/kampaniyalar-az"}>Endirimlər </Link>
          </li>
          <li>
            <Link to={"/muellifler"}> Müəlliflər </Link>
          </li>
          <li>
            <Link to={"/klassiklr"} state={{ code: "klassikler_bedii" }} > Klassiklər </Link>
          </li>
        </ul>

        <ul className='flex gap-3 text-[#334155] font-light text-[15px]'>
          <li>
            <Link to={"/odenis-ve-catdirilma"}>Ödəniş və çatdırılma</Link>
          </li>
          <li>
            <Link to={"/loyalty-card"}>Loyallıq kartı</Link>
          </li>
          <li>
            <Link to={"faq-az"}>FAQ</Link>
          </li>
          <li>
            <Link to={"/bizimle-elaqe"}>Əlaqə</Link>
          </li>
        </ul>


      </div>
      <div className="hidden xl:block h-[1px] bg-gray-300 w-full"></div>

    </div>


  )
}

export default HeaderNav