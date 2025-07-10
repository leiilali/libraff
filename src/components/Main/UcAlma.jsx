import React from 'react'
import { Link } from 'react-router-dom'

import kitab1 from "../../assets/images/ucAlmaImages/kitab1.webp"
import kitab2 from "../../assets/images/ucAlmaImages/kitab2.webp"
import kitab3 from "../../assets/images/ucAlmaImages/kitab3.webp"
import kitab4 from "../../assets/images/ucAlmaImages/kitab4.webp"
import kitab5 from "../../assets/images/ucAlmaImages/kitab5.webp"

function UcAlma() {
    return (
        <div className='container'>
            <h2 className='nunito-font text-[26px] text-[#0f172a]'>
                <span className='text-[#ee2d39]'>3alma</span> ən yenilər
            </h2>

            <div className="grid xl:grid-cols-[450px_1fr_450px] items-stretch gap-4 mt-4">
                {/* left column */}
                <div className="grid grid-rows-2 gap-2">
                    <Link to="/kitab/35">
                        <div className='flex items-center bg-[#F9FAFC] rounded-2xl h-full'>
                            <div className='p-[20px] w-[50%] '>
                                <h3 className='capitalize nunito-font text-[20px]'>viam əhməd</h3>
                                <h4 className='nunito-font text-[24px] font-bold capitalize'>70kq</h4>
                                <p className='text-[16px] nunito-font font-light'>
                                    Sürətli çatdırılma şirkəti yükünüzü etibarlı şəkildə ünvanına çatdıracaq...
                                </p>
                            </div>
                            <div className='w-[50%]'>
                                <img src={kitab1} alt="" className='w-full object-cover object-center' />
                            </div>
                        </div>
                    </Link>

                    <Link to="/kitab/36">
                        <div className='flex items-center bg-[#FEF3F2] rounded-2xl h-full'>
                            <div className='p-[20px] w-[50%]'>
                                <h3 className='capitalize nunito-font text-[20px] text-[#666]'>volkan yavəroğlu</h3>
                                <h4 className='nunito-font text-[24px] font-bold capitalize'>alma ağacı</h4>
                                <p className='text-[16px] nunito-font text-[#666]'>
                                    Qasırğa ən çox sevdikləri alma ağacının gövdəsini qırıb yana əymişdi.
                                </p>
                            </div>
                            <div className='w-[50%]'>
                                <img src={kitab2} alt="" className='w-full object-cover object-center' />
                            </div>
                        </div>
                    </Link>
                </div>

                {/* middle column */}
                <Link to="/kitab/34">
                    <div className='bg-[#FFF3C7] rounded-2xl h-full flex flex-col justify-between'>
                        <div className='flex flex-col items-center'>
                            <div className='w-[60%]'>
                                <img src={kitab3} alt="" className="w-full object-cover object-center" />
                            </div>
                            <div className='p-[20px] flex flex-col items-center '>
                                <h3 className='capitalize nunito-font text-[20px] text-[#666]'>reyhan yusifqızı</h3>
                                <h4 className='nunito-font text-[24px] font-bold capitalize'>Bir şəhər, bir liman</h4>
                                <p className='text-[16px] nunito-font text-[#666] text-center'>
                                    Tarixi keçmişimizi bu günümüzlə, bu günümüzü isə gələcəklə birləşdirən liman...
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* right column */}
                <div className="grid grid-rows-2 gap-2">
                    <Link to="/kitab/33">
                        <div className='flex items-center bg-[#F8FFE7] rounded-2xl h-full'>
                            <div className='p-[20px] w-[50%]'>
                                <h3 className='capitalize nunito-font text-[20px]'>ramiz rövşən</h3>
                                <h4 className='nunito-font text-[24px] font-bold capitalize'>dadlı günəş</h4>
                                <p className='text-[16px] nunito-font'>
                                    Niyə hamı deyir: “Sən yaman odlu günəşsən”. Yox, sən odlu deyilsən, sən lap dadlı günəşsən!
                                </p>
                            </div>
                            <div className='w-[50%]'>
                                <img src={kitab4} alt="" className='w-full object-cover object-center' />
                            </div>
                        </div>
                    </Link>

                    <Link to="/kitab/37">
                        <div className='flex items-center bg-[#EFF6FF] rounded-2xl h-full'>
                            <div className='p-[20px] w-[50%]'>
                                <h3 className='capitalize nunito-font text-[20px] text-[#666]'>erge özcan</h3>
                                <h4 className='nunito-font text-[24px] font-bold capitalize'>itmiş kitab</h4>
                                <p className='text-[16px] nunito-font text-[#666]'>
                                    ...Lakin kitabı qoyduğu yerdə tapa bilmirdi. Elə macəra da bundan sonra başlayır.
                                </p>
                            </div>
                            <div className='w-[50%]'>
                                <img src={kitab5} alt="" className='w-full object-cover object-center' />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UcAlma
