import React, { useEffect, useState } from 'react'
import { getBooksById } from '../../services/api'
import { useParams } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import BookDetails from './BookDetails'
import AboutBook from './AboutBook'
import BookDelivery from './BookDelivery'
import Breadcrumbs from '../Main/Breadcrumbs';

function Details() {
    const [books, setBooks] = useState([])
    const [bookImageOpen, setBookImageOpen] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        getBooksById(id).then(response => setBooks(response))
    }, [id])

    useEffect(() => {
        if (books.title) {
            document.title = `${books.title} | Libraff`;
        }
    }, [books.title]);

    useEffect(() => {
        const closeImage = (e) => {
            if (e.key === "Escape") {
                setBookImageOpen(false)
            }
        }
        window.addEventListener("keydown", closeImage);
        return () => window.removeEventListener("keydown", closeImage);
    }, [])

    return (
        <div>
            <div>
                <div className='container'>
                    <Breadcrumbs
                        categories={[
                            books.firstCategory,
                            books.secondCategory,
                            books.thirdCategory
                        ].filter(Boolean)}
                        currentTitle={books.title}
                    />
                </div>                <div className='lg:flex items-center justify-between container gap-10'>
                    <div
                        onClick={() => setBookImageOpen(true)}
                        className='bg-[#F6F6F8] xl:w-[90%] lg:w-[95%] lg:rounded-lg '>
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

            {bookImageOpen && (
                <div className='fixed inset-0 bg-[#FFFFFF] transition-opacity flex flex-col items-center justify-center z-5000'>
                    <button
                        className='absolute top-2 right-5 text-[#767676] text-2xl'
                        onClick={() => setBookImageOpen(false)}>
                        <RxCross2 />
                    </button>
                    <div className='bg-[#E1E1E1] h-[1px] w-full my-6'></div>
                    <img
                        src={books.imageSource}
                        alt={books.title}
                        className='max-w-[90%] max-h-[90%] object-contain'
                    />
                </div>
            )}
        </div>
    )
}

export default Details