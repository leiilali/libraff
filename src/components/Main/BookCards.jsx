import React from 'react'
import { MdOutlineStarHalf } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from 'react-router-dom';


function BookCards({ cardFor = 'main', item }) {
    if (!item) return null;
    return (
        <Link to={`/kitab/${item.id}`}>
            <div className='group px-2 py-5 relative hover:shadow-2xl transition duration-300 rounded-2xl'>
                <div className='absolute right-4 top-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                    <div className='bg-white p-1.5 rounded-full'>
                        {cardFor === 'wishlist' ? (
                            <RxCrossCircled className='text-[#808080] text-[24px] hover:text-[#cc0000] transition duration-200' />
                        ) : (
                            <FiHeart className='text-[#808080] text-xl hover:text-[#ee2d39] transition duration-200 ' />
                        )}
                    </div>
                </div>  

                <div className='bg-[#F6F6F8]  rounded-2xl overflow-hidden aspect-[2/3]'>
                    <img src={item.imageSource}
                        alt={item.title}
                        className='w-full object-cover object-center' />
                </div>
                <div className='nunito-font flex flex-col gap-4 pt-4'>
                    <h3 className='text-[16px] text-[#0f172a] font-light '>{item.title}</h3>
                    <div className='flex items-center gap-3'>
                        <h4 className='flex items-center text-[#959595] nunito-font'><MdOutlineStarHalf className='!text-[#CC0000]' /> {item.rate ?? 0}</h4>
                        <h5 className='text-[#959595] nunito-font'>(Rəylər: 4)</h5>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <h4 className='text-[18px] text-[#1e293b]'>{item.price} ₼</h4>
                        <h5 className='line-through text-[14px] text-[#767676]'>{item.discountedPrice} ₼</h5>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BookCards