import React from 'react'
import { GrLocation } from "react-icons/gr";
import { GrGallery } from "react-icons/gr";

function BranchCard() {
    return (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Array(7).fill(null).map((_, index) => (
                <div
                    key={index}
                    className="rounded-[4px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] p-5"
                >
                    <div>
                        <div className='py-5'>
                            <h3 className='text-[18px] !font-semibold nunito-font'>Gənclik Mall filialı</h3>
                            <p className='nunito-font text-[#5b5b5b] text-[16px] font-light py-[6px]'>
                                Bakı şəhəri, Nərimanov rayonu, Fətəli Xan Xoyski küçəsi 38, "Gənclik Mall" Ticarət Mərkəzi.
                            </p>
                        </div>
                        <div className='py-5'>
                            <h3 className='text-[18px] !font-semibold nunito-font'>Iş saatları:</h3>
                            <p className='nunito-font text-[#5b5b5b] text-[15px] font-light py-[6px]'>
                                Hər gün 10:00 - 22:00
                            </p>
                        </div>
                        <div className='pt-5 pb-2'>
                            <h3 className='text-[18px] !font-semibold nunito-font'>Əlaqə:</h3>
                            <p className='nunito-font text-[#ef3344] text-[15px] font-light py-[6px]'>ganjlikmall@libraff.az</p>
                            <p className='nunito-font text-[#ef3344] text-[15px] font-light py-[6px]'>+994 50 290 44 72</p>
                        </div>
                    </div>

                    <div className="h-[0.7px] bg-black w-full"></div>

                    <div className='flex items-center pt-6 gap-10'>
                        <div className='flex items-center gap-2'>
                            <GrLocation className='text-[25px] text-[#ef3344]' />
                            <p className='text-[14px] font-light nunito-text'>Xəritə</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <GrGallery className='text-[25px] text-[#ef3344]' />
                            <p className='text-[14px] font-light nunito-text'>Qalereya</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BranchCard
