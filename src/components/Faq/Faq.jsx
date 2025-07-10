import React, { useEffect } from 'react'
import { Collapse } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import faq from "../../assets/images/navImages/faq.jpg"

function Faq() {
    useEffect(() => {
        document.title = "FAQ | Libraff"
    }, [])

    return (
        <div>
            <div className="container">
                <h2 className='text-[28px] text-[#0f172a] my-5 font-medium'>FAQ</h2>
                <div>
                    <img src={faq} alt="FAQ" />
                </div>
                <div className='mt-6'>
                    <Collapse
                        className="rounded-2xl border border-gray-300"
                        expandIcon={({ isActive }) => (
                            <RightOutlined
                                rotate={isActive ? 90 : 0}
                                className="!text-[18px] xl:mt-1.5 mt-6"
                            />
                        )}
                        size="large"
                        items={[{
                            key: '1',
                            label: (
                                <span className="text-[16px] xl:text-[24px] font-medium">
                                    Sual - Məhsullarınızı necə sifariş edə bilərəm?
                                </span>
                            ), children: (
                                <p className="text-[18px] leading-relaxed nunito-font">
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
                <div className='mt-6'>
                    <Collapse
                        className="rounded-2xl border border-gray-300"
                        expandIcon={({ isActive }) => (
                            <RightOutlined
                                rotate={isActive ? 90 : 0}
                                className="!text-[18px] xl:mt-1.5"
                            />
                        )}
                        size="large"
                        items={[{
                            key: '1',
                            label: (
                                <span className="text-[16px] xl:text-[24px] font-medium">
                                    Sual - Çatdırılma xidmətiniz var?
                                </span>
                            ), children: (
                                <p className="text-[18px] leading-relaxed nunito-font">
                                    Cavab – Bəli, bizdə ölkədaxili çatdırılma həyata keçirilir. Bakı şəhərində daxilində sifarişlər, sifariş növbəlilik əsasında operator tərəfindən təsdiqləndikdən sonra 24 saat ərzində həyata keçirilir.
                                    Çatdırılma qiyməti: 1.95 ₼-dan başlayır (Məsafəyə, ölçü və çəkiyə görə məbləğ dəyişə bilər.).
                                </p>
                            )
                        }]}
                    />
                </div>
                <div className='mt-6'>
                    <Collapse
                        className="rounded-2xl border border-gray-300"
                        expandIcon={({ isActive }) => (
                            <RightOutlined
                                rotate={isActive ? 90 : 0}
                                className="!text-[18px] xl:mt-1.5 mt-6"
                            />
                        )}
                        size="large"
                        items={[{
                            key: '1',
                            label: (
                                <span className="text-[16px] xl:text-[24px] font-medium">
                                    Sual - Taksit kartları ilə ödəniş mümkündür?
                                </span>
                            ), children: (
                                <p className="text-[18px] leading-relaxed nunito-font">
                                    Cavab - Bəli. Birkart və Bolkart vasitəsi ilə alış-verişinizi hissə-hissə və faizsiz ödəmək imkanınız var.
                                </p>
                            )
                        }]}
                    />
                </div>
                <div className='mt-6'>
                    <Collapse
                        className="rounded-2xl border border-gray-300"
                        expandIcon={({ isActive }) => (
                            <RightOutlined
                                rotate={isActive ? 90 : 0}
                                className="!text-[18px] xl:mt-1.5 mt-6"
                            />
                        )}
                        size="large"
                        items={[{
                            key: '1',
                            label: (
                                <span className="text-[16px] xl:text-[24px] font-medium">
                                    Sual -  Mağazalarınızda kitab oxumaq üçün oxu guşələri varmı?
                                </span>
                            ), children: (
                                <p className="text-[18px] leading-relaxed nunito-font">
                                    Cavab - Bəli. Siz Fəvvarələr və Gənclik MALL filiallarımızın nəzdində fəaliyyət göstərən “Stories Coffee”-nin məhsullarından sifariş edərək, bizdən aldığınız, özünüzlə gətirdiyiniz və ya bu kimi məqsədlər daşıyan digər kitabları oxuya bilərsiniz.
                                </p>
                            )
                        }]}
                    />
                </div>
                <div className='mt-6'>
                    <Collapse
                        className="rounded-2xl border border-gray-300"
                        expandIcon={({ isActive }) => (
                            <RightOutlined
                                rotate={isActive ? 90 : 0}
                                className="!text-[18px] xl:mt-1.5 mt-6"
                            />
                        )}
                        size="large"
                        items={[{
                            key: '1',
                            label: (
                                <span className="text-[16px] xl:text-[24px] font-medium">
                                    Sual - Aldığım kitabı necə geri qaytara bilərəm?
                                </span>
                            ), children: (
                                <p className="text-[18px] leading-relaxed nunito-font">
                                    Cavab - Əgər kitab sizin tərəfinizdən zədələnməyibsə, 14 gün ərzində alışı təsdiq edən qəbzlə birlikdə onu aldığınız filiala yaxınlaşaraq, dəyişə və ya geri qaytara bilərsiniz.
                                </p>
                            )
                        }]}
                    />
                </div>
                <div className='mt-6'>
                    <Collapse
                        className="rounded-2xl border border-gray-300"
                        expandIcon={({ isActive }) => (
                            <RightOutlined
                                rotate={isActive ? 90 : 0}
                                className="!text-[18px] xl:mt-1.5 mt-6"
                            />
                        )}
                        size="large"
                        items={[{
                            key: '1',
                            label: (
                                <span className="text-[16px] xl:text-[24px] font-medium">
                                    Sual - Məhsullarınızla necə tanış ola bilərəm?
                                </span>
                            ), children: (
                                <p className="text-[18px] leading-relaxed nunito-font">
                                    Cavab - libraff.az saytına daxil olmaqla, "Çağrı Mərkəzi" ilə əlaqə saxlayaraq və ya 0502904496 votsap nömrəmizə yazaraq, ətraflı məlumat əldə edə bilərsiniz.
                                </p>
                            )
                        }]}
                    />
                </div>
                <div className='mt-6'>
                    <Collapse
                        className="rounded-2xl border border-gray-300"
                        expandIcon={({ isActive }) => (
                            <RightOutlined
                                rotate={isActive ? 90 : 0}
                                className="!text-[18px] xl:mt-1.5 mt-6"
                            />
                        )}
                        size="large"
                        items={[{
                            key: '1',
                            label: (
                                <span className="text-[16px] xl:text-[24px] font-medium">
                                    Sual - İş üçün necə müraciət edə bilərəm?
                                </span>
                            ), children: (
                                <p className="text-[18px] leading-relaxed nunito-font">
                                    Cavab - Siz "Karyera" bölməsindən vakansiyaların siyahısı ilə tanış ola bilər və hr@libraff.az elektron ünvanına müvafiq başlıqla CV-nizi göndərə bilərsiniz. Uyğun vakansiya olduqda sizinlə əlaqə saxlanılacaq.
                                </p>
                            )
                        }]}
                    />
                </div>
                <div className='mt-6'>
                    <Collapse
                        className="rounded-2xl border border-gray-300"
                        expandIcon={({ isActive }) => (
                            <RightOutlined
                                rotate={isActive ? 90 : 0}
                                className="!text-[18px] xl:mt-1.5 mt-6"
                            />
                        )}
                        size="large"
                        items={[{
                            key: '1',
                            label: (
                                <span className="text-[16px] xl:text-[24px] font-medium">
                                    Sual - Mağazalarınız hansı ünvanlarda yerləşir?
                                </span>
                            ), children: (
                                <p className="text-[18px] leading-relaxed nunito-font">
                                    Cavab - Saytımızın “Əlaqə” bölməsinin “Mağazalarımız” hissəsindən ünvanlarımızı öyrənə bilərsiniz.
                                </p>
                            )
                        }]}
                    />
                </div>
                <div className='mt-6'>
                    <Collapse
                        className="rounded-2xl border border-gray-300"
                        expandIcon={({ isActive }) => (
                            <RightOutlined
                                rotate={isActive ? 90 : 0}
                                className="!text-[18px] xl:mt-1.5 "
                            />
                        )}
                        size="large"
                        items={[{
                            key: '1',
                            label: (
                                <span className="text-[16px] xl:text-[24px] font-medium">
                                    Sual - Mağazalarınızın iş rejimi necədir?
                                </span>
                            ), children: (
                                <p className="text-[18px] leading-relaxed nunito-font">
                                    Cavab - Hazırda mağazalarımızın iş rejimi belədir:
                                    <ul className='list-disc list-inside'>
                                        <li>“Park Akademiya”, “Fəvvarələr”və “İstiqlaliyyət” filialları hər gün 10:00-dan 22:00-dək;</li>
                                        <li>“Gənclik Mall”, “Sumqayıt” və “Gəncə Mall” filialları hər gün 10:00-dan 22:00-dək;</li>
                                        <li>“Hava Limanı” filialımız isə 24/7 olmaqla xidmətinizdədir.</li>
                                    </ul>
                                </p>
                            )
                        }]}
                    />
                </div>
            </div>
        </div >
    )
}

export default Faq