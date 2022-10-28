import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 768, min: 640 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
};


const FeaturedPosts = () => {
    const [windowsize, setWindowsize] = useState('');
    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         if (window.innerWidth < 768) {
    //             setWindowsize('mobile');
    //         }
    //         else {
    //             setWindowsize('desktop');
    //         }
    //     }
    //     conslone
    // }
    //     , [windowsize.innerWidth])

    const customLeftArrow = (
        <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6  text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
        </div>
    );

    const customRightArrow = (
        <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6  text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </div>
    );

    return (
        <div className=" mb-8  text-center  w-full">
            <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive} itemclassName="px-4">

                <div className="bg-[url('/sale/11.webp')] md:bg-[url('/sale/1.webp')] h-[360px] md:h-[720px] bg-cover">
                    <div className="text-xl md:text-6xl text-left hidden md:block md:absolute right-[15%]  items-center align-middle top-[40%] ">
                        <h2>Now Its Your Turn </h2>
                        <h2>To <button className='bg-[#bcffbc] px-3 py-1 rounded-xl' onClick={() => ''}> Convert</button></h2>
                    </div>
                </div>

                <div className="bg-[url('/sale/12.webp')] md:bg-[url('/sale/2.webp')] h-[360px] md:h-[720px] bg-cover">
                    <div className='text-6xl text-left hidden md:block md:absolute left-[15%]  items-center align-middle top-[40%]'>

                        <h2>Now Its Your Turn </h2>
                        <h2>To <button className='bg-[#7d927d] px-3 py-1 rounded-xl' onClick={() => ''}> Convert</button></h2>
                    </div>
                </div>



            </Carousel>
        </div>
    );
};



export default FeaturedPosts;