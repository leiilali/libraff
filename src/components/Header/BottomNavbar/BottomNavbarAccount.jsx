import React, {useRef, useEffect } from 'react';
import { RxTriangleRight } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { IoCloseSharp } from "react-icons/io5";

function BottomNavbarAccount({ setIsOpen }) {
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
    }, [setIsOpen]);

    return (
        <div className='relative' ref={dropdownRef}>
            <div className='pt-[15px] px-3'>
                <div className='flex items-center justify-between px-2'>
                    <h4 className='nunito-font text-[22px] text-[#0f172a] font-light'>Hesabım</h4>
                    <IoCloseSharp
                        onClick={() => setIsOpen(false)}
                        className='text-[#767676] text-[28px] cursor-pointer'
                    />
                </div>
            </div>

            <div className="h-[1px] bg-gray-300 w-full my-1"></div>

            <div>
                <div className='px-3 pt-[10px] pb-[10px]'>
                    <ul className='text-[16px] nunito-font text-[#0f172a] font-light'>
                        <li className='px-[10px] py-[7px] hover:bg-[#F5F5F7] rounded-full transition duration-300'>Sifarişlər</li>
                        <li className='px-[10px] py-[7px] hover:bg-[#F5F5F7] rounded-full transition duration-300'>Qaytarma sorğuları</li>
                        <li className='px-[10px] py-[7px] hover:bg-[#F5F5F7] rounded-full transition duration-300'>Seçilmişlər</li>
                    </ul>
                </div>

                <div className='px-5 py-4 bg-[#F5F5F7]'>
                    <h3 className='nunito-font text-[#767676] text-[16px] font-light'>Sifarişi izləmək</h3>
                    <div className='nunito-font border border-[#bbb] flex justify-between rounded-lg overflow-hidden hover:shadow-[0_0_0_2px_rgba(239,51,64,0.1)] my-2'>
                        <input
                            type="text"
                            className='px-3 py-2 w-full 
                            focus:outline-none focus:ring-1 bg-white focus:ring-[#ef3344] 
                            focus:shadow-[0_0_0_2px_rgba(239,51,64,0.1)]
                            transition duration-100 ease-in-out placeholder:text-[16px] placeholder:nunito-font'
                            placeholder='Sifariş nömrəsi/E-poçt'
                        />
                        <button className='flex justify-center items-center px-2 border-l border-l-[#bbb]'>
                            <RxTriangleRight className='text-[#767676] text-[25px]' />
                        </button>
                    </div>

                    <div className='nunito-font flex justify-between mt-6 mb-2'>
                        <Link to={"/login2"} className='bg-[#1E1E1E] text-[#fff] font-light px-3 py-2 rounded-full cursor-pointer'>Daxil ol</Link>
                        <Link to={"/qeydiyyat"} className='bg-[#EF3441] text-[#fff] font-light px-3 py-2 rounded-full cursor-pointer'>Qeydiyyat</Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default BottomNavbarAccount;
