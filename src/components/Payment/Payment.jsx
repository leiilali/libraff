import React, { useEffect } from 'react'
import payment from "../../assets/images/navImages/payment.jpg"

function Payment() {

    useEffect(()=>{
        document.title = "Ödəniş və çatdırılma | Libraff"
    }, [])

    return (
        <>
            <div className="container">

                <h2 className='text-[28px] text-[#0f172a] my-5 font-semibold'>Ödəniş və çatdırılma</h2>

                <div>
                    <img src={payment} alt="Ödəniş və çatdırılma" />
                </div>

                <div>
                    <div className='nunito-font text-[#0f172a] text-[14px] font-light my-[20px]'>
                        <h3 className='!text-[24px] !font-semibold'>Məhsulun çatdırılması</h3>
                        <p className='py-[6px]'>Sifarişiniz gün ərzində təsdiqləndikdən sonra əməkdaşlarımız sizinlə əlaqə saxlayır, ünvan və digər vacib məlumatları, ödəmə növünü dəqiqləşdirdikdən sonra 24 saat ərzində çatdırılma edilir.</p>
                        <p className='py-[6px]'>Yaşadığınız ərazidən asılı olaraq, çatdırılma günləri və saatları fərqli ola bilər. Gecikmə halları olarsa, öncədən məlumatlandırılacaqsınız. Ölkədaxili və xarici çatdırılma xidmətlərimiz mövcuddur. Bölgələrə çatdırılmalar poçt vasitəsi və yalnız bank kartları ilə həyata keçirilir. Məsafədən asılı olmayaraq, bölgələrə çatdırılma məbləği 3.50 AZN təşkil edir və çatdırılmalar 3-5 iş günü ərzində reallaşır.</p>
                        <p className='font-semibold italic'>Əgər sifarişiniz Bakı və Abşeron ərazisindəndirsə və məhsul(lar)ın ümumi dəyəri 30 AZN-dən çoxdursa, bu halda sifarişiniz kuryer tərəfindən pulsuz çatdırılacaqdır. (Sumqayıt istisna olmaqla)</p>
                    </div>

                    <div className='nunito-font text-[#0f172a] text-[14px] font-light my-[20px]'>
                        <h3 className='!text-[24px] !font-semibold'>Çatdırılma formaları</h3>
                        <p className='py-[6px]'>Kuryer vasitəsi ilə çatdırılma (ölkədaxili)</p>
                        <p className='py-[6px]'>Sifarişlərinizi mağazalarımızdan təhvil almaq imkanınız da vardır. ("Hava limanı" filialı istisna olmaqla)</p>
                        <p className='py-[6px]'>Sifarişləriniz tərəfdaşımız olan peşəkar kuryer şirkəti tərəfindən çatdırılır.</p>
                    </div>

                    <div className='nunito-font text-[#0f172a] text-[14px] font-light my-[20px]'>
                        <h3 className='!text-[24px] !font-semibold'>Ödəniş</h3>
                        <p className='py-[6px]'>Qapıda ödəniş (Bakı və Abşeron üzrə)</p>
                        <p className='py-[6px]'>Ödənişlərinizi debet və kredit kartlarınızla onlayn şəkildə edə bilərsiniz. Həmçinin qapıda nağd şəkildə ödəmək imkanınız da vardır.</p>
                        <p className='py-[6px]'>Korporativ alışlarla bağlı ətraflı məlumat almaq üçün <span className='text-[#ef3340] font-semibold'>+994 50 290 78 11</span> nömrəsi ilə əlaqə saxlaya bilərsiniz.</p>
                        <p className='py-[6px]'>Məhsul axtarışlarınızı, ödənişlərinizi və s. xidmətlərimizdən istifadəni mobil telefon vasitəsi ilə də edə bilərsiniz.</p>
                        <p className='py-[6px]'>Sifarişlərizdə dəstəklə bağlı onlayn çağrı xidmətimizlə (Call center) əlaqə saxlaya bilərsiniz: <span className='text-[#ef3340] font-semibold'> +994 50 290 44 96</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment