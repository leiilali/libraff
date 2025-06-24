import React, { useEffect, useState } from 'react';
import { MdOutlineMenu } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";
import { LuCircleUser } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";





function BottomNavbar() {
    const [show, setShow] = useState(false);
    let lastScrollY = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setShow(true);  // scrolling down, show navbar
            } else {
                setShow(false); // scrolling up, hide navbar
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed bottom-[-2px] nunito-font left-0 right-0 z-3 bg-white border-t border-gray-300 h-14 flex justify-around items-center transition-transform duration-300 ${show ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="flex flex-col items-center">
                <MdOutlineMenu className='text-[25px] text-[#94a3b8]' />
                <p className='text-[12px] text-[#94a3b8]'>Menyu</p>
            </div>
            <div className="flex flex-col items-center">
                <IoSearch className='text-[25px] text-[#94a3b8]' />
                <p className='text-[12px] text-[#94a3b8]'>Axtarış</p>
            </div>
            <div className="flex flex-col items-center">
                <RiShoppingBag4Line className='text-[25px] text-[#94a3b8]'/>
                <p className='text-[12px] text-[#94a3b8]'>Səbət</p>
            </div>
            <div className="flex flex-col items-center">
                <LuCircleUser className='text-[25px] text-[#94a3b8]'/>
                <p className='text-[12px] text-[#94a3b8]'>Hesabım</p>
            </div>
            <div className="flex flex-col items-center">
                <MdOutlinePhone className='text-[25px] text-[#94a3b8]'/>
                <p className='text-[12px] text-[#94a3b8]'>Əlaqə</p>
            </div>
        </div>
    );
}

export default BottomNavbar;
