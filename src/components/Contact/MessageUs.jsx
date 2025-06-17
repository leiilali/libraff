import React, { useState } from 'react'
import { HiChevronDown } from "react-icons/hi";


function MessageUs() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <h3 className='text-[24px] !font-semibold nunito-font text-[#0f172a]'>
                Aşağıdakı nümunədən istifadə edərək bizə mesaj göndərə bilərsiniz
            </h3>

            <form action="" className='flex flex-col nunito-font font-light text-[14px] max-w-[400px] gap-4 mt-6'>
                <label>
                    Email:
                    <input
                        type="email"
                        className='w-full border border-[#e1e1e1] rounded-lg px-3 py-2 
                        focus:outline-none focus:ring-1 focus:ring-[#ef3344] 
                        focus:shadow-[0_0_0_2px_rgba(239,51,64,0.1)] 
                        hover:ring-1 hover:ring-[#ef3344]
                        hover:shadow-[0_0_0_2px_rgba(239,51,64,0.1)]
                        transition duration-100 ease-in-out'
                    />
                </label>

                <label>
                    Adınız:
                    <input
                        type="text"
                        className='w-full border border-[#e1e1e1] rounded-lg px-3 py-2 
                        focus:outline-none focus:ring-1 focus:ring-[#ef3344] 
                        focus:shadow-[0_0_0_2px_rgba(239,51,64,0.1)]
                        hover:ring-1 hover:ring-[#ef3344]
                        hover:shadow-[0_0_0_2px_rgba(239,51,64,0.1)] 
                        transition duration-100 ease-in-out'
                    />
                </label>

                <label className='relative'>
                    Mövzu:
                    <select
                        id="subject"
                        name="subject"
                        onClick={() => setIsOpen(!isOpen)}
                        className='w-full border border-[#e1e1e1] rounded-lg px-3 py-2 
                        focus:outline-none focus:ring-1 focus:ring-[#ef3344] 
                        focus:shadow-[0_0_0_2px_rgba(239,51,64,0.1)] 
                        hover:ring-1 hover:ring-[#ef3344]
                        hover:shadow-[0_0_0_2px_rgba(239,51,64,0.1)]
                        transition duration-100 ease-in-out
                        appearance-none
                        '
                    >
                        <option value="">-Seçmək-</option>
                        <option value="teklif">Təklif</option>
                        <option value="sorgu">Sorğu</option>
                        <option value="sikayet">Şikayət</option>
                    </select>

                    <HiChevronDown
                        className={`absolute right-2 top-10 transform -translate-y-1/2 text-[#999999] transition-transform duration-300 
                        ${isOpen ? 'rotate-180' : 'rotate-0'} pointer-events-none`}
                        size={20}
                    />
                </label>
                <label htmlFor="" className='flex flex-col'>
                    Mesaj:
                    <textarea name="" id="" cols="30" rows="10" className='w-full border border-[#e1e1e1] rounded-lg px-3 py-2 
                        focus:outline-none focus:ring-1 focus:ring-[#ef3344] 
                        focus:shadow-[0_0_0_2px_rgba(239,51,64,0.1)] 
                        hover:ring-1 hover:ring-[#ef3344]
                        hover:shadow-[0_0_0_2px_rgba(239,51,64,0.1)]
                        transition duration-100 ease-in-out
                        appearance-none'>

                    </textarea>
                </label>

                <div className='text-center'>
                    <button className='bg-[#1E1E1E] text-[#fff] py-3 px-5 text-[16px] text-16px rounded-full  '>
                        Göndər
                    </button>
                </div>
            </form>
        </div>
    )
}

export default MessageUs
