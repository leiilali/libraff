import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { LuHeart } from "react-icons/lu";


import logo from "../../assets/images/logo/libraffLogo.png"
import HeaderMenu from './HeaderMenu';
import { Link, useNavigate } from 'react-router-dom';
import Basket from '../Basket/Basket';
import MyAccount from '../Account/MyAccount';
import Kataloq from '../Kataloq/Kataloq';
import { WISHLIST } from '../../context/WishContext';



function HeaderTop() {
    const { wish } = useContext(WISHLIST);
    const [menuOpen, setMenuOpen] = useState(false)

    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()

    const handleSearch = () => {
        const trimmed = inputValue.trim();
        if (trimmed.length > 1) {
            navigate(`/axtar/${trimmed}`);
            setInputValue('');
        }
    };
    const handleCategorySelect = (code) => {
        setMenuOpen(false);
        navigate('/subkateqoriya', { state: { code } });
    };
    const closeMenu = () => setMenuOpen(false);


    return (
        <div className=' flex flex-col gap-4 lg:pb-6 lg:pt-4'>
            <div className='flex justify-between items-center lg:gap-6'>
                <div className='flex items-center text-[#1e293b]'>
                    <button onClick={() => setMenuOpen(true)}><MdOutlineMenu className='text-3xl mt-[2px] xl:hidden mr-2' /></button>
                    <div className="w-[120px] h-[30px] lg:w-[160px] lg:h-[41px] xl:w-[175px] xl:h-[48px] ">
                        <Link to={"/"}>
                            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                        </Link>
                    </div>
                </div>


                {/* search bar for desktop */}
                <div className='flex gap-5'>
                    {/* <div className='hidden lg:flex justify-center items-center bg-[#EF3441] text-[#fff] text-2xl py-2.5 px-5 rounded-full  '>
                        <AiOutlineAppstore />
                        <h3 className='text-[16px] pl-1 hidden xl:inline font-medium'>Kataloq</h3>
                    </div> */}
                    <Kataloq />
                    <div className='border border-[#e2e8f0] bg-[#F9FAFC] rounded-full text-[16px] pr-4 w-[595px] font-light focus-within:ring-1 focus-within:ring-gray-300 focus-within:shadow-md transition hidden lg:flex xl:flex  '>
                        <input
                            onChange={(e) => { setInputValue(e.target.value) }}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            value={inputValue}
                            className='py-2 px-3 placeholder:text-[#0f172a] placeholder:text-[14px] outline-none w-full bg-transparent'
                            type="text"
                            placeholder='Növbəti kitabınızı axtarın'
                        />
                        <button onClick={handleSearch} >
                            <IoSearch className='text-xl' />
                        </button>
                    </div>
                </div>

                <div className='flex items-center gap-3 text-[#0f172a] cursor-pointer'>
                    <MyAccount />
                    <Link to={"wishlist-view"} className='relative'>
                        <LuHeart className='text-[27px] ' />
                        {wish.length > 0 && (
                            <span className="absolute -top-1 -right-1.5 bg-[#EF3441] nunito-font text-white text-[11px] w-[16px] h-[16px] flex items-center justify-center rounded-full font-semibold">
                                {wish.length}
                            </span>
                        )}
                    </Link>
                    <Basket />
                </div>
            </div>


            {/* search bar for mobile menu */}
            <div className='border border-[#e2e8f0] rounded-full text-[16px] flex pr-4 font-light focus-within:ring-1 focus-within:ring-gray-300 focus-within:shadow-md transition lg:hidden'>
                <input
                    onChange={(e) => { setInputValue(e.target.value) }}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    value={inputValue}
                    className='py-2 px-3 placeholder:text-[#0f172a] outline-none w-full bg-transparent'
                    type="text"
                    placeholder='Növbəti kitabınızı axtarın'
                />
                <button onClick={handleSearch}>
                    <IoSearch className='text-xl' />
                </button>
            </div>



            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 transition-opacity"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            <div className={`fixed top-0 left-0 h-full w-full bg-white z-50 transform transition-transform duration-600 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-2 flex justify-end">
                    <button onClick={() => setMenuOpen(false)}>
                        <IoMdClose className="text-[25px] text-[#485569]" />
                    </button>
                </div>

                <HeaderMenu
                    onCategorySelect={handleCategorySelect}
                    closeMenu={closeMenu}

                />
            </div>


        </div>
    )
}

export default HeaderTop