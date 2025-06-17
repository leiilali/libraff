import React from 'react'
import loyaltyCard from "../../assets/images/navImages/loyalty.jpg"

function LoyaltyCard() {
    return (
        <div>


            <div className="container">

                <h2 className='text-[28px] text-[#0f172a] my-5 font-semibold'>Loyallıq Kartı</h2>

                <div>
                    <img src={loyaltyCard} alt="Loyallıq Kartı" />
                </div>

                <div className='nunito-font text-[#0f172a] text-[14px] font-light my-[20px]'>
                    <h3 className='!font-semibold uppercase'>Yenilik!</h3>
                    <p className='py-[6px]'><span className='font-semibold'>˝LIBRAFF˝</span> Mağazalar şəbəkəsindən etdiyiniz hər alış-verişə görə 3% ˝Cashback˝ qazanacaqsınız! Bu sizə əlavə imkanlar və yeni seçimlər yaradacaqdır.</p>
                    <p className='py-[6px]'>Bunun üçün ˝Loyallıq kartı˝mızı əldə etməyiniz kifayətdir. Kartda yığılan vəsaiti həm nağd, həm də onlayn alışlar zamanı istifadə etmək mümkündür.</p>
                    <p className='py-[6px]'>Loyallıq kartı olan hər kəs mağazalarımızdakı endirim kampaniyaları və yeniliklər barədə mütəmadi məlumat əldə edə biləcək. Həmçinin etdiyiniz alış-verişə uyğun SİZƏ ÖZƏL təkliflərimiz olacaq!</p>
                    <p className='py-[6px]'>Məlumat üçün bildirək ki, endirimdə olan məhsullar üçün keşbek nəzərdə tutulmayıb və toplanan vəsaiti nağdlaşdırmaq qeyri-mümkündür.</p>
                    <p className='py-[6px]'>Kartları əldə etmək üçün mağazalarımıza yaxınlaşıb, “Loyallıq Kartı Aktivləşdirmə Anketi”ni doldurmağınız kifayətdir.</p>
                </div>

            </div>
        </div>
    )
}

export default LoyaltyCard