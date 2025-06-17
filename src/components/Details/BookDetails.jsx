import React from 'react'
import { RiShoppingBag4Line } from "react-icons/ri";
import { LuHeart } from "react-icons/lu";
import { BiMessageError } from "react-icons/bi";





function BookDetails({books}) {
    return (
        <div>

            <div className='mt-10 nunito-font'>
                <div className='sm:container'>
                    <h2 className='text-[32px] text-[#1e293b]'>{books.title}</h2>
                    <h4 className='text-[#64748b] font-light text-[16px] underline decoration-1 underline-offset-2'>{books.authorName}</h4>
                </div>
                <div className='sm:container my-5'>
                    <h3 className='text-[28px] text-[#1e293b] font-semibold'>{books.discountedPrice} ₼</h3>
                    <div className='flex items-center gap-2'>
                        <h4 className='text-[18px] font-light text-[#767676] line-through'>{books.price} ₼</h4>
                        <span className='px-[6px] py-[2px] bg-[#ee2d39] font-light text-white rounded-md text-[12px]'>{books.discountPercentage}%</span>
                    </div>
                </div>
                <div className='sm:container '>
                    <button className='bg-[#ef3344] hover:bg-[#F24B56] font-semibold text-white text-[18px] flex items-center justify-center gap-2 py-3 mx-auto w-full rounded-full'>
                        <RiShoppingBag4Line className=" text-white cursor-pointer !text-[25px]" />
                        Səbətə əlavə et
                    </button>
                </div>
                <div className='flex items-center justify-between font-light '>
                    <div className='container text-[#64748b] lg:text-[14px] text-[16px] flex items-center gap-1 hover:text-[#ef3344]'>
                        <LuHeart className='text-[24px] ' />
                        Seçilmiş
                    </div>
                    <div className='container text-[#64748b] lg:text-[14px] text-[16px]  flex items-center gap-1 hover:text-[#ef3344]'>
                        <BiMessageError className='text-[35px] lg:text-[26px] ' />
                        Sizə necə kömək edə bilərik?
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BookDetails