import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegCheckCircle } from "react-icons/fa";
import { BASKET } from '../../context/BasketContext';
import BasketPageMobile from './BasketPageMobile';
import BasketPageDesktop from './BasketPageDesktop';
import Breadcrumbs from '../Main/Breadcrumbs';

function BasketPage() {
    const { basket, deleteBasket, clearBasket, addToBasket, updateItemCount } = useContext(BASKET);

    useEffect(() => {
        document.title = "Səbət | Libraff"
    }, [])

    return (
        <div className='container'>
            <Breadcrumbs />
            {basket?.length > 0 && (
                <h2 className='text-[28px] text-[#0f172a] my-5 font-semibold'>Səbətdə olanlar</h2>
            )}

            {/* desktop basket */}
            <div className="hidden md:block">
                <BasketPageDesktop
                    basket={basket}
                    deleteBasket={deleteBasket}
                    clearBasket={clearBasket}
                    addToBasket={addToBasket}
                    updateItemCount={updateItemCount}
                />
            </div>

            {/* mobile basket*/}
            <div className="block md:hidden">
                <BasketPageMobile
                    basket={basket}
                    deleteBasket={deleteBasket}
                    clearBasket={clearBasket}
                    addToBasket={addToBasket}
                    updateItemCount={updateItemCount}
                />
            </div>

            <div className='bg-[#F5F5F7] p-5 rounded-2xl mt-10 flex flex-col md:flex-row md:justify-between gap-4 '>
                <div className='flex items-center gap-3 justify-between '>
                    <Link to={"/"}>
                        <button className='bg-[#1E1E1E] py-2 px-4 rounded-full text-white font-semibold nunito-font'>
                            Alış-verişə davam et
                        </button>
                    </Link>
                    {basket?.length > 0 && (
                        <button
                            onClick={clearBasket}
                            className='border-2 border-[#EF3441] py-1.5 px-4 rounded-full font-semibold text-[#0f172a] nunito-font'>
                            Səbəti təmizlə
                        </button>
                    )}
                </div>
                {basket?.length > 0 && (
                    <button className=' bg-[#EF3441] py-2 px-4 rounded-full font-semibold text-[#fff] nunito-font flex justify-center items-center gap-2'>
                        <FaRegCheckCircle />
                        Sifarişi təsdiqlə
                    </button>
                )}

            </div>
        </div>
    );
}

export default BasketPage;
