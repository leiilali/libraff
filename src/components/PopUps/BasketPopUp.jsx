import React, { useContext } from 'react'
import { MdOutlineClose } from "react-icons/md";
import { Link } from 'react-router-dom';
import { BASKET } from '../../context/BasketContext';

function BasketPopUp({ book, closePopup }) {
    const { basket } = useContext(BASKET)
    if (!book) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 nunito-font">
            <div className="bg-white rounded-xl pt-3 overflow-hidden w-[600px] shadow-xl relative">
                <div className="px-4 pb-2 flex justify-between items-center">
                    <h2 className="font-light text-[22px]">Məhsul səbətə əlavə edildi.</h2>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            closePopup();
                        }}
                    >
                        <MdOutlineClose className="text-[25px] text-[#767676]" />
                    </button>
                </div>
                <div className="bg-[#E1E1E1] h-[1px] w-full"></div>


                <div className='px-5 pt-5'>
                    <div className=' flex items-center gap-5'>
                        <img src={book.imageSource} alt={book.title} className="w-[60px] mx-2 h-[80px] object-cover " />
                        <div className="flex justify-between items-center w-full">
                            <p className="text-[#ef3344] text-[14px] mb-1 font-light">{book.title}</p>
                            <p className="text-[#0f172a] text-[14px] mb-1 font-light"> 1 x {book.discountedPrice} ₼</p>
                        </div>
                    </div>
                    <div className="bg-[#E1E1E1] h-[0.7px] w-full mt-6 mb-3"></div>

                </div>


                <div className='px-5 flex items-center justify-between font-semibold'>
                    <p className="text-[14px] font-light text-[#767676]">
                        Səbətdə {basket.reduce((total, item) => total + item.count, 0)} ədəd məhsul var
                    </p>
                    <h2 className='text-[14px] text-[#0f172a]'>
                        Səbətin ilkin dəyəri: {basket.reduce((total, item) => total + item.discountedPrice * item.count, 0).toFixed(2)} ₼
                    </h2>
                </div>

                <div>
                    <div className='bg-[#F5F5F7] p-4 pb-4 mt-3 flex justify-between items-center'>

                        <Link to={"/"}>
                            <button className='bg-[#1E1E1E] py-2 px-4 rounded-full text-white font-semibold nunito-font'>
                                Alış-verişə davam et
                            </button>
                        </Link>
                        <Link to={"/sebet"}>
                            <button
                                className=' bg-[#EF3441] py-2 px-4 rounded-full font-semibold text-[#fff] nunito-font'>
                                Səbət
                            </button>
                        </Link>

                    </div>
                </div>

            </div>
        </div >
    );
}

export default BasketPopUp