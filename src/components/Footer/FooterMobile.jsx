import React from 'react'
import "../../style/footer.css"
import { Collapse } from 'antd';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Link } from 'react-router-dom';

function FooterMobile() {
    const items = [
        {
            key: '1',
            label: 'Hesabım',
            children:
                <ul className='md:text-[14px] text-[#1e1e1e] my-[10px] flex flex-col gap-3'>
                    <li><Link to={"/login2"}>Daxil ol</Link></li>
                    <li><Link to={"/qeydiyyat"}>Qeydiyyatdan keç</Link></li>
                </ul>,
        },
        {
            key: '2',
            label: 'Şirkət',
            children:
                <ul className='md:text-[14px] text-[#1e1e1e] my-[10px] flex flex-col gap-3'>
                    <li><Link to={"/haqqimizda"} href="">Haqqımızda</Link></li>
                    <li><Link to={"/bizimle-elaqe"}>Əlaqə</Link></li>
                    <li><a href="">Vakansiyalar</a></li>
                </ul>
        },
        {
            key: '3',
            label: 'Müştəri xidməti',
            children:
                <ul className='md:text-[14px] text-[#1e1e1e] my-[10px] flex flex-col gap-3'>
                    <li><a href="">Dəyişdirilmə və qaytarılma</a></li>
                    <li><Link to={"/odenis-ve-catdirilma"}>Ödəniş və çatdırılma</Link></li>
                    <li><a href="">Sifarişiniz haqqında</a></li>
                    <li><a href="">Seçilmişlər</a></li>
                </ul>
        },
        {
            key: '4',
            label: 'Əlaqə',
            children:
                <ul className='md:text-[14px] text-[#1e1e1e] my-[10px] flex flex-col gap-3'>
                    <li><a href="">Bakı, Badamdar qəs., Mikayıl Müşfiq küç. 1c (Badamdar Estates)</a></li>
                    <li><a href="">+994-50-290-44-96</a></li>
                    <li><a href="">B.e.-B. 9.00 - 18.00</a></li>
                    <li className='underline'><a href="">online@libraff.az</a></li>
                    <li><a href="">Xəritədə bax</a></li>
                </ul>
        },
    ];

    return (
        <div className='container'>
            <Collapse accordion
                items={items}
                ghost
                expandIcon={({ isActive }) =>
                    isActive ? <AiOutlineMinus size={18} /> : <AiOutlinePlus size={18} />
                }
                expandIconPosition="end"
                className="custom-collapse"
                />
            <div className='md:text-[14px] text-[#1e1e1e] my-[10px] flex flex-col gap-3 py-[10px] nunito-font'>
                <p className="bottom-copyright">
                    © 2017 - 2025 Libraff.
                </p>
            </div>
        </div>
    )
}

export default FooterMobile