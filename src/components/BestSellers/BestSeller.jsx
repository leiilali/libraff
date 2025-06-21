import React, { useEffect, useState } from 'react';
import BestSellerBooks from './BestSellerBooks';
import { getBestSeller } from '../../services/api';
import { Link } from 'react-router-dom';

function BestSeller() {
    const [activeLanguage, setActiveLanguage] = useState('Azərbaycan');
    const languages = ['Azərbaycan', 'Türkcə', 'Rusca', 'Uşaq Ədəbiyyatı'];

    const [bestSeller, setBestSeller] = useState([]);

    const languageMap = {
        'Azərbaycan': 'AZE',
        'Türkcə': 'TUR',
        'Rusca': 'RUS',
        'Uşaq Ədəbiyyatı': 'KIDS'
    };

    useEffect(() => {
        getBestSeller().then(response => {
            setBestSeller(response.books);
        });
    }, []);


    const selectedLangCode = languageMap[activeLanguage];
    const filteredBooks = bestSeller.filter(book => book.language === selectedLangCode);

    return (
        <div className="container">
            <h2 className="text-[28px] text-[#0f172a] my-5 font-semibold">
                May ayının ən çox satılan kitabları – Bestsellerlər (2025)
            </h2>

            <div className="flex flex-col gap-y-6">
                <p className="nunito-font !text-[14px] lg:text-[16px] font-light text-[#0f172a]">
                    Hər ay minlərlə oxucu növbəti kitabını tapmaq üçün fiziki mağazalarımızı və onlayn mağaza rəflərimizi ziyarət edir. Biz aylıq bestseller siyahılarımızda oxucular tərəfindən ən çox alınan kitabları təqdim edirik. Ayın ən çox oxunan kitabları azərbaycanca, türkcə, rusca və uşaq ədəbiyyatı olmaqla dörd bölmədə təqdim olunur. Siyahıya əsasən son aylarda Azərbaycanda ən çox oxunan kitablar haqqında məlumat əldə edə bilərsiniz.
                </p>

                <p className="nunito-font !text-[14px] lg:text-[16px] font-light text-[#0f172a]">
                    Unudulmaz hekayələrdən ilhamverici fikirlərə, klassiklərdən yeni nəşrlərə qədər – bu siyahı oxucuların qəlbinə toxunan, söhbətlərə səbəb olan və rəflərdən sürətlə yoxa çıxan kitablardan ibarətdir.
                </p>

                <p className="nunito-font !text-[14px] lg:text-[16px] font-light text-[#0f172a]">
                    Siyahımızda minlərlə oxucunun seçdiyi bu kitablar arasında ruhunuza toxunan bir əsər mütləq ki tapılar.
                </p>
            </div>

            <div className="nunito-font my-4 text-[14px] text-[#333] font-light flex gap-3 items-center">
                {languages.map(lang => (
                    <button
                        key={lang}
                        onClick={() => setActiveLanguage(lang)}
                        className={`py-[7px] px-[20px] rounded-full border-[1px] transition duration-200
                        ${activeLanguage === lang
                                ? 'bg-[#EF3441] text-white border-[#EF3441]'
                                : 'border-[#EF3441] hover:bg-[#F76C77] hover:border-[#F76C77] hover:text-white'
                            }`}
                    >
                        {lang}
                    </button>
                ))}
            </div>

            {filteredBooks.length > 0 ? (
                filteredBooks.map(book => (
                    <Link key={book.id} to={`/kitab/${book.id}`}>
                        <BestSellerBooks book={book} />
                    </Link>
                ))) : (
                <p className="text-[14px] text-[#767676] mt-4">Bu dildə bestseller kitab tapılmadı.</p>
            )}
        </div>
    );
}

export default BestSeller;
