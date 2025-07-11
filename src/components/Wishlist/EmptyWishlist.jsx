import React from 'react'
import { useState, useEffect } from 'react';

function EmptyWishlist() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            {isLargeScreen ? (
                <div className="grid grid-cols-4 gap-4">
                    {Array(4)
                        .fill(null)
                        .map((_, index) => (
                            <div key={index} className="bg-[#F8F9F9] flex justify-center items-center h-[190px] w-full">
                                <h3 className="text-[#CDCDCD] font-light">Boş</h3>
                            </div>
                        ))}
                </div>
            ) : (
                <div className="w-full">
                    <div className="bg-[#F8F9F9] flex justify-center items-center h-[190px] w-full">
                        <h3 className="text-[#CDCDCD] font-light">Boş</h3>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EmptyWishlist