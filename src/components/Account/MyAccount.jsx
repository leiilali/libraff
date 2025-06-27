import React, { useState, useRef, useEffect } from 'react';
import { LuCircleUser } from "react-icons/lu";
import { RxTriangleRight } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Login from '../../auth/Login';

function MyAccount() {
    const [isOpen, setIsOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false)
    const dropdownRef = useRef(null);

    useEffect(() => {
        function clickOutside(event) {
            if (!dropdownRef.current?.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", clickOutside);
        return () => {
            document.removeEventListener("mousedown", clickOutside);
        };
    }, []);

    

    return (
        <div className='relative' ref={dropdownRef}>
            <LuCircleUser
                onClick={() => setIsOpen(!isOpen)}
                className='xl:hidden text-[28px] cursor-pointer'
            />

            <div
                onClick={() => setIsOpen(!isOpen)}
                className='items-center gap-2 bg-[#F5F6FD] py-2.5 px-5 rounded-full hidden xl:flex cursor-pointer'>
                <LuCircleUser className={`text-[25px] ${isOpen ? 'text-[#ef3344]' : 'text-[#0f172a]'}`} />
                <h3 className='text-[16px] font-medium'>Hesabım</h3>
                <FaChevronDown className={`text-[12px] transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
            </div>

            <div className={`w-[340px] border-[0.5px] border-[#EBEBEB] rounded-b-xl rounded-t-none lg:rounded-t-xl 
                absolute top-12 right-[-35px] xl:right-0 z-50 bg-[#fff] overflow-hidden 
                shadow-[0_0_0_1px_rgba(0,0,0,0.05),_0_10px_15px_0_rgba(0,0,0,0.3)] 
                transition-all duration-300 ease-in-out
                ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>

                <div className='px-3 pt-[10px] pb-[10px]'>
                    <ul className='text-[14px] nunito-font text-[#0f172a] font-light'>
                        <li className='px-[10px] py-[7px] hover:bg-[#F5F5F7] rounded-full transition duration-300'>Sifarişlər</li>
                        <li className='px-[10px] py-[7px] hover:bg-[#F5F5F7] rounded-full transition duration-300'>Qaytarma sorğuları</li>
                        <li className='px-[10px] py-[7px] hover:bg-[#F5F5F7] rounded-full transition duration-300'>Seçilmişlər</li>
                    </ul>
                </div>

                <div className='px-5 py-4 bg-[#F5F5F7]'>
                    <h3 className='nunito-font text-[#767676] text-[14px] font-light'>Sifarişi izləmək</h3>
                    <div className='nunito-font border border-[#bbb] flex justify-between rounded-lg overflow-hidden hover:shadow-[0_0_0_2px_rgba(239,51,64,0.1)] my-2'>
                        <input
                            type="text"
                            className='px-3 py-2 w-full 
                            focus:outline-none focus:ring-1 bg-white focus:ring-[#ef3344] 
                            focus:shadow-[0_0_0_2px_rgba(239,51,64,0.1)]
                            transition duration-100 ease-in-out placeholder:text-[14px] placeholder:nunito-font'
                            placeholder='Sifariş nömrəsi/E-poçt'
                        />
                        <button className='flex justify-center items-center px-2 border-l border-l-[#bbb]'>
                            <RxTriangleRight className='text-[#767676] text-[25px]' />
                        </button>
                    </div>

                    <div className='nunito-font flex justify-between mt-6 mb-2'>
                        <button
                            onClick={() => setShowLogin(true)}
                            className='bg-[#1E1E1E] text-[#fff] font-semibold px-3 py-2 rounded-full cursor-pointer'>Daxil ol</button>
                        <Link to={"/qeydiyyat"} className='bg-[#EF3441] text-[#fff] font-semibold px-3 py-2 rounded-full cursor-pointer'>Qeydiyyat</Link>
                    </div>
                </div>
            </div>
            {showLogin && <Login onClose={() => setShowLogin(false)} />}
        </div>

    );
}

export default MyAccount;
