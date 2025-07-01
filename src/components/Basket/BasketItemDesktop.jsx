import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiCloseCircleFill } from "react-icons/ri";

function BasketItemDesktop({ item, deleteBasket, updateItemCount }) {

    const incDec = (x) => {
        const newCount = item.count + x;
        if (newCount > 0) {
            updateItemCount(item.id, newCount);
        } else {
            deleteBasket(item.id);
        }
    };
    return (
        <tr className="border-b [border-color:#E1E1E1]">
            <td className="py-4">
                <div className="flex items-center gap-4 overflow-hidden relative">
                    <Link to={`/kitab/${item.id}`} className="flex items-center gap-4">
                        <div className="w-[150px] h-[150px] overflow-hidden px-5">
                            <img src={item.imageSource} alt={item.title} className="h-full object-cover shadow" />
                        </div>
                        <div>
                            <div className="font-light nunito-font text-[#ef3340]">{item.title}</div>
                            <div className="text-[12px] font-light nunito-font text-[#767676] pt-1">Kod: {item.id}</div>
                        </div>
                    </Link>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            deleteBasket(item.id);
                        }}
                        className="text-[#ef3340] text-lg absolute top-2 right-2"
                    >
                        <RiCloseCircleFill />
                    </button>
                </div>
            </td>
            <td className="text-right py-4">
                <div className="flex justify-end items-center gap-2">
                    <span className="text-[#ef3340] line-through text-[14px] font-light">{item.price} ₼</span>
                    <span className="text-[#0d1219] text-[14px] font-light">{item.discountedPrice} ₼</span>
                </div>
            </td>
            <td className="text-center py-4">
                <div className='flex items-center justify-center gap-2'>
                    <button
                        onClick={(e) => {
                            incDec(-1);
                            e.stopPropagation();
                            e.preventDefault();
                        }} 
                    className="px-2 bg-gray-200 rounded">-</button>
                    <span>{item.count} ədəd</span>
                    <button onClick={() => incDec(1)} className="px-2 bg-gray-200 rounded">+</button>
                </div>
            </td>
            <td className="text-right py-4 font-medium">
                {(item.discountedPrice * item.count).toFixed(2)} ₼
            </td>
        </tr>
    );
}

export default BasketItemDesktop;
