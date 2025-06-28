import React, { useEffect, useState } from 'react';
import { MdOutlineMenu, MdOutlinePhone } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";
import { LuCircleUser } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import HeaderMenu from '../HeaderMenu';
import BottomNavbarBasket from './BottomNavbarBasket';
import BottomNavbarAccount from './BottomNavbarAccount';
import BottomNavbarContact from './BottomNavbarContact';
import BottomNavbarSearch from './BottomNavbarSearch';




function BottomNavbar() {
    const [show, setShow] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [basketOpen, setBasketOpen] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    let lastScrollY = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setShow(true);
            } else {
                setShow(false);
            }
            lastScrollY = currentScrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={`fixed xl:hidden bottom-[-2px] nunito-font left-0 right-0 z-3 bg-white border-t border-gray-300 h-14 flex justify-around items-center transition-transform duration-300 ${show ? 'translate-y-0' : 'translate-y-full'}`}>
                <button onClick={() => setMenuOpen(true)} className="flex flex-col items-center">
                    <MdOutlineMenu className='text-[25px] text-[#94a3b8]' />
                    <p className='text-[12px] text-[#94a3b8]'>Menyu</p>
                </button>
                <button onClick={() => setSearchOpen(true)} className="flex flex-col items-center">
                    <IoSearch className='text-[25px] text-[#94a3b8]' />
                    <p className='text-[12px] text-[#94a3b8]'>Axtarış</p>
                </button>
                <button onClick={() => setBasketOpen(true)} className="flex flex-col items-center">
                    <RiShoppingBag4Line className='text-[25px] text-[#94a3b8]' />
                    <p className='text-[12px] text-[#94a3b8]'>Səbət</p>
                </button>
                <button onClick={() => setAccountOpen(true)} className="flex flex-col items-center">
                    <LuCircleUser className='text-[25px] text-[#94a3b8]' />
                    <p className='text-[12px] text-[#94a3b8]'>Hesabım</p>
                </button>
                <button onClick={() => setContactOpen(true)} className="flex flex-col items-center">
                    <MdOutlinePhone className='text-[25px] text-[#94a3b8]' />
                    <p className='text-[12px] text-[#94a3b8]'>Əlaqə</p>
                </button>
            </div>


            {/* menu */}
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
                <HeaderMenu closeMenu={() => setMenuOpen(false)} />
            </div>


            {/* search */}
            {searchOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
                    onClick={() => setSearchOpen(false)}
                />
            )}
            <div
                className={`fixed bottom-0  w-full z-50 transition-transform duration-300 ease-in-out ${searchOpen ? 'translate-y-0' : 'translate-y-full'
                    }`}>
                <div className="bg-white rounded-t-2xl shadow-lg">
                    <BottomNavbarSearch isOpen={searchOpen} setIsOpen={setSearchOpen}/>
                </div>
            </div>


            {/* basket */}
            {basketOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
                    onClick={() => setBasketOpen(false)}
                />
            )}

            <div
                className={`fixed bottom-0  w-full z-50 transition-transform duration-300 ease-in-out ${basketOpen ? 'translate-y-0' : 'translate-y-full'
                    }`}>
                <div className="bg-white rounded-t-2xl shadow-lg">
                    <BottomNavbarBasket isOpen={basketOpen} setIsOpen={setBasketOpen} />
                </div>
            </div>


            {/* my account */}
            {accountOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
                    onClick={() => setAccountOpen(false)}
                />
            )}
            <div
                className={`fixed bottom-0  w-full z-50 transition-transform duration-300 ease-in-out ${accountOpen ? 'translate-y-0' : 'translate-y-full'
                    }`}>
                <div className="bg-white rounded-t-2xl shadow-lg">
                    <BottomNavbarAccount isOpen={accountOpen} setIsOpen={setAccountOpen} />
                </div>
            </div>



            {/* contact */}
            {contactOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
                    onClick={() => setContactOpen(false)}
                />
            )}
            <div
                className={`fixed bottom-0  w-full z-50 transition-transform duration-300 ease-in-out ${contactOpen ? 'translate-y-0' : 'translate-y-full'
                    }`}>
                <div className="bg-white rounded-t-2xl shadow-lg">
                    <BottomNavbarContact isOpen={contactOpen} setIsOpen={setContactOpen} />
                </div>
            </div>






        </>


    );
}

export default BottomNavbar;
