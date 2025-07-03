import React, { useRef, useEffect, useState, useContext } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { WISHLIST } from '../../context/WishContext';

function wishPopUpMobile({ book, closePopup }) {
    const popupRef = useRef(null);
    const [show, setShow] = useState(true);
    const {wish} = useContext(WISHLIST)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            setTimeout(closePopup, 300);
        }, 3000);

        return () => clearTimeout(timer);
    }, [closePopup]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!popupRef.current?.contains(event.target)) {
                setShow(false);
                setTimeout(closePopup, 300);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [closePopup]);

    return (
        <div className={`fixed inset-0 z-50 bg-black/40 flex justify-center items-end transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div ref={popupRef}
                className={`w-full bg-white rounded-t-xl transition-transform duration-300 ease-in-out ${show ? 'translate-y-0' : 'translate-y-full'
                    }`}>
                <div className='pt-[15px] px-3'>
                    <div className='flex items-center justify-between px-2'>
                        <h4 className='nunito-font text-[22px] text-[#0f172a] font-light'>Məhsul seçilmişlər siyahısına əlavə edilmişdir.</h4>
                        <IoCloseSharp
                            onClick={() => setShow(false)}
                            className='text-[#767676] text-[28px] cursor-pointer'
                        />
                    </div>
                </div>

                <div className="h-[1px] bg-gray-300 w-full my-1"></div>

                <div className='py-4 px-5 flex flex-col items-center gap-4 nunito-font'>
                    <img src={book.imageSource} alt={book.title} className="w-[60px] h-[80px] mx-2 object-cover " />
                    <div className="flex justify-between items-center w-full">
                        <p className="text-[#ef3344] text-[16px] mb-1 font-light">{book.title}</p>
                        <p className="text-[#0f172a] text-[16px] mb-1 font-light"> 1 x {book.discountedPrice} ₼</p>
                    </div>
                </div>

                <div className='py-6 px-5 bg-[#F5F5F7]'>
                    <div className='flex flex-col gap-4'>
                        <Link to={"/"} onClick={() => setShow(false)} className='text-center'>
                            <h2 className='text-[#0f172a] border-[#0f172a] border-2 py-2 rounded-full nunito-font font-semibold cursor-pointer'>
                                Alış-verişə davam et
                            </h2>
                        </Link>
                        <Link to={"/wishlist-view"} onClick={() => setShow(false)} className='text-center'>
                            <h2 className='text-white bg-[#EF3441] py-2 rounded-full nunito-font font-semibold cursor-pointer'>
                                Seçilmişlər siyahısına baxın
                            </h2>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default wishPopUpMobile;























