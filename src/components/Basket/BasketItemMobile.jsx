import React from 'react';
import { RiCloseCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

function BasketItemMobile({ item, deleteBasket, updateItemCount }) {

    const incDec = (x) => {
        if (item.count + x > 0) {
            updateItemCount(item.id, item.count + x);
        }
    };

    return (
        <div className='border border-[#E1E1E1] rounded-2xl overflow-hidden nunito-font my-6'>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="text-left p-4 text-[#767676] text-[16px] font-light border-b border-[#E1E1E1]">Məhsul</th>
                        <th className="text-left p-4 my-1  border-b border-[#E1E1E1]">
                            <div className='flex justify-end'>
                                <button onClick={() => deleteBasket(item.id)}>
                                    <RiCloseCircleFill className='text-[#ef3340] text-[20px]' />
                                </button>
                            </div>
                            <Link to={`/kitab/${item.id}`} className='flex flex-col items-start'>
                                <div className="w-[150px] h-[150px] overflow-hidden px-5">
                                    <img src={item.imageSource} alt={item.title} className="h-full object-cover shadow" />
                                </div>
                                <h2 className="font-light text-[17px] text-[#ef3340] pt-2">{item.title}</h2>
                                <p className="text-[13px] font-light text-[#767676] pt-1 pb-2">Kod: {item.id}</p>
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
                            <div className='flex items-center gap-2'>
                                <button onClick={() => incDec(-1)} className="px-2 bg-gray-200 rounded">-</button>
                                <span>{item.count} ədəd</span>
                                <button onClick={() => incDec(1)} className="px-2 bg-gray-200 rounded">+</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-4 border-b border-[#E1E1E1] text-[16px] font-light text-[#767676]">Cəm (₼)</td>
                        <td className="p-4 border-b border-[#E1E1E1] font-semibold">
                            {(item.discountedPrice * item.count).toFixed(2)} ₼
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default BasketItemMobile;
