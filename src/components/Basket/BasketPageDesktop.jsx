import React, { useEffect } from 'react';
import { RiCloseCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

function BasketPageDesktop({ basket, deleteBasket}) {
    return (
        <>
            <div>
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
                                                <Link to={`/kitab/${item.id}`} className="flex items-center gap-4 ">
                                                    <div className="w-[150px] h-[150px] shrink-0 overflow-hidden px-5">
                                                        <img src={item.imageSource} alt={item.title} className="h-full object-cover object-center shadow" />
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

                        {basket?.length > 0 && (
                            <div className='border-[1px] mt-10 rounded-2xl border-[#E1E1E1] py-6 px-6 flex justify-end nunito-font'>
                                <div className='flex items-center gap-20'>
                                    <h3 className='text-[#a2a2a2] text-[20px] font-semibold'>Cəm məbləğ (₼)</h3>
                                    <h2 className='text-[20px] text-[#1e293b] font-semibold'>10.40 ₼</h2>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
}

export default BasketPageDesktop;
