import React from 'react'
import { RiCloseCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

function BasketPageMobile({ basket, deleteBasket }) {
    return (
        <>
            <div>
                {basket?.length === 0 ? (
                    <div className="text-center text-[#767676] text-[16px] my-10 nunit-font font-light">
                        Səbətiniz boşdur
                    </div>
                ) : (
                    <div >
                        {basket.map((item) => (
                            <div className='border border-[#E1E1E1] rounded-2xl overflow-hidden nunito-font my-10'>
                                <table className="w-full ">
                                    <thead className="bg-[#fff]">
                                        <tr>
                                            <th className="text-left p-4 text-[#767676] text-[16px] font-light border-b border-[#E1E1E1]">Məhsul</th>
                                            <th className="text -left p-4 text-[#767676] text-sm border-b border-[#E1E1E1]">
                                                <div className='flex justify-end py-1'>
                                                    <button
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            deleteBasket(item.id);
                                                        }}>
                                                        <RiCloseCircleFill className='text-[#ef3340] text-[20px]' />
                                                    </button>
                                                </div>
                                                <Link to={`/kitab/${item.id}`} className='flex flex-col items-start'>
                                                    <div className="w-[150px] h-[150px] shrink-0 overflow-hidden px-5">
                                                        <img src={item.imageSource} alt={item.title} className="h-full object-cover object-center shadow" />
                                                    </div>
                                                    <h2 className="font-light nunito-font text-[17px] text-[#ef3340] pt-3">{item.title}</h2>
                                                    <p className="text-[13px] font-light nunito-font text-[#767676] pt-1">Kod: {item.id}</p>
                                                </Link>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-4 border-b border-[#E1E1E1] text-[16px] font-light text-[#767676]">Qiyməti</td>
                                            <td className="p-4 border-b border-[#E1E1E1]">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[#dc2626] line-through text-[16px] font-light">
                                                        {item.price} ₼
                                                    </span>
                                                    <span className="text-[#0d1219] text-[16px] font-light">
                                                        {item.discountedPrice} ₼
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b border-[#E1E1E1] text-[16px] font-light text-[#767676]">Say</td>
                                            <td className="p-4 border-b border-[#E1E1E1]">
                                                <input
                                                    type="number"
                                                    className="w-full border nunito-font rounded-lg px-2 py-1 text-center [border-color:#E1E1E1]"
                                                    min="1"
                                                    defaultValue={1}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b border-[#E1E1E1] text-[16px] font-light text-[#767676]">Cəm (₼)</td>
                                            <td className="p-4 border-b border-[#E1E1E1] font-semibold">
                                                {item.discountedPrice.toFixed(2)} ₼
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ))}
                        {basket?.length > 0 && (
                            <div className='border-[1px] mt-10 rounded-2xl border-[#E1E1E1] py-6 px-6 flex justify-end nunito-font'>
                                <div className='flex items-center gap-20'>
                                    <h3 className='text-[#a2a2a2] text-[20px] font-semibold'>Cəm məbləğ (₼)</h3>
                                    <h2 className='text-[20px] text-[#1e293b] font-semibold'>10.40 ₼</h2>
                                </div>
                            </div>
                        )}
                    </div>
                )}

            </div>
        </>
    )
}

export default BasketPageMobile