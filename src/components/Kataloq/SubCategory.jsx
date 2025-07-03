import React, { useEffect, useState } from 'react'
import { AiOutlineAppstore } from "react-icons/ai";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { getAllCategory, getBooksByCategoryCode } from '../../services/api';
import { Pagination } from 'antd';
import { useLocation } from 'react-router-dom';
import BookCards from '../Main/BookCards';
import CategorySidebar from './CategorySidebar';
import FilterSidebar from './FilterSidebar';
import CategoryBarMobile from './CategoryBarMobile';
import FilterBarMobile from './FilterBarMobile';
import '../../style/booksPagination.css'

// helper function to find category hierarchy by code
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
    const [limit, setLimit] = useState(16)
    const [page, setPage] = useState(1)
    const [object, setObject] = useState([])


    // for filtering book according price
    const [priceRange, setPriceRange] = useState([0, 100])
    const filteredBooks = books.filter(book => {
        return (
            book.discountedPrice >= priceRange[0] &&
            book.discountedPrice <= priceRange[1]
        );
    });
    

    const location = useLocation();
    const { code } = location.state || {};
    const closeOverlay = () => setOverlay(null);

    const [sortOption, setSortOption] = useState("1")
    const sortBooks = (bookList, option) => {
        const sorted = [...bookList];

        switch (option) {
            case "2":
                return sorted.sort((a, b) => a.title?.localeCompare(b.title));
            case "3":
                return sorted.sort((a, b) => b.title?.localeCompare(a.title));
            case "4":
                return sorted.sort((a, b) => a.discountedPrice - b.discountedPrice);
            case "5":
                return sorted.sort((a, b) => b.discountedPrice - a.discountedPrice);
            default:
                return sorted;
        }
    };

    useEffect(() => {
        getAllCategory().then(response => setData(response));
    }, []);

    useEffect(() => {
        if (code && data?.menu?.length > 0) {
            getBooksByCategoryCode(code, page, limit).then((data) => {
                const sortedBooks = sortBooks(data.books || [], sortOption);
                setBooks(sortedBooks);
                setObject(data)
            });
            // getBooksByCategoryCode(code, page, limit).then((data) => {
            //     setBooks(data.books || []);
            // });
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
    }, [code, data, page, limit]);

    useEffect(() => {
        document.title = " Kateqoriyalar | Libraff"
    }, [])

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
                                page={page}
                                limit={limit}
                                onCategoryClick={(category) => {
                                    setActiveCategoryCode(category.code);
                                    setActiveSubCategoryCode(null);
                                    setActiveSubSubCategoryCode(null);
                                    setSelectedCategory(category.name);
                                    setPage(1);
                                    getBooksByCategoryCode(category.code, 1, limit).then((res) =>
                                        setBooks(sortBooks(res.books || [], sortOption))
                                    );
                                }}
                                onSubCategoryClick={(sub) => {
                                    setActiveSubCategoryCode(sub.code);
                                    setActiveSubSubCategoryCode(null);
                                    setSelectedCategory(sub.name);
                                    setPage(1);
                                    getBooksByCategoryCode(sub.code, 1, limit).then((res) =>
                                        setBooks(sortBooks(res.books || [], sortOption))
                                    );
                                }}
                                onSubSubCategoryClick={(subsub) => {
                                    setActiveSubSubCategoryCode(subsub.code);
                                    setSelectedCategory(subsub.name);
                                    setPage(1);
                                    getBooksByCategoryCode(subsub.code, 1, limit).then((res) =>
                                        setBooks(sortBooks(res.books || [], sortOption))
                                    );
                                }}
                            />

                        </div>
                        <div className='w-20%'>
                            <FilterSidebar
                                priceRange={priceRange}
                                setPriceRange={setPriceRange}
                            />
                        </div>
                    </div>

                    <div className='xl:w-[80%] w-full'>
                        <div className='nunito-font flex items-center gap-5'>
                            <div className='flex items-center gap-2'>
                                <h2 className='text-[14px] text-[#767676] font-light'>Çeşidlə:</h2>
                                <select
                                    onChange={(e) => {
                                        const selected = e.target.value;
                                        setSortOption(selected);
                                        if (selected === "1") {
                                            getBooksByCategoryCode(code, page, limit).then((data) => {
                                                setBooks(data.books || []);
                                            });
                                        } else {
                                            setBooks(sortBooks(books, selected));
                                        }
                                    }}
                                    className='text-[14px] nunito-font outline-none bg-white text-[#ed1b2a] font-light pr-2'>
                                    <option value="1">Bütün kitablar</option>
                                    <option value="2">A-dan Z-ə</option>
                                    <option value="3">Z-dən A-ya</option>
                                    <option value="4">Əvvəlcə ucuz</option>
                                    <option value="5">Əvvəlcə baha</option>
                                </select>
                            </div>
                            <div className='flex items-center gap-2'>
                                <h2 className='text-[14px] text-[#767676] font-light'>Göstər:</h2>
                                <select
                                    onChange={(e) => { setLimit(e.target.value) }}
                                    className='text-[14px] nunito-font outline-none bg-white text-[#ed1b2a] font-light'>
                                    <option value="16">16</option>
                                    <option value="32">32</option>
                                    <option value="64">64</option>
                                    <option value="128">128</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                                {/* {books.length > 0 ? (
                                    books.map((book) => (
                                        <BookCards key={book.id} item={book} cardFor="main" />
                                    ))
                                ) : (
                                    <div className='flex justify-center items-center w-full py-4'>
                                        <p className="text-[#767676] text-[14px] nunito-font font-light w-full">Kitab tapılmadı.</p>
                                    </div>
                                )} */}
                                {filteredBooks.length > 0 ? (
                                    filteredBooks.map((book) => (
                                        <BookCards key={book.id} item={book} cardFor="main" />
                                    ))
                                ) : (
                                    <div className='flex justify-start items-start w-full py-10'>
                                        <p className="text-[#767676] text-[14px] nunito-font font-light">Kitab tapılmadı.</p>
                                    </div>
                                )}
                            </div>
                            <div className='flex items-center justify-center mt-10 custom-pagination'>
                                <Pagination
                                    onChange={(currentPage) => {
                                        setPage(currentPage);
                                    }}
                                    defaultCurrent={1}
                                    current={page}
                                    total={object.totalBookCount || 0}
                                    defaultPageSize={limit}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {overlay && (
                <div className='fixed inset-0 bg-white z-50 flex flex-col '>
                    <div className='flex justify-between items-center p-3'>
                        <h2 className='text-[24px] font-light nunito-font text-[#0f172a] capitalize'>
                            {overlay === 'kateqoriyalar' ? 'Kateqoriyalar' : 'Filterlər'}
                        </h2>
                        <button onClick={closeOverlay}>
                            <RxCross2 className='text-[28px] text-[#333]' />
                        </button>
                    </div>
                    <div className='bg-[#D6D6D6] h-[1px] w-full'></div>
                    
                    <div className='flex-1 overflow-auto p-3'>
                        {overlay === 'kateqoriyalar' && (
                            <div>
                                <CategoryBarMobile
                                    page={page}
                                    setPage={setPage}
                                    limit={limit}
                                    menu={data.menu || []}
                                    activeCategoryCode={activeCategoryCode}
                                    activeSubCategoryCode={activeSubCategoryCode}
                                    activeSubSubCategoryCode={activeSubSubCategoryCode}
                                    onCategoryClick={(category) => {
                                        setActiveCategoryCode(category.code);
                                        setActiveSubCategoryCode(null);
                                        setActiveSubSubCategoryCode(null);
                                        setSelectedCategory(category.name);
                                        setPage(1);
                                        getBooksByCategoryCode(category.code, 1, limit).then((res) =>
                                            setBooks(sortBooks(res.books || [], sortOption))
                                        );
                                    }}
                                    onSubCategoryClick={(sub) => {
                                        setActiveSubCategoryCode(sub.code);
                                        setActiveSubSubCategoryCode(null);
                                        setSelectedCategory(sub.name);
                                        setPage(1);
                                        getBooksByCategoryCode(sub.code, 1, limit).then((res) =>
                                            setBooks(sortBooks(res.books || [], sortOption))
                                        );
                                    }}
                                    onSubSubCategoryClick={(subsub) => {
                                        setActiveSubSubCategoryCode(subsub.code);
                                        setSelectedCategory(subsub.name);
                                        setPage(1);
                                        getBooksByCategoryCode(subsub.code, 1, limit).then((res) =>
                                            setBooks(sortBooks(res.books || [], sortOption))
                                        );
                                    }}
                                    closeCategoryBar={closeOverlay}
                                />
                            </div>
                        )}

                        {overlay === 'filterler' && (
                            <div>
                                <FilterBarMobile />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default SubCategory;