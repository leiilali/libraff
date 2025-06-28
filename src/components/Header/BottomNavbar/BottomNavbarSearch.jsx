import React, { useState } from 'react';
import { IoCloseSharp, IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function BottomNavbarSearch({ setIsOpen }) {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (inputValue.trim()) {
            navigate(`/axtar/${inputValue.trim()}`);
            setIsOpen(false); 
        }
    };

    return (
        <div className='w-full nunito-font'>
            <div className='pt-2 px-5'>
                <div className='flex items-center justify-between gap-3 mb-12 mt-4'>
                    <div className='border border-[#e2e8f0] overflow-hidden px-2 flex items-center justify-between w-full bg-[#F9FAFC] rounded-full text-[16px] font-light focus-within:ring-1 focus-within:ring-gray-300 focus-within:shadow-md'>
                        <input
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            value={inputValue}
                            className='py-2 px-3 placeholder:text-[#0f172a] placeholder:text-[16px] outline-none bg-[#F5F5F7]'
                            type="text"
                            placeholder='Növbəti kitabınızı axtarın'
                        />
                        <button onClick={handleSearch}>
                            <IoSearch className='text-xl text-[#ef3340]' />
                        </button>
                    </div>
                    <IoCloseSharp
                        onClick={() => setIsOpen(false)}
                        className='text-[#767676] text-[28px] cursor-pointer'
                    />
                </div>
            </div>
            <div className="h-[1px] bg-gray-300 w-full "></div>
        </div>
    );
}

export default BottomNavbarSearch;
