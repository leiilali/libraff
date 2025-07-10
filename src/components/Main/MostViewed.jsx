import React from 'react'
import BookCards from './BookCards'

function MostViewed({ data }) {
    return (
        <div className='container'>
            <h2 className='nunito-font text-[26px] text-[#0f172a]'>Həftənin ən çox <span className='text-[#ee2d39]'>baxılanları</span></h2>

            {data != null &&
                <div className='pt-4'>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-3">
                        {data.books.slice(0, 12).map((item, i) => (
                            <BookCards key={i} cardFor='main' item={item} />
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default MostViewed