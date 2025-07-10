import React from 'react'
import { FaShop } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";

function BookDelivery() {
    return (
        <div>
            <div className='nunito-font container'>
                <h3 className='text-[18px] text-[#0f172a] font-semibold'>Çatdırılma haqqında</h3>
                <p className='text-[#64748b] text-[14px] font-light my-3'>Bakı şəhəri üçün təxmini müddət və qiymətlər.</p>
                <div className='text-[#64748b] flex flex-col gap-2'>
                    <div className='flex items-center gap-2 '>
                        <FaShop className='text-[20px]' />
                        <p className='text-[16px] lg:text-[14px]'>Mağazadan təhvil alma — <span className='font-semibold text-[17px] text-[#475569]'>pulsuz</span> </p>
                    </div>
                    <div className='flex items-start gap-2 '>
                        <FaTruckFast className='text-[23px] lg:text-[28px]' />
                        <p className='text-[16px] lg:text-[14px]'>Kuryer ilə — operator təsdiqindən sonra   <span className='font-semibold text-[17px] text-[#475569]'>24 saat ərzində.</span>  30 AZN və yuxarı sifarişlərdə — <span className='font-semibold text-[17px] text-[#475569]'>pulsuz</span> </p>
                    </div>

                    <hr className="border-t border-dashed border-gray-400 my-4" />

                    <p className='text-[16px] lg:text-[14px]'>Bölgələrə çatdırılma <span className='font-semibold text-[17px] text-[#475569]'>3-5 iş günü</span>  ərzində. </p>
                </div>
            </div>
        </div>
    )
}

export default BookDelivery