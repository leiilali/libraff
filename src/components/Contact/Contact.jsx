import React, { useEffect } from 'react'
import GoogleMap from './GoogleMap';
import BranchCard from './BranchCard';
import MessageUs from './MessageUs';

function Contact() {

    useEffect(() => {
        document.title = "Əlaqə | Libraff"
    }, [])

    return (
        <div>
            <div className="container">

                <h2 className='text-[28px] text-[#0f172a] my-5 font-semibold'>Mağazalar və Əlaqə</h2>

                <div className='lg:flex'>
                    <div className='lg:w-[50%]'>
                        <h3 className='!text-[24px] !font-semibold nunito-font'>Libraff - Onlayn Kitab Mağazası</h3>

                        <p className='nunito-font text-[#0f172a] text-[14px] font-light py-[6px]'>Baş ofis: Mikayıl Müşfiq küçəsi 1, Badamdar, Badamdar Rezidens; Bakı, Azərbaycan, AZ1006</p>
                        <p className='nunito-font text-[#0f172a] text-[14px] font-light py-[6px]'>Tel.: <span className='text-[#ef3340]'> +994 50 290 44 96</span></p>
                        <p className='nunito-font text-[#0f172a] text-[14px] font-light py-[6px]'>E-poçt: <span className='text-[#ef3340]'>info@libraff.az</span></p>


                        <h2 className='nunito-font text-[#0f172a] text-[14px] font-light py-[6px]'>Müştəri Xidmətinin İş Saatları:</h2>
                        <ul className='list-disc pl-5'>
                            <li className='nunito-font text-[#0f172a] text-[14px] font-light py-[6px]'>Bazar ertəsi-Cümə: 09:00 - 18:00</li>
                            <li className='nunito-font text-[#0f172a] text-[14px] font-light py-[6px]'>Şənbə və Bazar: 09:00 - 15:00</li>
                        </ul>

                        <p className='nunito-font text-[#0f172a] text-[14px] font-light py-[6px]'>Korporativ satış üçün əlaqə: <span className='text-[#ef3340]'>+994 50 290 78 11 – zinyat.nuriyeva@libraff.az</span> </p>
                    </div>

                    <div className='lg:w-[50%] py-10'>
                        <div className="w-full h-[250px] overflow-hidden shadow-lg">
                            <GoogleMap />
                        </div>
                    </div>
                </div>

                <div className='my-20'>
                    <BranchCard />
                </div>

                <div className='my-20'>
                    <MessageUs />
                </div>
            </div>
        </div>
    )
}

export default Contact