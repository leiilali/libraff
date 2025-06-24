import React, { useEffect, useState } from 'react'
import { AiOutlineAppstore } from "react-icons/ai";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import BookCards from '../Main/BookCards';
import { getAllCategory, getBooksByCategoryCode } from '../../services/api';
import { useLocation } from 'react-router-dom';
import CategorySidebar from './CategorySidebar';
import FilterSidebar from './FilterSidebar';
import { Select } from 'antd';
import '../../style/sortPagination.css'


// Helper function to find category hierarchy by code
function findParentCategoryByCode(menu, targetCode) {
    for (const category of menu) {
        if (category.code === targetCode) {
            return { parent: category, child: null, subchild: null };
        }
        if (category.subCategories) {
            for (const sub of category.subCategories) {
                if (sub.code === targetCode) {
                    return { parent: category, child: sub, subchild: null };
                }
                if (sub.subCategories) {
                    for (const subsub of sub.subCategories) {
                        if (subsub.code === targetCode) {
                            return { parent: category, child: sub, subchild: subsub };
                        }
                    }
                }
            }
        }
    }
    return null;
}

function SubCategory() {
    const [overlay, setOverlay] = useState(null)
    const [data, setData] = useState([])
    const [activeCategoryCode, setActiveCategoryCode] = useState(null);
    const [activeSubCategoryCode, setActiveSubCategoryCode] = useState(null);
    const [activeSubSubCategoryCode, setActiveSubSubCategoryCode] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('')
    const [books, setBooks] = useState([])

    const location = useLocation();
    const { code } = location.state || {};

    const closeOverlay = () => setOverlay(null);

    // const sortedBooks = () => {
    //     if (!books) return [];

    //     const sorted = [...books]

    //     switch (sortBooks) {
    //         case '2': // A-dan Z-ə
    //             return sorted.sort((a, b) => a.name.localeCompare(b.name));
    //         case '3': // Z-dən A-ya
    //             return sorted.sort((a, b) => b.name.localeCompare(a.name));
    //         case '4': // Əvvəlcə ucuz
    //             return sorted.sort((a, b) => a.salePrice - b.salePrice);
    //         case '5': // Əvvəlcə baha
    //             return sorted.sort((a, b) => b.salePrice - a.salePrice);
    //         default:
    //             return sorted; // Bütün kitablar
    //     }

    // }

    useEffect(() => {
        getAllCategory().then(response => setData(response));
    }, []);

    useEffect(() => {
        if (code && data?.menu?.length > 0) {
            getBooksByCategoryCode(code).then((data) => {
                setBooks(data.books || []);
            });

            const result = findParentCategoryByCode(data.menu, code);
            if (result) {
                setActiveCategoryCode(result.parent.code);
                if (result.subchild) {
                    setActiveSubCategoryCode(result.child.code);
                    setActiveSubSubCategoryCode(result.subchild.code);
                    setSelectedCategory(result.subchild.name);
                } else if (result.child) {
                    setActiveSubCategoryCode(result.child.code);
                    setSelectedCategory(result.child.name);
                } else {
                    setActiveSubCategoryCode(null);
                    setSelectedCategory(result.parent.name);
                }
            }
        }
    }, [code, data]);

    return (
        <div>
            {/* mobile ucun filter ve kategoriyalar */}
            <div className='bg-[#F5F5F5] xl:hidden my-3'>
                <div className='container !py-2 flex gap-2 items-center justify-between nunito-font font-semibold text-[#0f172a]'>
                    <button
                        onClick={() => setOverlay('kateqoriyalar')}
                        className='flex items-center justify-center gap-2 text-[16px] py-2 w-[50%] bg-white rounded-full'>
                        <AiOutlineAppstore className='!text-[20px]' /> Kateqoriyalar
                    </button>
                    <button
                        onClick={() => setOverlay('filterler')}
                        className='flex items-center justify-center gap-2 text-[16px] py-2 w-[50%] bg-white rounded-full'>
                        <PiSlidersHorizontalBold className='!text-[20px]' /> Filterlər
                    </button>
                </div>
            </div>





            <div className="container">
                <h2 className='text-[28px] text-[#0f172a] mb-2 font-semibold'>
                    {selectedCategory || 'Kateqoriyalar'}
                </h2>

                <div className='flex justif-between gap-8'> {/*items-start */}

                    <div className='hidden xl:flex flex-col gap-6 '>
                        <div className='w-20%'>
                            <CategorySidebar
                                menu={data.menu || []}
                                activeCategoryCode={activeCategoryCode}
                                activeSubCategoryCode={activeSubCategoryCode}
                                activeSubSubCategoryCode={activeSubSubCategoryCode}
                                onCategoryClick={(category) => {
                                    setActiveCategoryCode(category.code);
                                    setActiveSubCategoryCode(null);
                                    setActiveSubSubCategoryCode(null);
                                    setSelectedCategory(category.name);
                                    getBooksByCategoryCode(category.code).then((res) =>
                                        setBooks(res.books || [])
                                    );
                                }}
                                onSubCategoryClick={(sub) => {
                                    setActiveSubCategoryCode(sub.code);
                                    setActiveSubSubCategoryCode(null);
                                    setSelectedCategory(sub.name);
                                    getBooksByCategoryCode(sub.code).then((res) =>
                                        setBooks(res.books || [])
                                    );
                                }}
                                onSubSubCategoryClick={(subsub) => {
                                    setActiveSubSubCategoryCode(subsub.code);
                                    setSelectedCategory(subsub.name);
                                    getBooksByCategoryCode(subsub.code).then((res) =>
                                        setBooks(res.books || [])
                                    )
                                }}
                            />
                        </div>
                        <div className='w-20%'>
                            <FilterSidebar />
                        </div>
                    </div>


                    <div className='xl:w-[80%] w-full'>
                        <div className='nunito-font'>
                            <div className='flex items-center gap-2'>
                                <h2 className='text-[14px] text-[#767676] font-light'>Çeşidlə:</h2>
                                <div>
                                    <Select
                                        showSearch={false}
                                        placeholder="Bütün kitablar "
                                        // value={sortBooks}
                                        className="custom-select "
                                        // onChange={value => setSortBooks(value)}
                                        options={[
                                            { value: '1', label: 'Bütün kitablar' },
                                            { value: '2', label: 'A-dan Z-ə' },
                                            { value: '3', label: 'Z-dən A-ya' },
                                            { value: '4', label: 'Əvvəlcə ucuz' },
                                            { value: '5', label: 'Əvvəlcə baha' },
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                            {books.length > 0 ? (
                                books.map((book) => (
                                    <BookCards key={book.id} item={book} cardFor="main" />
                                ))
                            ) : (
                                <p className="text-gray-600">Kitab tapılmadı.</p>
                            )}
                        </div>

                    </div>
                </div>
            </div>

            {overlay && (
                <div className='fixed inset-0 bg-white z-50 flex flex-col p-6'>
                    <div className='flex justify-between items-center mb-6'>
                        <h2 className='text-[24px] font-semibold text-[#0f172a] capitalize'>
                            {overlay === 'kateqoriyalar' ? 'Kateqoriyalar' : 'Filterlər'}
                        </h2>
                        <button onClick={closeOverlay}>
                            <RxCross2 className='text-[28px] text-[#333]' />
                        </button>
                    </div>

                    <div className='flex-1 overflow-auto'>
                        {overlay === 'kateqoriyalar' && (
                            <div>
                                {/* Add mobile category content here */}
                                <p>Kateqoriyalar üçün buraya istədiyin kontenti yerləşdir.</p>
                            </div>
                        )}

                        {overlay === 'filterler' && (
                            <div>
                                {/* Add filter content here */}
                                <p>Filterlər üçün buraya uyğun komponent və kontent əlavə et.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default SubCategory;
