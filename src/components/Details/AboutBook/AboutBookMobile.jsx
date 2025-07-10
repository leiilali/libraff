import { Collapse } from 'antd';
import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function AboutBookMobile({ books }) {
    const items = [
        {
            key: '1',
            label: <span className='text-[19px]'>Təsvir</span>,
            children: (
                <div className="w-[90%] mx-auto nunito-font my-6">
                    <p className='text-[20px] text-[#0f172a] '>{books.description}</p>
                </div>
            ),
        },
        {
            key: '2',
            label: <span className='text-[19px]'>Xüsusiyyəti </span>,
            children: (
                <div className="w-[65%] nunito-font my-6">
                    <div className='text-[16px] font-light text-[#767676]'>
                        <ul className=" flex flex-col gap-y-3">
                            <li>Cild ......................... <span className='text-[#0f172a] text-[18px] '>{books.cover}</span> </li>
                            <li>Dil ............................ <span className='text-[#0f172a] text-[18px]'>{books.language}</span> </li>
                            <li>Müəllif .................... <span className='text-[#0f172a] text-[18px]'>{books.authorName}</span> </li>
                            <li>Nəşriyyat ...................... <span className='text-[#0f172a] text-[18px]'>{books.publisher}</span> </li>
                            <li>Səhifə sayı ................... <span className='text-[#0f172a] text-[18px]'>{books.pageCount}</span> </li>
                        </ul>

                    </div>
                </div>
            ),
        },
        {
            key: '3',
            label: <span className='text-[19px]'>İstifadəçi rəyləri</span>,
            children: (
                <div>
                    <div className="w-[90%] mx-auto bg-[#f7f7f9] py-5 px-4 rounded-2xl text-center nunito-font my-6">
                        <h2 className="text-[20px] font-semibold text-[#0f172a]">
                            Məhsul haqqında rəy yazın
                        </h2>
                        <p className="text-[#0f172a] text-[14px] mb-2">
                            Fikirlərinizi digər istifadəçilərlə bölüşün
                        </p>
                        <button className="bg-[#1a1a1a] text-white px-4 py-2 rounded-full text-base font-semibold hover:opacity-90 transition">
                            Rəy yaz
                        </button>
                    </div>
                    <div className='py-[60px] border-[1px] border-[#EEEEEE] rounded-2xl w-[90%] mx-auto'>
                        <p className='text-[#bdc3c7] text-[16px] nunito-font text-center font-light'>Hələki rəy yoxdur</p>
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div>
            <div className='container'>
                <Collapse accordion
                    items={items}
                    ghost
                    expandIcon={({ isActive }) =>
                        isActive ? <AiOutlineMinus size={18} /> : <AiOutlinePlus size={18} />
                    }
                    expandIconPosition="end"
                    className="custom-collapse"
                />
            </div>
        </div>
    )
}

export default AboutBookMobile