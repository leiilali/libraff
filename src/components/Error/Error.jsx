import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Error() {
    const navigate = useNavigate();
    
    useEffect(() => {
        document.title = "Səhifə tapılmadı"
    }, [])

    return (
        <div className='container  !my-[80px]'>
            <div className='lg:flex lg:items-center lg:gap-[100px]'>
                <div className='text-[#E84C3D] nunito-font font-semibold flex flex-col items-center'>
                    <h2 className='text-[86px]'>404</h2>
                    <span className='text-[26px] font-light'>Xəta!</span>
                </div>

                <div>
                    <div className='text-[#34495e] lg:items-start text-[25px] nunito-font font-light flex flex-col items-center mt-4'>
                        <p>Bağışlayın!</p>
                        <p>Sizin axtardığınızı tapa bilmədik.</p>
                    </div>

                    <div className='mt-7 mb-4 text-[16px] text-[#bdc3c7] nunito-font font-light flex items-center lg:items-start flex-col gap-7'>
                        <p>Tələb olunan səhifə tapılmadı. </p>
                        <p>Xəta kodu: Səhifə tapılmadı </p>
                    </div>

                    <div className='text-[#E84C3D] lg:justify-start text-[14px] nunito-font underline font-light flex items-center gap-3 justify-center mt-4'>
                        <Link to={"/"}>Əsas səhifəyə keçid</Link>
                        <button onClick={() => {
                            if (window.history.length > 1) {
                                navigate(-1);
                            } else {
                                navigate('/');
                            }
                        }}>
                            Geri
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error;
