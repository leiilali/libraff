import React, { useEffect, useState } from 'react'
import { getAllAuthors } from '../../services/api'

function Authors() {

    const [data, setData] = useState([])


    useEffect(() => {
        getAllAuthors().then(response => setData(response))
    }, [])

    return ( 
        <div>
            <div className="container ">
                <h2 className='text-[28px] text-[#0f172a] my-5 font-semibold'>Müəliflər</h2>

                <div className='grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 nunito-font'>

                    {data?.authors?.map((item) => (
                        <div>
                            <h3 className='uppercase text-[18px] text-[#1f172a] py-3'>{item.initialLetter}</h3>
                            <ul>
                                {item.authors.map((author) => (
                                    <li key={author.id} className='text-[16px]  text-[#ef3340] py-1'>
                                        {author.fullName}
                                    </li>
                                ))}                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Authors