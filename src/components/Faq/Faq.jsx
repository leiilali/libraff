import React, { useEffect } from 'react'
import faq from "../../assets/images/navImages/faq.jpg"
import { Collapse } from 'antd';
import { RightOutlined } from '@ant-design/icons';




function Faq() {

    useEffect(()=>{
        document.title = "FAQ | Libraff"
    }, [])

    return (
        <div>
            <div className="container">
                <h2 className='text-[28px] text-[#0f172a] my-5 font-semibold'>FAQ</h2>
                <div>
                    <img src={faq} alt="FAQ" />
                </div>

                {Array(15).fill(null).map((_, index) => (
                    <div className='mt-6'>
                        <Collapse
                            className="rounded-2xl border border-gray-300"
                            expandIcon={({ isActive }) => (
                                <RightOutlined
                                    rotate={isActive ? 90 : 0}
                                    className="!text-[18px] mt-1.5"
                                />
                            )}
                            size="large"
                            items={[{
                                key: '1',
                                label: (
                                    <span className="text-[20px] font-semibold">
                                        Sual - Məhsullarınızı necə sifariş edə bilərəm?
                                    </span>
                                ), children: (
                                    <p className="text-[18px] leading-relaxed">
                                        Cavab – Veb-saytımız, sosial şəbəkələrdəki səhifələrimiz və ya 0502904496
                                        votsap nömrəmiz vasitəsi ilə sifariş etmək olar. Bunun üçün sifariş etmək
                                        istədiyiniz məhsulun adını, əlaqə nömrənizi və ünvanınızı qeyd etməyiniz
                                        kifayətdir. Əməkdaşlarımız ən qısa zamanda sizinlə əlaqə saxlayıb
                                        sifarişinizi çatdıracaqlar.
                                    </p>
                                )
                            }]}
                        />
                    </div>

                ))}


            </div>
        </div >
    )
}

export default Faq