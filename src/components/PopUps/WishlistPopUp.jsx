import React from 'react'
import { MdOutlineClose } from "react-icons/md";
import { Link } from 'react-router-dom';


function WishPopUp({ book, closePopup }) {
    if (!book) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 nunito-font">
            <div className="bg-white rounded-xl pt-3 overflow-hidden w-[600px] shadow-xl relative">
                <div className="px-4 pb-2 flex justify-between items-center">
                    <h2 className="font-light text-[22px]">Məhsul seçilmişlər siyahısına əlavə edildi.</h2>
                    <button onClick={closePopup}>
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
                </div>

                <div>
                    <div className='bg-[#F5F5F7] p-4 pb-4 mt-3 flex justify-start items-start'>

                        <Link to={"/wishlist-view"}>
                            <button className='bg-[#1E1E1E] py-2 px-4 rounded-full text-white font-semibold nunito-font'>
                                Seçilmiş məhsullar siyahısına baxın
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default WishPopUp