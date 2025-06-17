import React, { useEffect, useState } from 'react';
import { AiOutlineAppstore } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";
import { getAllCategory } from '../../services/api';
import { Link, useLocation } from 'react-router-dom';

function Kataloq() {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [hoveredSubCategory, setHoveredSubCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeSubCategory, setActiveSubCategory] = useState(null);

    const location = useLocation();

    useEffect(() => {
        getAllCategory().then(response => setData(response));
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <div>
            <div className='relative z-50'>
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className='hidden lg:flex justify-center items-center bg-[#EF3441] text-white text-2xl py-2.5 px-5 rounded-full cursor-pointer nunito-font'>
                    {isOpen ? <IoCloseSharp /> : <AiOutlineAppstore />}
                    <h3 className='text-[16px] pl-1 hidden xl:inline font-medium'>Kataloq</h3>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/50 z-40"
                ></div>
            )}

            <div
                className={`container !py-0 !px-0 inset-x-0 absolute h-[550px] top-30 rounded-xl z-50 bg-white shadow-lg nunito-font capitalize font-light text-[#0f172a] text-[14px]
                transition-all duration-300 ease-in-out
                ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                style={{ transitionProperty: 'opacity, transform' }}
            >
                <div className="px-0 grid grid-cols-4 overflow-x-auto">

                    {/* Main Categories */}
                    <ul className="py-3">
                        {data?.menu?.map((item) => (
                            <li
                                key={item.code}
                                onMouseEnter={() => {
                                    setHoveredCategory(item);
                                    setActiveCategory(item);
                                    setActiveSubCategory(null);
                                    setHoveredSubCategory(null);
                                }}
                                className={`hover:bg-[#F5F5F7] group hover:text-[#EF3441] pl-5 pr-2 py-2 cursor-pointer flex items-center justify-between
                                    ${activeCategory?.code === item.code ? 'bg-[#F5F5F7] text-[#EF3441]' : ''}`}
                            >
                                {item.name}
                                <FaChevronRight
                                    className={`text-[13px] ${activeCategory?.code === item.code
                                            ? 'text-[#EF3441]'
                                            : 'text-[#DCDDDF] group-hover:text-[#EF3441]'
                                        }`}
                                />
                            </li>
                        ))}
                    </ul>

                    {/* Subcategories*/}
                    <ul className="py-3 col-span-1 bg-[#F5F5F7] h-[550px] min-h-full">
                        {(hoveredCategory?.subCategories?.length > 0
                            ? hoveredCategory.subCategories
                            : data?.menu?.[0]?.subCategories || []
                        ).map((elem) => (
                            <li
                                key={elem.code}
                                onMouseEnter={() => {
                                    setHoveredSubCategory(elem);
                                    setActiveCategory(hoveredCategory);
                                    setActiveSubCategory(elem);
                                }}
                                className={`hover:bg-white group hover:text-[#EF3441] pl-5 pr-2 py-2 cursor-pointer flex items-center justify-between
                                    ${activeSubCategory?.code === elem.code ? 'bg-white text-[#EF3441]' : ''}`}
                            >
                                {elem.name}
                                <FaChevronRight
                                    className={`text-[13px] ${activeSubCategory?.code === elem.code
                                            ? 'text-[#EF3441]'
                                            : 'text-[#DCDDDF] group-hover:text-[#EF3441]'
                                        }`}
                                />
                            </li>
                        ))}
                    </ul>

                    {/* Sub-subcategories */}
                    <div className="col-span-2 columns-2 md:columns-2 lg:columns-3 xl:columns-4 px-4 py-3 overflow-hidden">
                        <ul className="list-none space-y-1">
                            {(hoveredSubCategory?.subCategories?.length > 0
                                ? hoveredSubCategory.subCategories
                                : data?.menu?.[0]?.subCategories?.[0]?.subCategories || []
                            )
                                .sort((a, b) => a.name.localeCompare(b.name))
                                .map((subsubitem) => (
                                    <Link
                                        to="/subkateqoriya"
                                        state={{ name: subsubitem.name, code: subsubitem.code }}
                                        key={subsubitem.code}
                                        className="list-none space-y-1"
                                        onMouseEnter={() => {
                                            setActiveCategory(hoveredCategory);
                                            setActiveSubCategory(hoveredSubCategory);
                                        }}
                                    >
                                        <li className="cursor-pointer hover:text-[#EF3441] text-[14px] py-[4px] text-[#0f172abf] break-inside-avoid">
                                            {subsubitem.name}
                                        </li>
                                    </Link>
                                ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Kataloq;
