import React from 'react';
import '../../style/respMenu.css';
import { Link } from 'react-router-dom';
import { Collapse } from 'antd';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import KataloqMobile from './KataloqMobile';

function HeaderMenu({ onCategorySelect, closeMenu }) {
    const items = [
        {
            key: '1',
            label: (
                <span className='text-[17px] !text-[#0f172a80] nunito-font !font-light pb-2'>
                    Əsas keçidlər
                </span>
            ),
            children: (
                <ul className="flex flex-col gap-2 nunito-font">
                    <li><Link to="/bestsellerler" className="!text-[17px] !font-semibold hover:bg-red-700 text-[#0f172a]" onClick={closeMenu}>Bestseller</Link></li>
                    <li><Link to="/kampaniyalar-az" className="!text-[17px] !font-semibold text-[#0f172a]" onClick={closeMenu}>Endirimlər</Link></li>
                    <li><Link to="/muellifler" className="!text-[17px] !font-semibold text-[#0f172a]" onClick={closeMenu}> Müəlliflər</Link></li>
                    <li><Link to="/klassiklr" state={{ code: "klassikler_bedii" }} className="!text-[17px] !font-semibold text-[#0f172a]" onClick={closeMenu}>Klassiklər</Link></li>
                </ul>
            ),
        },
        {
            key: '2',
            label: (
                <span className='text-[17px] !text-[#0f172a80] nunito-font !font-light pb-2'>
                    Kataloq
                </span>
            ),
            children: (
                <KataloqMobile onCategorySelect={onCategorySelect} closeMenu={closeMenu} />
            ),
        },
        {
            key: '3',
            label: (
                <span className='text-[17px] nunito-font !text-[#0f172a80] !font-light !pb-2'>
                    Digər
                </span>
            ),
            children: (
                <ul className="flex flex-col gap-1 nunito-font">
                    <li><Link to="/odenis-ve-catdirilma" className="!text-[17px] !font-semibold text-[#0f172a]" onClick={closeMenu}>Ödəniş və çatdırılma</Link></li>
                    <li><Link to="/loyalty-card" className="!text-[17px] !font-semibold text-[#0f172a]" onClick={closeMenu}>Loyallıq kartı</Link></li>
                    <li><Link to="/faq-az" className="!text-[17px] !font-semibold text-[#0f172a]" onClick={closeMenu}>FAQ</Link></li>
                    <li><Link to="/bizimle-elaqe" className="!text-[17px] !font-semibold text-[#0f172a]" onClick={closeMenu}>Əlaqə</Link></li>
                </ul>
            ),
        }
    ];

    return (
        <div className="px-4 py-0 nunito-font relative">
            <Collapse
                ghost
                defaultActiveKey={['1', '2', '3']}
                expandIcon={({ isActive }) =>
                    isActive ? <AiOutlineMinus size={18} /> : <AiOutlinePlus size={18} />
                }
                expandIconPosition="end"
                className="custom-collapse"
                items={items}
            />
        </div>
    );
}

export default HeaderMenu;
