import React from 'react'
import EmptyWishlist from './EmptyWishlist';
import { Link } from 'react-router-dom';
import BookCards from '../Main/BookCards';


function Wishlist() {
  const wishlistItems = [
    {
      id: 1,
      title: 'Kitab 1',
      rate: 4.5,
      price: 15,
      discountedPrice: 20,
      imageSource: '/path/to/image1.jpg',
    },
    {
      id: 2,
      title: 'Kitab 2',
      rate: 4.0,
      price: 18,
      discountedPrice: 22,
      imageSource: '/path/to/image2.jpg',
    },
    // ... more dummy books
  ];
  return (
    // <div className='container'>

    //   {/* <EmptyWishlist /> */}


    //   <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2'>
    //     <BookCards cardFor='wishlist' />
    //     <BookCards cardFor='wishlist' />
    //     <BookCards cardFor='wishlist' />
    //     <BookCards cardFor='wishlist' />
    //     <BookCards cardFor='wishlist' />
    //   </div>



    //   <Link to={"/"}>
    //     <div className='text-center mt-20'>
    //       <button className='bg-[#1E1E1E] py-2 px-4 rounded-full text-white nunito-font'>Alış-verişə davam et</button>
    //     </div>
    //   </Link>


    // </div>
    <div className='container'>
      <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2'>
        {wishlistItems.map((item) => (
          <BookCards key={item.id} cardFor='wishlist' item={item} />
        ))}
      </div>

      <Link to={"/"}>
        <div className='text-center mt-20'>
          <button className='bg-[#1E1E1E] py-2 px-4 rounded-full text-white nunito-font'>
            Alış-verişə davam et
          </button>
        </div>
      </Link>
    </div>
  )
}

export default Wishlist