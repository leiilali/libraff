import React, { useContext, useEffect } from 'react'
import { WISHLIST } from '../../context/WishContext';
import { Link } from 'react-router-dom';
import EmptyWishlist from './EmptyWishlist';
import BookCards from '../Main/BookCards';

function Wishlist() {
  const { wish, clearWishList } = useContext(WISHLIST)

  useEffect(() => {
    document.title = "Əlavə edilmişlər"
  }, [])

  return (
    <div className='container'>
      {wish.length === 0 ? (
        <div>
          <EmptyWishlist />
          <div className='gap-3 bg-[#F5F5F7] p-5 rounded-2xl mt-10 flex justify-center items-center'>
            <Link to={"/"}>
              <button className='bg-[#1E1E1E] py-2 px-4 rounded-full text-white font-semibold nunito-font'>
                Alış-verişə davam et
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2'>
            {wish.map((item) => (
              <BookCards key={item.id} cardFor='wishlist' item={item} />
            ))}
          </div>

          <div className='bg-[#F5F5F7] p-5 rounded-2xl mt-10 flex justify-center items-center'>
            <div className='flex items-center gap-3'>
              <Link to={"/"}>
                <button className='bg-[#1E1E1E] py-2 px-4 rounded-full text-white font-semibold nunito-font'>
                  Alış-verişə davam et
                </button>
              </Link>
              <button
                onClick={clearWishList}
                className='border-2 border-[#EF3441] py-1.5 px-4 rounded-full font-semibold text-[#0f172a] nunito-font'>
                Sevimliləri təmizlə
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Wishlist