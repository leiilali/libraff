import React, { useEffect, useState } from 'react'
import BookDetails from './BookDetails'
import AboutBook from './AboutBook'
import BookDelivery from './BookDelivery'
import { getBooksById } from '../../services/api'
import { useParams } from 'react-router-dom'

function Details() {

    const [books, setBooks] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getBooksById(id).then(response => setBooks(response))
    }, [id])


    return (
        <div>
        
                <div>
                    <div className='lg:flex items-center justify-between container gap-10'>
                        <div className='bg-[#F6F6F8] xl:w-[90%] lg:w-[95%] lg:rounded-lg '>
                            <img src={books.imageSource}
                                className='w-[70%] lg:object-center lg:object-cover lg:w-[50%] mx-auto object-cover object-center'
                                alt="" />
                        </div>
                        <div>
                            <BookDetails books={books} />
                            <BookDelivery />
                        </div>
                    </div>

                    <div className='my-[30px]'>
                        <AboutBook books={books} />
                    </div>
                </div>

        </div>
    )
}

export default Details