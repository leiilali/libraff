import React, { useContext } from 'react';
import { RiCloseCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { FaRegCheckCircle } from "react-icons/fa";
import { BASKET } from '../../context/BasketContext';

function BasketPage() {
    const { basket, deleteBasket, clearBasket } = useContext(BASKET);

    return (
        <div className='container'>
            <h2 className='text-[28px] text-[#0f172a] my-5 font-semibold'>Səbətdə olanlar</h2>

            {basket?.length === 0 ? (
                <div className="text-center text-[#767676] text-[16px] my-10 nunit-font font-light">
                    Səbətiniz boşdur
                </div>
            ) : (
                <>
                    <table className="w-full text-left">
                        <thead className="text-gray-500 border-b [border-color:#E1E1E1]">
                            <tr className='nunito-font text-[14px] text-[#767676]'>
                                <th className="p-3 font-light">Məhsul</th>
                                <th className="p-3 text-right font-light">Qiyməti</th>
                                <th className="p-3 text-center font-light">Say</th>
                                <th className="p-3 text-right font-light">Cəm (₼)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {basket.map((item) => (
                                <tr key={item.id} className="border-b [border-color:#E1E1E1]">
                                    <td className="py-4">
                                        <div className="flex items-center gap-4 max-w-full overflow-hidden relative">
                                            <Link
                                                to={`/kitab/${item.id}`}
                                                className="flex items-center gap-4 "
                                            >
                                                <div className="w-[150px] h-[150px] shrink-0 overflow-hidden px-5">
                                                    <img
                                                        src={item.imageSource}
                                                        alt={item.title}
                                                        className="h-full object-cover object-center shadow"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="font-light nunito-font text-[#ef3340]">
                                                        {item.title}
                                                    </div>
                                                    <div className="text-[12px] font-light nunito-font text-[#767676] pt-1">
                                                        Kod: {item.id}
                                                    </div>
                                                </div>
                                            </Link>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    deleteBasket(item.id);
                                                }}
                                                className="text-[#ef3340] text-lg absolute top-2 right-2">
                                                <RiCloseCircleFill />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="text-right py-4">
                                        <div className="flex justify-end items-center gap-2">
                                            <span className="text-[#ef3340] line-through text-[14px] font-light">
                                                {item.price} ₼
                                            </span>
                                            <span className="text-[#0d1219] text-[14px] font-light">
                                                {item.discountedPrice} ₼
                                            </span>
                                        </div>
                                    </td>
                                    <td className="text-center py-4">
                                        <input
                                            type="number"
                                            className="w-16 border nunito-font rounded px-2 py-1 text-center [border-color:#E1E1E1]"
                                            min="1"
                                            defaultValue={1}
                                        />
                                    </td>
                                    <td className="text-right py-4 font-medium">
                                        {item.discountedPrice.toFixed(2)} ₼
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className='border-[1px] mt-10 rounded-2xl border-[#E1E1E1] py-6 px-6 flex justify-end nunito-font'>
                        <div className='flex items-center gap-20'>
                            <h3 className='text-[#a2a2a2] text-[20px] font-semibold'>Cəm məbləğ (₼) </h3>
                            <h2 className='text-[20px] text-[#1e293b] font-semibold'>10.40 ₼</h2>
                        </div>
                    </div>


                </>
            )}
            <div className='bg-[#F5F5F7] p-5 rounded-2xl mt-10 flex justify-between items-center'>
                <div className='flex items-center gap-3'>
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
                    <button className=' bg-[#EF3441] py-2 px-4 rounded-full font-semibold text-[#fff] nunito-font flex items-center gap-2'>
                        <FaRegCheckCircle />
                        Sifarişi təsdiqlə
                    </button>
                )}

            </div>
        </div>
    );
}

export default BasketPage;
