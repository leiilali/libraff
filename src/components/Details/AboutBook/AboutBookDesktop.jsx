import React from 'react'
import { Tabs } from 'antd';
import '../../../style/bookDetails.css'

function AboutBookDesktop({ books }) {
    return (
        <div>
            <div className="p-4 container ">
                <Tabs
                    defaultActiveKey="1"
                    className="custom-tabs"
                    centered
                    items={[
                        {
                            label: (
                                <span className="text-[20px] nunito-font font-semibold text-[#767676] hover:text-[#0f172a]">
                                    Təsvir
                                </span>
                            ),
                            key: '1',
                            children: (
                                <div className="w-[65%] mx-auto nunito-font my-6">
                                    <p className='text-[20px] text-[#0f172a] '>{books.description}</p>
                                </div>
                            ),
                        },
                        {
                            label: (
                                <span className="text-[20px] nunito-font font-semibold text-[#767676] hover:text-[#0f172a]">
                                    Xüsusiyyəti
                                </span>
                            ),
                            key: '2',
                            children: (
                                <div className="w-[65%] mx-auto nunito-font my-6">
                                    <div className='flex justify-between text-[16px] font-light text-[#767676]'>
                                        <ul className="pl-5 flex flex-col gap-y-3">
                                            <li>Cild ................................... <span className='text-[#0f172a] text-[18px] '>{books.cover}</span> </li>
                                            <li>Dil ...................................... <span className='text-[#0f172a] text-[18px]'>{books.language}</span> </li>
                                            <li>Müəllif .............................. <span className='text-[#0f172a] text-[18px]'>{books.authorName}</span> </li>
                                        </ul>
                                        <ul className="pl-5 flex flex-col gap-y-3">
                                            <li>Nəşriyyat ................................ <span className='text-[#0f172a] text-[18px]'>{books.publisher}</span> </li>
                                            <li>Səhifə sayı ............................. <span className='text-[#0f172a] text-[18px]'>{books.pageCount}</span> </li>
                                        </ul>
                                    </div>
                                </div>
                            ),
                        },
                        {
                            label: (
                                <span className="text-[20px] nunito-font font-semibold text-[#767676] hover:text-[#0f172a]">
                                    İstifadəçi rəyləri
                                </span>
                            ),
                            key: '3',
                            children: (
                                <div>
                                    <div className="w-[90%] md:w-[75%] lg:w-[65%] mx-auto bg-[#f7f7f9] py-5 px-4 rounded-2xl text-center nunito-font my-6">
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
                                    <div className='py-[60px]'>
                                        <p className='text-[#bdc3c7] text-[16px] nunito-font text-center font-light'>Hələki rəy yoxdur</p>
                                    </div>
                                </div>
                            ),
                        },
                    ]}
                />

            </div>
        </div>
    )
}

export default AboutBookDesktop