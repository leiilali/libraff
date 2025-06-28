import React, { useState } from 'react';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { RxEnvelopeClosed } from 'react-icons/rx';
import { BsChatDots } from 'react-icons/bs';

function HelpButton() {
  const [isOpen, setIsOpen] = useState(false)
  const buttons = [
    { icon: <FaWhatsapp size={35} />, offset: '-70px', key: 'whatsapp', label: 'Whatsapp' },
    { icon: <RxEnvelopeClosed size={28} />, offset: '-140px', key: 'email', label: 'Saytdaxili mesaj' },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '100px',
        right: '30px',
        zIndex: 1000,
        transition: 'all 0.3s',
      }}
    >
      <div className="relative">
        {buttons.map((btn, index) => (
          <div
            key={btn.key}
            className="absolute group right-0 flex items-center transition-all duration-300 ease-out"
            style={{
              transform: isOpen
                ? `translateY(${btn.offset}) scale(1)`
                : `translateY(0px) scale(0.6)`,
              opacity: isOpen ? 1 : 0,
              pointerEvents: isOpen ? 'auto' : 'none',
              transitionDelay: `${index * 40}ms`,
              zIndex: 40 - index,
            }}
          >
            <span
              className="mr-2 nunito-font text-[12px] group-hover:bg-[#1F40B0] text-white bg-[#2563EB] font-light px-2 py-1.5 rounded-sm shadow-md"
              style={{ whiteSpace: 'nowrap' }}
            >
              {btn.label}
            </span>

            <button
              className="w-[60px] h-[60px] rounded-full text-white flex group-hover:bg-[#1F40B0] bg-[#2563EB] items-center justify-center shadow-lg transition-colors duration-200"
            >
              {btn.icon}
            </button>
          </div>
        ))}

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative z-50 w-[60px] h-[60px] bg-[#1F40B0] rounded-full text-white flex items-center justify-center shadow-lg transition-colors duration-200"
        >
          {isOpen ? <AiOutlineClose size={30} /> : <BsChatDots size={33} />}
        </button>
      </div>
    </div>
  );
}

export default HelpButton;
