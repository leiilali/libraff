import React, { useState } from 'react'
import logo from "../assets/images/logo/libraffLogo.png"
import registrationImage from "../assets/images/authImages/registrationImage.svg"
import { MdCardMembership } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';



function Registration() {
    
    return (
        <div className='container xl:flex xl:justify-between xl:items-center xl:gap-[70px]'>

            <div className='xl:w-[40%]'>
                <div className='flex flex-col items-center xl:items-start xl:mt-10'>
                    <Link to={"/"} className='w-[120px]'>
                        <img src={logo} alt="logo" className='w-full' />
                    </Link>
                    <h3 className='text-[#0f172a] text-[24px] nunito-font mt-8 mb-4 font-semibold'>Hesab yaradın</h3>
                </div>

                <div className='flex flex-col gap-4'>
                    <div className='text-[17px] text-[#334155] nunito-font flex items-center font-light gap-2 border-[1px] border-[#757775] w-full py-1.5 justify-center rounded-full'>
                        <MdCardMembership className='text-[23px]' />
                        Loyallıq kartı ilə qeydiyyat
                    </div>
                    <div className='text-[17px] text-[#334155] nunito-font flex items-center font-light gap-2 border-[1px] border-[#757775] w-full py-1.5 justify-center rounded-full'>
                        <FcGoogle className='text-[23px]' />
                        Google hesabı ilə daxil ol
                    </div>
                </div>

                <div className='flex items-center gap-1 my-4'>
                    <span className='bg-[#E2E8F0] h-[1px] w-full'></span>
                    <span className='text-[#64748b] text-[16px] font-light nunito-font'>və&nbsp;ya</span>
                    <span className='bg-[#E2E8F0] h-[1px] w-full'></span>
                </div>

                <form action="" className='nunito-font text-[#0f172a] font-light text-[16px] flex flex-col gap-4 '>
                    <label htmlFor="">
                        Telefon <span className='text-[#EB7262] text-[13px]'>*</span>
                        <input type="number" placeholder='+994' className='border-[1px] border-[#E1E1E1] font-light py-2 w-full text-[16px] placeholder:text-[14px] px-2 rounded-lg mt-2 outline-none focus:ring-1 focus:ring-[#EF3441] focus:shadow-[0_0_5px_#EF3441]' />
                    </label>
                    <label htmlFor="">
                        E-poçt <span className='text-[#EB7262] text-[13px]'>*</span>
                        <input type="number" className='border-[1px] border-[#E1E1E1] font-light py-2 w-full text-[16px] placeholder:text-[14px] px-2 rounded-lg mt-2 outline-none focus:ring-1 focus:ring-[#EF3441] focus:shadow-[0_0_5px_#EF3441]' />
                    </label>
                    <label htmlFor="">
                        Şifrə <span className='text-[#EB7262] text-[13px]'>*</span>
                        <input type="number" className='border-[1px] border-[#E1E1E1] font-light py-2 w-full text-[16px] placeholder:text-[14px] px-2 rounded-lg mt-2 outline-none focus:ring-1 focus:ring-[#EF3441] focus:shadow-[0_0_5px_#EF3441]' />
                    </label>
                    <button className='text-white bg-[#EE2E39] w-full py-2 rounded-full mt-3'>
                        Qeydiyyat
                    </button>
                    <p className='text-center text-[14px]'>Hesabınız var? <Link to={"/login2"} className='text-[#EE2E39]'>Daxil ol</Link></p>
                </form>
            </div>

            <div className='hidden lg:flex flex-col items-center '>
                <div className='flex items-start'>
                    <div className='nunito-font flex items-start gap-2'>
                        <FaCircleCheck className='text-[#EE2E39] text-[20px] mt-1' />
                        <div className='flex flex-col'>
                            <h3 className='text-[20px] font-semibold text-[#0f172a]'>Şəxsi kabinet</h3>
                            <p className='text-[14px]'>Sifariş tarixçəsi, qaimələr, seçilmişlər siyahısı və yazışmalar</p>
                        </div>
                    </div>
                    <div className='nunito-font flex items-start gap-2'>
                        <FaCircleCheck className='text-[#EE2E39] text-[20px] mt-1' />
                        <div className='flex flex-col'>
                            <h3 className='text-[20px] font-semibold text-[#0f172a]'>Sürətli alış-veriş</h3>
                            <p className='text-[14px]'>Sifariş zamanı çatdırılma detalları avtomatik doldurulsun</p>
                        </div>
                    </div>
                    <div className='nunito-font flex items-start gap-2'>
                        <FaCircleCheck className='text-[#EE2E39] text-[20px] mt-1' />
                        <div className='flex flex-col'>
                            <h3 className='text-[20px] font-semibold text-[#0f172a]'>Endirimlər və xüsusi təkliflər</h3>
                            <p className='text-[14px]'>Hesabınızla sizə özəl kampaniyalardan xəbərdar olun</p>
                        </div>
                    </div>
                </div>
                <div className='max-w-[600px]'>
                    <img src={registrationImage} alt="registration image" className='transform scale-x-[-1] w-full mx-auto' />
                </div>

            </div>
        </div>

    )
}

export default Registration