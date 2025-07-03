import React, { useContext, useState } from 'react';
import { RiShoppingBag4Line } from 'react-icons/ri';
import { LuCopy } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import { BASKET } from '../../context/BasketContext';
import { WISHLIST } from '../../context/WishContext';
import BasketPopUp from '../PopUps/BasketPopUp';
import WishPopUp from '../PopUps/WishlistPopUp';
import BasketPopUpMobile from '../PopUps/BasketPopUpMobile';
import WishlistPopUpMobile from '../PopUps/WishlistPopUpMobile';

function BestSellerBooks({ book }) {
    const { basket, addToBasket } = useContext(BASKET);
    const { wish, addWishList, deleteWishList } = useContext(WISHLIST);

    const [showBasketPopup, setShowBasketPopup] = useState(false);
    const [showWishPopup, setShowWishPopup] = useState(false);
    const [showBasketPopupMobile, setShowBasketPopupMobile] = useState(false)
    const [showWishPopupMobile, setShowWishPopupMobile] = useState(false)

    const inWishlist = wish.some(w => w.id === book.id);
    const inBasket = basket.find(item => item.id === book.id)
    const screenSize = () => window.innerWidth >= 640;

    const toggleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (inWishlist) {
            deleteWishList(book.id);
        } else {
            addWishList(book);
            if (screenSize()) {
                setShowWishPopup(true);
                setTimeout(() => setShowWishPopup(false), 3000);
            } else {
                setShowWishPopupMobile(true);
            }
        }
    };
    const handleAddToBasket = (e) => {
        e.preventDefault();
        e.stopPropagation();

        addToBasket(book);
        if (screenSize()) {
            setShowBasketPopup(true);
            setTimeout(() => setShowBasketPopup(false), 5000);
        } else {
            setShowBasketPopupMobile(true);
        }
    };

    return (
        <div className="group relative">
            {showBasketPopup && <BasketPopUp book={book} closePopup={() => setShowBasketPopup(false)} />}
            {showWishPopup && <WishPopUp book={book} closePopup={() => setShowWishPopup(false)} />}
            {showBasketPopupMobile && <BasketPopUpMobile book={book} closePopup={() => setShowBasketPopupMobile(false)} />}
            {showWishPopupMobile && <WishlistPopUpMobile book={book} closePopup={() => setShowWishPopupMobile(false)} />}

            <div className='bg-[#EEEEEE] w-full h-[1px] my-6'></div>

            <div className='flex flex-col xl:flex-row w-full items-center xl:items-center gap-10 px-4'>
                <div className='relative w-[250px] h-[250px] flex items-center justify-center rounded-xl bg-[#F6F6F8] group'>
                    <img src={book.imageSource} alt={book.title} className='h-full' />
                    <div
                        onClick={toggleWishlist}
                        className="absolute top-3 right-3 cursor-pointer opacity-0 group-hover:opacity-100 transition"
                    >
                        <FiHeart
                            className={`text-[24px] transition ${inWishlist ? 'text-[#ef3344]' : 'text-[#808080] hover:text-[#ef3344]'
                                }`}
                        />
                    </div>
                </div>

                <div className='nunito-font  xl:w-[55%]'>
                    <h2 className='text-[20px] text-[#0f172a] font-semibold'>{book.title}</h2>
                    <h4 className='text-[#767676] text-[13px] flex items-center gap-2 my-2'>
                        Kod: <LuCopy /> {book.uniqueCode}
                    </h4>
                    <p className='text-[14px] text-[#0f172a] mt-2 mb-4 font-light'>{book.description}</p>

                    <ul className='w-full flex flex-col gap-y-1'>
                        <li className="flex items-baseline gap-2 text-[12px] text-[#767676]">
                            <span className="whitespace-nowrap">Cild</span>
                            <span className="flex-1 border-b border-dotted border-gray-400"></span>
                            <span className="text-[#0f172a] text-[13px] whitespace-nowrap">{book.cover}</span>
                        </li>
                        <li className="flex justify-between items-center gap-2 text-[12px] text-[#767676]">
                            <span className="whitespace-nowrap">Dil</span>
                            <span className="flex-1 border-b border-dotted border-gray-400"></span>
                            <span className="text-[#0f172a] text-[13px] whitespace-nowrap">{book.language}</span>
                        </li>
                        <li className="flex justify-between items-center gap-2 text-[12px] text-[#767676]">
                            <span className="whitespace-nowrap">Müəllif</span>
                            <span className="flex-1 border-b border-dotted border-gray-400"></span>
                            <span className="text-[#ef3340] text-[13px] whitespace-nowrap">{book.author}</span>
                        </li>
                        <li className="flex justify-between items-center gap-2 text-[12px] text-[#767676]">
                            <span className="whitespace-nowrap">Nəşriyyat</span>
                            <span className="flex-1 border-b border-dotted border-gray-400"></span>
                            <span className="text-[#0f172a] text-[13px] whitespace-nowrap">{book.publisher}</span>
                        </li>
                        <li className="flex justify-between items-center gap-2 text-[12px] text-[#767676]">
                            <span className="whitespace-nowrap">Səhifə sayı</span>
                            <span className="flex-1 border-b border-dotted border-gray-400"></span>
                            <span className="text-[#0f172a] text-[13px] whitespace-nowrap">{book.pageCount}</span>
                        </li>
                    </ul>
                </div>

                <div className='bg-[#EEEEEE] w-[1px] self-stretch mr-3 hidden xl:block'></div>

                <div className='nunito-font flex flex-col gap-4 w-full xl:w-auto'>
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

                    <div className='text-[#767676] text-[12px] font-light'>
                        <p className='max-w-[250px]'>
                            "{book.title}" məhsulunu əldə etmək üçün minimal say <span className='font-semibold'>1</span> ədəd
                        </p>
                    </div>

                    <div className='relative'>
                        <button
                            onClick={handleAddToBasket}
                            className='bg-[#ef3344] hover:bg-[#F24B56] font-semibold text-white text-[16px] flex items-center justify-center gap-2 py-1.5 px-2 mx-auto w-full rounded-full'>
                            <RiShoppingBag4Line className="text-white cursor-pointer !text-[23px]" />
                            Səbətə əlavə et
                        </button>
                        {inBasket && (
                            <FaCircleCheck className="text-[#0f172a] bg-white rounded-full text-[16px] absolute top-0 right-0 border-1 border-white shadow-md" />
                        )}
                    </div>
                </div>
                
            </div>

            <div className='bg-[#EEEEEE] w-full h-[1px] my-6'></div>
        </div>
    );
}

export default BestSellerBooks;
