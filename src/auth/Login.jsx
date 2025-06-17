import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";



const Login = () => {
    const navigate = useNavigate(); 

    const handleClose = () => {
        navigate(-1); 
    };

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl py-3 w-full max-w-sm shadow-xl relative">

                <div className="px-6 pb-2 flex justify-between items-center">
                    <h2 className="nunito-font font-light text-[22px]">Daxil ol</h2>
                    <button onClick={handleClose}>
                        <MdOutlineClose className="text-[25px] text-[#767676]" />
                    </button>
                </div>

                <div className="bg-[#E1E1E1] h-[1px] w-full"></div>



                <div className="p-6">
                    <div className='text-[17px] text-[#334155] nunito-font flex items-center font-light gap-2 border-[1px] border-[#757775] w-full py-1.5 justify-center rounded-full'>
                        <FcGoogle className='text-[23px]' />
                        Google hesabı ilə daxil ol
                    </div>

                    <div className='flex items-center gap-1 my-4'>
                        <span className='bg-[#E2E8F0] h-[1px] w-full'></span>
                        <span className='text-[#64748b] text-[14px] font-light nunito-font'>və&nbsp;ya</span>
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
                                Şifrə <span className='text-[#EB7262] text-[13px]'>*</span>
                                <Link className=" text-[#EE2E39]">Şifrəni unutdum</Link>
                            </div>
                            <input type="text"
                                className="border border-[#E1E1E1] font-light py-2 w-full text-[16px] placeholder:text-[14px] px-2 rounded-lg mt-2 outline-none 
                                            focus:ring-[1px] focus:ring-[#EF3441] focus:border-[#EF3441] focus:shadow-[0_0_5px_#EF3441] 
                                            hover:border-[#ef3441] hover:shadow-[0_0_5px_#EF3441]"                            />
                        </label>

                        <button className="w-[80%] mx-auto bg-[#EE2E39] text-white py-2 mt-4 text-[14px] font-semibold rounded-full">
                            Daxil ol
                        </button>
                    </form>

                    <p className='text-center text-[#64748B] nunito-font font-light text-[14px] mt-4'>Hesabınız yoxdur? <Link to={"/qeydiyyat"} className='text-[#EE2E39] font-semibold'>Qeydiyyatdan keçin</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;
