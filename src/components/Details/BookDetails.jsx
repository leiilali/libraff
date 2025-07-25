import React, { useContext, useState } from 'react'
import { RiShoppingBag4Line } from "react-icons/ri";
import { TbHeart } from "react-icons/tb";
import { TbHeartFilled } from "react-icons/tb";
import { BiMessageError } from "react-icons/bi";
import { BASKET } from '../../context/BasketContext';
import { WISHLIST } from '../../context/WishContext';
import { FaCircleCheck } from "react-icons/fa6";
import BasketPopUp from '../PopUps/BasketPopUp';
import WishPopUp from '../PopUps/WishlistPopUp';
import BasketPopUpMobile from '../PopUps/BasketPopUpMobile';
import WishlistPopUpMobile from '../PopUps/WishlistPopUpMobile';

function BookDetails({ books }) {
    const { basket, addToBasket } = useContext(BASKET)
    const { wish, addWishList, deleteWishList } = useContext(WISHLIST)
    const [showBasketPopup, setShowBasketPopup] = useState(false)
    const [showWishPopup, setShowWishPopup] = useState(false);
    const [showBasketPopupMobile, setShowBasketPopupMobile] = useState(false)
    const [showWishPopupMobile, setShowWishPopupMobile] = useState(false)

    const isInWishlist = wish.some(w => w.id === books.id);
    const inBasket = basket.find(item => item.id === books.id)
    const screenSize = () => window.innerWidth >= 640;
    
    const toggleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (isInWishlist) {
            deleteWishList(books.id);
        } else {
            addWishList(books);
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

        addToBasket(books);
        if (screenSize()) {
            setShowBasketPopup(true);
            setTimeout(() => setShowBasketPopup(false), 5000);
        } else {
            setShowBasketPopupMobile(true);
        }
    };

    return (
        <div>
            {showBasketPopup && <BasketPopUp book={books} closePopup={() => setShowBasketPopup(false)} />}
            {showWishPopup && <WishPopUp book={books} closePopup={() => setShowWishPopup(false)} />}
            {showBasketPopupMobile && <BasketPopUpMobile book={books} closePopup={() => setShowBasketPopupMobile(false)} />}
            {showWishPopupMobile && <WishlistPopUpMobile book={books} closePopup={() => setShowWishPopupMobile(false)} />}

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
                <div className='sm:container relative '>
                    <button
                        onClick={handleAddToBasket}
                        className='bg-[#ef3344] hover:bg-[#F24B56] font-semibold text-white text-[18px] flex items-center justify-center gap-2 py-3 mx-auto w-full rounded-full relative'
                    >
                        <RiShoppingBag4Line className="text-white cursor-pointer !text-[25px]" />
                        Səbətə əlavə et
                    </button>
                    {inBasket && (
                        <FaCircleCheck className="text-[#0f172a] bg-white rounded-full text-[16px] absolute top-0 right-1 border-1 border-white shadow-md" />
                    )}
                </div>
                <div className='flex items-center justify-between font-light '>
                    <div
                        onClick={toggleWishlist}
                        className='container cursor-pointer text-[#64748b] lg:text-[14px] text-[16px] flex items-center gap-1 hover:text-[#ef3344]'>
                        {isInWishlist ? (
                            <TbHeartFilled className='text-[25px] text-[#ef3344]' />
                        ) : (
                            <TbHeart className='text-[25px]' />
                        )}
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