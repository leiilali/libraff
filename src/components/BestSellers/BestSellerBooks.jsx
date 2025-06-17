import React from 'react'
import { LuHeart } from "react-icons/lu";
import { RiShoppingBag4Line } from 'react-icons/ri';
import kitab from "../../assets/images/discountImages/kitab.png"
import { LuCopy } from "react-icons/lu";

function BestSellerBooks({ book }) {

    return (
        <div>
            <div className='bg-[#EEEEEE] w-full h-[1px] my-6'></div>
            <div className='flex items-start xl:items-center gap-10'>
                <div className='bg-[#F6F6F8] w-[250px] h-[250px] flex items-center justify-center rounded-xl '>
                    <img src={book.imageSource} alt={kitab} className='h-full' />
                    {/* <img src={book.imageSource} alt={book.title} className='h-full' /> */}
                </div>

                <div className='nunito-font w-[55%]'>
                    <div>
                        <h2 className='text-[20px] text-[#0f172a] font-semibold'>{book.title}</h2>
                        <h4 className='text-[#767676] text-[13px] flex items-center gap-2 my-2'>Kod: <LuCopy /> {book.uniqueCode} </h4>
                        <p className='text-[14px] text-[#0f172a] mt-2 mb-4 font-light'>
                            {book.description}</p>
                    </div>
                    <ul className='w-full flex flex-col gap-y-1'>
                        <li className="flex items-baseline gap-2 text-[12px] text-[#767676]">
                            <span className="whitespace-nowrap">Cild</span>
                            <span className="flex-1 border-b border-dotted border-gray-400"></span>
                            <span className="text-[#0f172a] text-[13px] whitespace-nowrap">Yumşaq</span>
                        </li>
                        <li className="flex justify-between items-center gap-2 text-[12px] text-[#767676]">
                            <span className="whitespace-nowrap">Dil</span>
                            <span className="flex-1 border-b border-dotted border-gray-400"></span>
                            <span className="text-[#0f172a] text-[13px] whitespace-nowrap">AZE</span>
                        </li>
                        <li className="flex justify-between items-center gap-2 text-[12px] text-[#767676]">
                            <span className="whitespace-nowrap">Müəllif</span>
                            <span className="flex-1 border-b border-dotted border-gray-400"></span>
                            <span className="text-[#ef3340] text-[13px] whitespace-nowrap">Elxan Elatlı</span>
                        </li>
                        <li className="flex justify-between items-center gap-2 text-[12px] text-[#767676]">
                            <span className="whitespace-nowrap">Nəşriyyat</span>
                            <span className="flex-1 border-b border-dotted border-gray-400"></span>
                            <span className="text-[#0f172a] text-[13px] whitespace-nowrap">AZE</span>
                        </li>
                        <li className="flex justify-between items-center gap-2 text-[12px] text-[#767676]">
                            <span className="whitespace-nowrap">Səhifə sayı</span>
                            <span className="flex-1 border-b border-dotted border-gray-400"></span>
                            <span className="text-[#0f172a] text-[13px] whitespace-nowrap">AZE</span>
                        </li>
                    </ul>
                </div>

                <div className='bg-[#EEEEEE] w-[1px] self-stretch mr-3'></div>

                <div className='nunito-font flex-col gap-8 hidden xl:flex'>
                    <div className='flex flex-col items-start'>
                        <div className='flex items-center gap-2'>
                            <h2 className='text-[22px] text-[#0f172a] font-semibold'>{book.discountedPrice}₼</h2>
                            <h3 className='text-[#767676] text-[14px] line-through font-light'>{book.price}₼</h3>
                        </div>
                        <span className='text-[#767676] text-[11px] border border-[#767676] px-1 py-[1px] rounded'>
                            {book.discountPercentage}%
                        </span>
                    </div>

                    <p className='text-[#374151] text-[14px]'>Mövcuddur</p>

                    <div className='nunito-font text-[#767676] text-[12px] font-light'>
                        <p className='max-w-[250px]'>"{book.title}" məhsulunu əldə etmək üçün minimal say <span className='font-semibold'>1</span> ədəd</p>
                    </div>


                    <div>
                        <button className='bg-[#ef3344] hover:bg-[#F24B56] font-semibold text-white text-[16px] flex items-center justify-center gap-2 py-1.5 px-2 mx-auto w-full rounded-full'>
                            <RiShoppingBag4Line className=" text-white cursor-pointer !text-[23px]" />
                            Səbətə əlavə et
                        </button>
                    </div>
                </div>


            </div>
            <div className='w-[70%] mx-auto mt-10'>
                <div className='nunito-font flex items-center xl:hidden '>
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col items-start '>
                            <div className='flex items-center gap-2'>
                                <h2 className='text-[22px] text-[#0f172a] font-semibold'>{book.discountedPrice}₼</h2>
                                <h3 className='text-[#767676] text-[14px] line-through font-light'>{book.price}₼</h3>
                            </div>
                            <span className='text-[#767676] text-[11px] border border-[#767676] px-1 py-[1px] rounded'>
                                {book.discountPercentage}%
                            </span>
                        </div>

                        <p className='text-[#374151] text-[14px]'>Mövcuddur</p>

                        <div className='nunito-font text-[#767676] text-[12px] font-light'>
                            <p className='max-w-[250px]'>"{book.title}" məhsulunu əldə etmək üçün minimal say <span className='font-semibold'>1</span> ədəd</p>
                        </div>
                    </div>

                    <div>
                        <button className='bg-[#ef3344] hover:bg-[#F24B56] font-semibold text-white text-[16px] flex items-center justify-center gap-2 py-2 px-7 mx-auto w-full rounded-full'>
                            <RiShoppingBag4Line className=" text-white cursor-pointer !text-[23px]" />
                            Səbətə əlavə et
                        </button>
                    </div>
                </div>
            </div>

            <div className='bg-[#EEEEEE] w-full h-[1px] my-6'></div>
        </div>
    )
}

export default BestSellerBooks