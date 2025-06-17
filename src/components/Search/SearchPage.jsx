import React, { useEffect, useState } from 'react'
import { getBooksBySearch } from '../../services/api'
import { useParams } from 'react-router-dom'
import BookCards from '../Main/BookCards'
import FilterSidebar from '../Kataloq/FilterSidebar'

function SearchPage() {

    const { searchValue } = useParams()
    const [results, setResults] = useState([])

    useEffect(() => {
        if (searchValue) {
            getBooksBySearch(searchValue).then(response => { setResults(response.books) })
        }
    }, [searchValue])
    return (
        <div className='container flex items-start gap-8'>

            <div className='w-[20%]'>
                <FilterSidebar />
            </div>

            <div className='w-[80%]'>

                <div className='flex items-center justify-between'>
                    <h2 className='text-[28px] text-[#0f172a] font-bold'>Axtarış nəticəsi</h2>
                    <p className='nunito-font text-[16px] font-light text-[#0f172a]'>Məhsul tapıldı: 10</p>
                </div>

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
            </div>
        </div>

    )
}

export default SearchPage
