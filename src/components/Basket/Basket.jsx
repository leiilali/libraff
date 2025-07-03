import React, { useContext, useState, useRef, useEffect } from 'react';
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { BASKET } from '../../context/BasketContext';
import "../../style/basket.css"

function Basket() {
    const [isOpen, setIsOpen] = useState(false);
    const { basket } = useContext(BASKET);
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
    }, []);

    return (
        <div className='relative' ref={basketRef}>
            <div className='relative'>
                <RiShoppingBag4Line
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-[#0f172a] cursor-pointer text-[28px]"
                />
                {basket.length > 0 && (
                    <span className="absolute -top-1 -right-1  bg-[#EF3441] text-white text-[11px] w-[16px] h-[16px] nunito-font flex items-center justify-center rounded-full font-semibold">
                        {basket.length}
                    </span>
                )}
            </div>

            <div className={`xl:w-[340px] w-[386px] border-[0.5px] border-[#EBEBEB] rounded-b-xl rounded-t-none lg:rounded-t-xl 
                absolute top-10 xl:right-0 -right-2  z-50 bg-[#fff] overflow-hidden 
                shadow-[0_0_0_1px_rgba(0,0,0,0.05),_0_10px_15px_0_rgba(0,0,0,0.3)] 
                transition-all duration-300 ease-in-out flex flex-col gap-2
                ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>

                <div className='px-3 pt-[15px]'>
                    <div className='flex items-center justify-between px-2'>
                        <h4 className='nunito-font text-[16px] text-[#0f172a] font-semibold'>Səbətdəki məhsullar:</h4>
                        <IoCloseSharp
                            onClick={() => setIsOpen(false)}
                            className='text-[#767676] text-[28px] cursor-pointer'
                        />
                    </div>
                </div>

                <div className="h-[1px] bg-gray-300 w-full my-1"></div>

                {/* <div className='px-5 py-4 flex flex-col items-start gap-4'>
                    {basket.length === 0 ? (
                        <p className='text-[#767676] text-[14px] nunito-font font-light text-center w-full'>
                            Səbət boşdur
                        </p>
                    ) : (
                        basket.map((item, index) => (
                            <div key={item.id} className="w-full">
                                <Link to={`/kitab/${item.id}`} className='flex items-center gap-4'>
                                    <div className='w-[40px] h-[50px]'>
                                        <img
                                            src={item.imageSource}
                                            alt="books_in_basket"
                                            className='w-full h-full object-cover object-center'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <h2 className='text-[#ef3340] text-[14px] nunito-font font-light'>{item.title}</h2>
                                        <h4 className='text-[#0f172a] text-[14px] nunito-font font-light'> {item.count} x {item.discountedPrice} ₼</h4>
                                    </div>
                                </Link>

                                {index !== basket.length - 1 && (
                                    <div className="w-full h-[1px] bg-[#EEEEEE] mt-6"></div>
                                )}
                            </div>
                        ))
                    )}
                </div> */}
                <div className='px-5 py-4 flex flex-col items-start gap-4 max-h-[320px] overflow-y-auto custom-scrollbar'>
                    {basket.length === 0 ? (
                        <p className='text-[#767676] text-[14px] nunito-font font-light text-center w-full'>
                            Səbət boşdur
                        </p>
                    ) : (
                        basket.map((item, index) => (
                            <div key={item.id} className="w-full">
                                <Link to={`/kitab/${item.id}`} className='flex items-center gap-4'>
                                    <div className='w-[40px] h-[50px]'>
                                        <img
                                            src={item.imageSource}
                                            alt="books_in_basket"
                                            className='w-full h-full object-cover object-center'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <h2 className='text-[#ef3340] text-[14px] nunito-font font-light'>{item.title}</h2>
                                        <h4 className='text-[#0f172a] text-[14px] nunito-font font-light'> {item.count} x {item.discountedPrice} ₼</h4>
                                    </div>
                                </Link>

                                {index !== basket.length - 1 && (
                                    <div className="w-full h-[1px] bg-[#EEEEEE] mt-6"></div>
                                )}
                            </div>
                        ))
                    )}
                </div>



                <Link to={"/sebet"} className='px-5 py-6 text-center bg-[#F5F5F7]' onClick={() => setIsOpen(false)}>
                    <h2 className='border-2 border-[#EF3441] py-1.5 rounded-full nunito-font font-semibold cursor-pointer'>Səbət</h2>
                </Link>
            </div>
        </div>
    );
}

export default Basket;
