import React, { useContext, useState } from 'react'
import { MdOutlineStarHalf } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { WISHLIST } from '../../context/WishContext';
import WishPopUp from '../PopUps/WishlistPopUp';


function BookCards({ cardFor = 'main', item }) {
    if (!item) return null;

    const { wish, addWishList, deleteWishList } = useContext(WISHLIST)
    const [showWishPopup, setShowWishPopup] = useState(false);

    const isInWishlist = wish.some(w => w.id === item.id);
    const screenSize = () => window.innerWidth >= 768;

    const toggleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (isInWishlist) {
            deleteWishList(item.id);
        } else {
            addWishList(item);
            if (screenSize()) {
                setShowWishPopup(true);
                setTimeout(() => setShowWishPopup(false), 2000);
            }
        }
    };

    return (
        <>
            {showWishPopup && (<WishPopUp book={item} closePopup={() => setShowWishPopup(false)} />)}
            <Link to={`/kitab/${item.id}`}>
                <div className='group py-5 relative hover:shadow-2xl transition duration-300 rounded-2xl'>
                    <div
                        className={`absolute xl:right-2 top-7 right-1.5 transition-opacity duration-200 ${cardFor === 'wishlist' ? 'opacity-100' : isInWishlist ? 'opacity-100' : 'group-hover:opacity-100 opacity-0'
                            }`}
                    >
                        <div
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                if (cardFor === 'wishlist') {
                                    deleteWishList(item.id);
                                } else {
                                    toggleWishlist(e);
                                }
                            }}
                            className={`p-1.5 rounded-full cursor-pointer transition duration-200 ${cardFor === 'wishlist' ? 'bg-white' : 'bg-white'
                                }`}
                        >
                            {cardFor === 'wishlist' ? (
                                <RxCrossCircled className='text-[#808080] text-[22px] hover:text-[#cc0000] transition' />
                            ) : isInWishlist ? (
                                <FiHeart className='text-[#ee2d39] text-[18px]' />
                            ) : (
                                <FiHeart className='text-[#808080] text-[18px] hover:text-[#ee2d39] transition' />
                            )}
                        </div>
                    </div>

                    <div className='bg-[#F6F6F8]  rounded-2xl overflow-hidden aspect-[2/3]'>
                        <img src={item.imageSource}
                            alt={item.title}
                            className='w-full h-full object-cover object-center' />
                    </div>
                    <div className='nunito-font flex flex-col gap-4 pt-4 px-1.5'>
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
        </>
    )
}

export default BookCards