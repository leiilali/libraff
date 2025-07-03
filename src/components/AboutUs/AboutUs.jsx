import React, { useEffect } from 'react'
import aboutUs from "../../assets/images/navImages/aboutLibraff.jpg"
import { Link } from 'react-router-dom'

function AboutUs() {

    useEffect(() => {
        document.title = "Haqqımızda | Libraff"
    }, [])

    return (
        <>
            <div className="container">
                <h2 className='text-[28px] text-[#0f172a] my-5 font-semibold'>Haqqımızda</h2>
                <div>
                    <img src={aboutUs} alt="Haqqımızda" />
                </div>
                <div className='nunito-font text-[#0f172a] text-[14px] font-light my-[20px]'>
                    <p className='py-[6px]'>
                        2017-ci ildə yaradılan “LIBRAFF” Azərbaycanda ən böyük modern kitab mağazaları şəbəkəsidir..
                    </p>
                    <p className='py-[6px]'>
                        “LIBRAFF” kitab mağazaları şəbəkəsinin Bakıda 5, Sumqayıtda 1, Gəncədə isə 1 filialı fəaliyyət göstərir.
                    </p>
                    <p className='py-[6px]'>
                        “LIBRAFF”ın  “Kitab” bölməsində azərbaycan, rus, ingilis, türk və digər xarici dillərdə olan zəngin kitabxanası mövcuddur. Mağazalarımızda yerli və aparıcı beynəlxalq nəşriyyatların klassik əsərlərini, xüsusi seçilmiş müasir ədəbiyyat nümunələrini, uşaq və yeniyetmələrin şəxsi inkişafına istiqamətlənmiş əyləncə və oxu materiallarını əldə etmək mümkündür.
                    </p>
                    <p className='py-[6px]'>
                        “LIBRAFF”ın ˝Fəvvarələr˝ və ˝Gənclik Mall˝ filiallarında “coffeeshop in bookshop” konseptində “STORIES COFFEE”  fəaliyyət göstərir.
                    </p>
                    <p className='py-[6px]'>
                        Mağazalarımızda kitablarla yanaşı, oyuncaqlar, hədiyyəlik əşyalar, suvenirlər, məktəb və ofis ləvazimatları, elektronika məhsullarını da əldə etmək mümkündür.
                    </p>
                    <p className='py-[6px]'>
                        Əlaqə: +994 50 290 44 96
                    </p>
                    <Link to={"/"} className='py-[6px] text-[#EF3441]'>
                        www.libraff.az
                    </Link>
                    <p className='py-[6px]'>
                        Email: <span className='text-[#EF3441]'>info@libraff.az</span>
                    </p>
                    <p className='py-[6px]'>Facebook/Instagram: libraff.az</p>
                </div>
            </div>
        </>
    )
}

export default AboutUs