import React, { useEffect } from 'react'
import discount2 from "../../assets/images/discountImages/discount2.webp"
import Breadcrumbs from '../Main/Breadcrumbs'

function Discounts() {

    useEffect(() => {
        document.title = "Endirimlər | Libraff"
    }, [])

    return (
        <div className="container ">
            <Breadcrumbs/>
            <h2 className='text-[28px] text-[#0f172a] my-5 font-semibold'>Kampaniyalar</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6'>
                {Array(3).fill('').map((_, index) => (
                    <div key={index} className='border border-[#EAEAEA] rounded-xl overflow-hidden'>
                        <img src={discount2} alt="discount image" className='w-full h-[200px] object-cover' />

                        <div className='p-5'>
                            <h3 className='text-[16px] !font-semibold nunito-font'>Onlayn sifarişlərə 20% endirim</h3>
                            <p className='nunito-font text-[#5b5b5b] text-[14px] font-light py-[6px]'>01-05-2023 dən</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Discounts
