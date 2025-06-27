import React, { useEffect, useState } from 'react'
import { getBooksBySearch } from '../../services/api'
import { useParams } from 'react-router-dom'
import BookCards from '../Main/BookCards'
import { Pagination } from 'antd';
import FilterSidebar from '../Kataloq/FilterSidebar'

function SearchPage() {

    const { searchValue } = useParams()
    const [results, setResults] = useState([])
    const [limit, setLimit] = useState(16)
    const [page, setPage] = useState(1)

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
        if (searchValue) {
            getBooksBySearch(searchValue, page, limit).then(response => {
                // setResults(response.books)
                const sortedBooks = sortBooks(response.books || [], sortOption);
                setResults(sortedBooks);
            })
        }
    }, [searchValue, page, limit])

    useEffect(() => {
        document.title = "Axtarış nəticəsi"
    }, [])



    return (
        <div className='container flex items-start gap-8'>

            <div className='w-[20%] hidden lg:block '>
                <FilterSidebar />
            </div>

            <div className='xl:w-[80%] w-full '>

                <div className='flex items-center justify-between'>
                    <h2 className='text-[28px] text-[#0f172a] font-semibold'>Axtarış nəticəsi</h2>
                    <p className='nunito-font text-[16px] font-light text-[#0f172a]'>Məhsul tapıldı: 10</p>
                </div>

                <div>
                    <div className='nunito-font flex items-center gap-5 mt-4 mb-2'>
                        <div className='flex items-center gap-2'>
                            <h2 className='text-[14px] text-[#767676] font-light'>Çeşidlə:</h2>
                            <select
                                // onChange={(e) => {
                                //     const selected = e.target.value;
                                //     setSortOption(selected);
                                //     setBooks(sortBooks(books, selected)); 
                                // }}
                                onChange={(e) => {
                                    const selected = e.target.value;
                                    setSortOption(selected);
                                    if (selected === "1") {
                                        getBooksBySearch(searchValue, page, limit).then((response) => {
                                            setResults(response.books)
                                        });
                                    } else {
                                        const sorted = sortBooks(results, selected);
                                        setResults(sorted);                                    }
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
                        <div>
                            {!Array.isArray(results) || results.length === 0 ? (
                                <p className='text-center text-gray-500 mt-10'>Axtarış nəticəsi tapılmadı.</p>
                            ) : (
                                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                                    {results.map((book) => (
                                        <BookCards key={book.id} item={book} />
                                    ))}
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
                                total={50}
                                defaultPageSize={limit}

                            />
                        </div>
                    </div>
                </div>
                {/* <div>
                    {!Array.isArray(results) || results.length === 0 ? (
                        <p className='text-center text-gray-500 mt-10'>Axtarış nəticəsi tapılmadı.</p>
                    ) : (
                        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                            {results.map((book) => (
                                <BookCards key={book.id} item={book} />
                            ))}
                        </div>
                    )}
                </div> */}
            </div>
        </div>

    )
}

export default SearchPage
