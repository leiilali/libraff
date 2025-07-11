import { Link, useLocation } from 'react-router-dom';

const breadcrumbLabels = {
    'odenis-ve-catdirilma': 'Ödəniş və Çatdırılma',
    'loyalty-card': 'Loyalty Kartı',
    'faq-az': 'FAQ',
    'bizimle-elaqe': 'Mağazalar və Əlaqə',
    'kampaniyalar-az': 'Kampaniyalar',
    'wishlist-view': 'Əlavə edilmişlər',
    'muellifler': 'Müəlliflər',
    'kitab': 'Kitab',
    'subkateqoriya': 'Kateqoriyalar',
    'klassiklr': 'Klassiklər',
    'bestsellerler': 'İyun ayının ən çox satılan kitabları – Bestsellerlər (2025)',
    'axtar': 'Axtarış nəticəsi',
    'sebet': 'Səbətdə olanlar',
    'login': 'Giriş',
    'login2': 'Giriş',
    'qeydiyyat': 'Qeydiyyat',
    'haqqimizda': 'Haqqımızda'
};

function Breadcrumbs({ categories = [], currentTitle }) {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(Boolean);
    const inDetailsPage = categories.length > 0 || currentTitle;

    return (
        <div className="text-[14px] mt-1 font-light text-[#9C9C9C]">
            <Link to="/" className="text-[#767676] !nunito-font hover:text-[#EF3340] px-1">
                Əsas səhifə
            </Link>

            {inDetailsPage ? (
                <>
                    {categories.map((cat) => {
                        const label = breadcrumbLabels[cat.categoryCode?.toLowerCase()] || cat.categoryName;
                        return (
                            <span key={cat.categoryCode}>
                                {' / '}
                                <Link
                                    to={`/subkateqoriya?code=${cat.categoryCode}`}
                                    className="text-[#767676] nunito-font px-1 hover:text-[#EF3340]"
                                >
                                    {label}
                                </Link>
                            </span>
                        );
                    })}
                    {currentTitle && (
                        <span>
                            {' / '}
                            <span className="text-[#9C9C9C] nunito-font px-1">{currentTitle}</span>
                        </span>
                    )}
                </>
            ) : (
                pathnames.map((segment, index) => {
                    const to = '/' + pathnames.slice(0, index + 1).join('/');
                    const label = breadcrumbLabels[segment.toLowerCase()] || decodeURIComponent(segment).replace(/-/g, ' ');
                    const isLast = index === pathnames.length - 1;
                    return (
                        <span key={to}>
                            {' / '}
                            {isLast ? (
                                <span className="text-[#767676] nunito-font px-1">{label}</span>
                            ) : (
                                <Link
                                    to={to}
                                    className="text-[#9C9C9C] nunito-font px-1 hover:text-[#EF3340]"
                                >
                                    {label}
                                </Link>
                            )}
                        </span>
                    );
                })
            )}
        </div>
    );
}

export default Breadcrumbs;
