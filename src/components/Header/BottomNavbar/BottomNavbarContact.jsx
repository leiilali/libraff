import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

function BottomNavbarContact({ setIsOpen }) {
    return (
        <>
            <div className='w-full nunito-font'>
                <div className='pt-[15px] px-3'>
                    <div className='flex items-center justify-between px-2'>
                        <h4 className='nunito-font text-[22px] text-[#0f172a] font-light'>Əlaqə</h4>
                        <IoCloseSharp
                            onClick={() => setIsOpen(false)}
                            className='text-[#767676] text-[28px] cursor-pointer'
                        />
                    </div>
                </div>
                <div className="h-[1px] bg-gray-300 w-full my-1"></div>
                <div className='px-5 py-4'>
                    <h2 className='text-[20px] text-[#0f172a] font-semibold'>+994-50-290-44-96</h2>
                    <h3 className='text-[13px] text-[#767676] font-light'>B.e.-C. : 9:00-18:00</h3>
                </div>
                <div className='px-5'>
                    <button className='bg-[#25d366] text-white text-[17px] flex justify-center gap-3 font-light items-center py-2 rounded-full text-center w-full'>
                        <FaWhatsapp className='text-[27px]' />
                        <p>"WhatsApp"la əlaqə saxlayın </p>
                    </button>
                </div>
                <div className="h-[1px] mt-7 bg-[#eeeeeeae] w-full px-5"></div>
                <div className='px-5 pt-5 pb-7 font-light'>
                    <h3 className='text-[#767676] text-[13px] '>E-poçt</h3>
                    <h2 className='text-[16px] text-[#0f172a]'>online@libraff.az</h2>
                </div>
            </div>
        </>
    )
}

export default BottomNavbarContact