import React from 'react';
import { useLocation } from 'react-router-dom';

function CategoryBarMobile({
    menu = [],
    activeCategoryCode,
    activeSubCategoryCode,
    activeSubSubCategoryCode,
    onCategoryClick,
    onSubCategoryClick,
    onSubSubCategoryClick,
    closeCategoryBar,
    page,
    setPage,
    limit
}) {

    // const {pathname} = useLocation()

    return (
        <div className='nunito-font'>
            <ul>
                {menu.map((category) => (
                    <li key={category.code} className="ml-3">
                        <div
                            onClick={() => {
                                onCategoryClick(category);
                            }}
                            className={`cursor-pointer relative text-[16px] text-[#0f172a] font-light py-2 ${activeCategoryCode === category.code && !activeSubCategoryCode
                                ? "font-semibold" : ""}`}
                        >
                            {activeCategoryCode === category.code && !activeSubCategoryCode && !activeSubSubCategoryCode && (
                                <span className="bg-[#EF3441] rounded-full absolute left-[-16px] top-1/2 -translate-y-1/2 w-[3px] h-6"></span>
                            )}
                            {category.name}
                        </div>

                        {activeCategoryCode === category.code && category.subCategories && (
                            <ul className="mt-1">
                                {category.subCategories.map((sub) => (
                                    <li key={sub.code}>
                                        <div
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onSubCategoryClick(sub);

                                            }}
                                            className={`cursor-pointer text-[16px] text-[#4B5160] px-2.5 rounded-lg font-light py-1.5 hover:bg-[#F5F5F7] hover:text-[#EF3441] relative ${activeSubCategoryCode === sub.code ? "font-semibold" : ""
                                                }`}
                                        >
                                            {activeSubCategoryCode === sub.code && !activeSubSubCategoryCode && (
                                                <span className="bg-[#EF3441] rounded-full absolute left-[-16px] top-1/2 -translate-y-1/2 w-[3px] h-6"></span>
                                            )}
                                        
                                            {sub.name}
                                        </div>

                                        {activeSubCategoryCode === sub.code && sub.subCategories && (
                                            <ul className="px-3">
                                                {sub.subCategories.map((subsub) => (
                                                    <li key={subsub.code}>
                                                        <div
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                onSubSubCategoryClick(subsub);
                                                                if (closeCategoryBar) closeCategoryBar(); 

                                                            }}
                                                            className={`cursor-pointer text-[16px] text-[#6B7280] rounded-lg px-2 font-light py-1.5 hover:bg-[#F5F5F7] hover:text-[#EF3441] relative ${activeSubSubCategoryCode === subsub.code ? "font-semibold" : ""
                                                                }`}
                                                        >
                                                            {activeSubSubCategoryCode === subsub.code && (
                                                                <span className="bg-[#EF3441] rounded-full absolute left-[-16px] top-1/2 -translate-y-1/2 w-[3px] h-6"></span>
                                                            )}
                                                            {subsub.name}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryBarMobile;
