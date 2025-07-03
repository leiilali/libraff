import React, { useContext, useRef, useEffect, useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { RiCloseCircleFill } from "react-icons/ri";
import { BASKET } from '../../../context/BasketContext';
import { Link } from 'react-router-dom';

function BottomNavbarBasket({ setIsOpen }) {
    const { basket, deleteBasket } = useContext(BASKET);
    const basketRef = useRef(null);

    useEffect(() => {
        function clickOutside(event) {
            if (!basketRef.current?.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", clickOutside);
        return () => {
            document.removeEventListener("mousedown", clickOutside);
        };
    }, [setIsOpen]);

    const totalPrice = basket
        .reduce((sum, item) => sum + item.discountedPrice * (item.count || 1), 0)
        .toFixed(2);

    return (
        <div className='relative' ref={basketRef}>
            <div className='w-full'>
                <div className='pt-[15px] px-3'>
                    <div className='flex items-center justify-between px-2'>
                        <h4 className='nunito-font text-[22px] text-[#0f172a] font-light'>Səbət</h4>
                        <IoCloseSharp
                            onClick={() => setIsOpen(false)}
                            className='text-[#767676] text-[28px] cursor-pointer'
                        />
                    </div>
                </div>

                <div className="h-[1px] bg-gray-300 w-full my-1"></div>

                <div className='py-4 px-5 flex flex-col items-start gap-4'>
                    {basket.length === 0 ? (
                        <p className='text-[#767676] py-6 text-[17px] nunito-font font-light text-center w-full'>
                            Səbət boşdur
                        </p>
                    ) : (
                        basket.map((item, index) => (
                            <div key={item.id} className="w-full">
                                <Link to={`/kitab/${item.id}`} className='flex justify-between items-start'>
                                    <div className='flex gap-4'>
                                        <div className='w-[40px] h-[50px]'>
                                            <img
                                                src={item.imageSource}
                                                alt="books_in_basket"
                                                className='w-full h-full object-cover object-center'
                                            />
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <h2 className='text-[#ef3340] text-[16px] nunito-font font-light'>{item.title}</h2>
                                            <h4 className='text-[#0f172a] text-[16px] nunito-font font-light'>{item.count} x {item.discountedPrice} ₼</h4>
                                        </div>
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            deleteBasket(item.id);
                                        }}
                                        className="text-[#767676] text-[22px]">
                                        <RiCloseCircleFill />
                                    </button>
                                </Link>

                                {index !== basket.length - 1 && (
                                    <div className="w-full h-[1px] bg-[#EEEEEE] mt-6"></div>
                                )}
                            </div>
                        ))
                    )}
                </div>

                <div className='pb-3 px-5 bg-[#F5F5F7]'>
                    <div className='flex justify-between items-center nunito-font text-[#0f172a] py-5'>
                        <h3 className='font-light text-[16px]'>Cəmi:</h3>
                        <h2 className='text-[20px] font-semibold'>{totalPrice} ₼</h2>
                    </div>
                    <Link to={"/sebet"} onClick={() => setIsOpen(false)} className='py-6 text-center '>
                        <h2 className='text-white bg-[#1E1E1E] py-2 rounded-full nunito-font font-semibold cursor-pointer'>Səbət</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BottomNavbarBasket;
