import React from 'react';
import AboutBookDesktop from './AboutBook/AboutBookDesktop';
import AboutBookMobile from './AboutBook/AboutBookMobile';

function AboutBook({books}) {
    return (
        <div>
            <div className="hidden md:block">
                <AboutBookDesktop books={books} />
            </div>

            <div className="block md:hidden">
                <AboutBookMobile books={books} />
            </div>

            <div className="w-full h-[1px] bg-[#F0F0F0] my-6"></div>
        </div>
    );
}

export default AboutBook;
