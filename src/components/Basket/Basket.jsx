import React, { useState } from 'react'
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import kitab from "../../assets/images/discountImages/kitab.png"
import { Link } from 'react-router-dom';

function Basket() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='relative'>
            <div>
                <RiShoppingBag4Line
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-[#0f172a] cursor-pointer text-[28px]"
                />
            </div>

            <div className={`w-[340px] border-[0.5px] border-[#EBEBEB] rounded-b-xl rounded-t-none lg:rounded-t-xl 
                absolute top-10 right-0 z-50 bg-[#fff] overflow-hidden 
                shadow-[0_0_0_1px_rgba(0,0,0,0.05),_0_10px_15px_0_rgba(0,0,0,0.3)] 
                transition-all duration-300 ease-in-out flex flex-col gap-2
                ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>

                <div className='px-3 pt-[15px]'>
                    <div className='flex items-center justify-between px-2'>
                        <h4 className='nunito-font text-[14px] text-[#0f172a] font-semibold'>Səbətdəki məhsullar:</h4>
                        <IoCloseSharp onClick={() => setIsOpen(false)} className='text-[#767676] text-[28px] cursor-pointer' />
                    </div>
                </div>

                <div className="h-[1px] bg-gray-300 w-full my-1"></div>


                <div className='px-5 py-4 flex items-center gap-4'>
                    <div className='w-[40px] h-[50px]'>
                        <img src={kitab} alt="books_in_basket" className='w-full h-full object-cover object-center' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h2 className='text-[#ef3340] text-[14px] nunito-font font-light'>Anne Karenina</h2>
                        <h4 className='text-[#0f172a] text-[14px] nunito-font font-light'> 1 x 10.32  ₼</h4>
                    </div>
                </div>


                <Link to={"/sebet"} className='px-5 py-6 text-center bg-[#F5F5F7] '>
                    <h2 className='border-2 border-[#EF3441] py-1.5 rounded-full nunito-font font-semibold cursor-pointer'>Səbət</h2>
                </Link>
            </div>
        </div>
    )
}

export default Basket
