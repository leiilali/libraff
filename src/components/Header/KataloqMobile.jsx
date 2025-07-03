import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { getAllCategory } from '../../services/api.js';

function KataloqMobile({ onCategorySelect, closeMenu }) {
    const [categories, setCategories] = useState([]);
    const [overlayOpen, setOverlayOpen] = useState(false);
    const [subOverlayOpen, setSubOverlayOpen] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);

    useEffect(() => {
        getAllCategory().then(response => setCategories(response.menu));
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setOverlayOpen(true);
    };

    const handleSubCategoryClick = (subCategory) => {
        setSelectedSubCategory(subCategory);
        setSubOverlayOpen(true);
    };
    
    const closeOverlay = () => {
        setOverlayOpen(false);
        setSelectedCategory(null);
        setSubOverlayOpen(false);
        setSelectedSubCategory(null);
    };

    const closeSubOverlay = () => {
        setSubOverlayOpen(false);
        setSelectedSubCategory(null);
    };
    
    return (
        <ul className="flex flex-col gap-2 nunito-font">
            {categories.map((cat) => (
                <li key={cat.code}>
                    <button
                        onClick={() => handleCategoryClick(cat)}
                        className="text-left w-full !text-[17px] !font-semibold text-[#0f172a]"
                    >
                        {cat.name}
                    </button>
                </li>
            ))}

            {overlayOpen && selectedCategory && (
                <div className="fixed inset-0 z-999 bg-white p-4 overflow-y-auto">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-[17px] font-light text-[#0f172a80]">{selectedCategory.name}</h2>
                        <button onClick={closeOverlay}>
                            <IoMdClose size={24} />
                        </button>
                    </div>

                    {selectedCategory.subCategories?.length > 0 ? (
                        <ul className="flex flex-col gap-2">
                            {selectedCategory.subCategories.map((sub) => (
                                <li key={sub.code}>
                                    {sub.subCategories?.length > 0 ? (
                                        <button
                                            onClick={() => handleSubCategoryClick(sub)}
                                            className="text-left w-full !text-[17px] !font-semibold text-[#0f172a]"
                                        >
                                            {sub.name}
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                onCategorySelect(sub.code);
                                                onClick={closeMenu}
                                            }}
                                            className="!text-[17px] !font-semibold text-[#0f172a] text-left w-full"
                                        >
                                            {sub.name}
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-[#555]">Kateqoriya mövcud deyil.</p>
                    )}
                </div>
            )}

            {subOverlayOpen && selectedSubCategory && (
                <div className="fixed inset-0 z-999 bg-white p-4 overflow-y-auto">
                    <div className="flex justify-between items-center mb-4">
                        <button onClick={closeSubOverlay} className="text-[#0f172a] font-light nunito-font text-[17px] flex items-center gap-2">
                            <FaArrowLeft /> Geri
                        </button>
                        <button onClick={closeOverlay}>
                            <IoMdClose size={24} />
                        </button>
                    </div>

                    <h2 className="text-[17px] font-light text-[#0f172a80] mb-4">{selectedSubCategory.name}</h2>

                    {selectedSubCategory.subCategories?.length > 0 ? (
                        <ul className="flex flex-col gap-2">
                            {selectedSubCategory.subCategories.map((subsub) => (
                                <li key={subsub.code}>
                                    <button
                                        onClick={() => {
                                            onCategorySelect(subsub.code);
                                            onClick={closeMenu}
                                        }}
                                        className="!text-[17px] !font-semibold text-[#0f172a] text-left w-full"
                                    >
                                        {subsub.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-[#555]">Daha alt kateqoriya yoxdur.</p>
                    )}
                </div>
            )}
        </ul>
    );
}

export default KataloqMobile;
