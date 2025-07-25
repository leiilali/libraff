import React from 'react'
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import loginImg from "../assets/images/authImages/loginImage.svg"
import logo from "../assets/images/logo/libraffLogo.png"

function LoginPage() {
    return (
        <div className='container xl:flex xl:justify-between xl:items-center xl:gap-[70px] '>
            <div className='xl:w-[40%]'>
                <div className='flex flex-col items-center xl:items-start xl:mt-10'>
                    <Link to={"/"} className='w-[120px]'>
                        <img src={logo} alt="logo" className='w-full' />
                    </Link>
                    <h3 className='text-[#0f172a] text-[28px] mt-8 mb-3 font-bold'>Daxil ol</h3>
                </div>

                <div>
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

                <form className="nunito-font text-[#0f172a] font-light text-[14px] flex flex-col gap-4">
                    <label htmlFor="">
                        E-poçt <span className='text-[#EB7262] text-[13px]'>*</span>
                        <input
                            type="number"
                            className="border border-[#E1E1E1] font-light py-2 w-full text-[16px] placeholder:text-[14px] px-2 rounded-lg mt-2 outline-none 
                                            focus:ring-[1px] focus:ring-[#EF3441] focus:border-[#EF3441] focus:shadow-[0_0_5px_#EF3441] 
                                            hover:border-[#ef3441] hover:shadow-[0_0_5px_#EF3441]"
                        />
                    </label>

                    <label htmlFor="">
                        <div className="flex justify-between items-center">
                            <div>
                                Şifrə <span className='text-[#EB7262] text-[13px]'>*</span>
                            </div>
                            <Link className=" text-[#EE2E39]">Şifrəni unutdum</Link>
                        </div>
                        <input type="text"
                            className="border border-[#E1E1E1] font-light py-2 w-full text-[16px] placeholder:text-[14px] px-2 rounded-lg mt-2 outline-none 
                                            focus:ring-[1px] focus:ring-[#EF3441] focus:border-[#EF3441] focus:shadow-[0_0_5px_#EF3441] 
                                            hover:border-[#ef3441] hover:shadow-[0_0_5px_#EF3441]"                            />
                    </label>

                    <button className="w-[80%] lg:w-full  mx-auto bg-[#EE2E39] text-white py-2 mt-4 text-[16px] font-semibold rounded-full">
                        Daxil ol
                    </button>
                </form>

                <p className='text-center text-[#64748B] nunito-font font-light text-[14px] mt-5'>Hesabınız yoxdur? <Link to={"/qeydiyyat"} className='text-[#EE2E39] font-semibold'>Qeydiyyatdan keçin</Link></p>

            </div>

            <div className='hidden lg:flex lg:w-[60%] flex-col items-center mt-[100px]'>

                <div>
                    <img src={loginImg} alt="registration image" className=' w-full mx-auto' />
                </div>

            </div>
        </div>
    )
}

export default LoginPage