import React from 'react'
import { Link } from 'react-router-dom'

function FooterDesktop() {
    return (
        <>
            <div className='container'>
                <div className='nunito-font md:flex md:justify-between'>
                    <div>
                        <h3 className='md:text-[18px] text-[#0f172a]'>Hesabım</h3>
                        <ul className='md:text-[14px] text-[#1e1e1e] my-[10px] flex flex-col gap-3'>
                            <li><Link>Daxil ol</Link></li>
                            <li><Link>Qeydiyyatdan keç</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='md:text-[18px] text-[#0f172a]'>Şirkət</h3>
                        <ul className='md:text-[14px] text-[#1e1e1e] my-[10px] flex flex-col gap-3'>
                            <li><Link >Haqqımızda</Link></li>
                            <li><Link to={"/bizimle-elaqe"}>Əlaqə</Link></li>
                            <li><a href="">Vakansiyalar</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='md:text-[18px] text-[#0f172a]'>Müştəri xidməti</h3>
                        <ul className='md:text-[14px] text-[#1e1e1e] my-[10px] flex flex-col gap-3'>
                            <li><a href="">Dəyişdirilmə və qaytarılma</a></li>
                            <li><Link to={"/odenis-ve-catdirilma"}>Ödəniş və çatdırılma</Link></li>
                            <li><a href="">Sifarişiniz haqqında</a></li>
                            <li><a href="">Seçilmişlər</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='md:text-[18px] text-[#0f172a]'>Əlaqə</h3>
                        <ul className='md:text-[14px] text-[#1e1e1e] my-[10px] flex flex-col gap-3 w-56'>
                            <li><a href="">Bakı, Badamdar qəs., Mikayıl Müşfiq küç. 1c (Badamdar Estates)</a></li>
                            <li><a href="">+994-50-290-44-96</a></li>
                            <li><a href="">B.e.-B. 9.00 - 18.00</a></li>
                            <li><a href="">online@libraff.az</a></li>
                            <li><a href="">Xəritədə bax</a></li>
                        </ul>
                    </div>
                </div>
                <div className='md:text-[14px] text-[#1e1e1e] my-[10px] flex flex-col gap-3 py-[10px] nunito-font'>
                    <p className="bottom-copyright">
                        © 2017 - 2025 Libraff.
                    </p>
                </div>
            </div>



        </>
    )
}

export default FooterDesktop