import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';



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
        <div className="absolute arrow-btn ml-5 bg-grayish-500 px-3 hover:bg-grayish-900 duration-300 hidden md:flex left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
        </div>
    );

    const customRightArrow = (
        <div className="absolute arrow-btn mr-5 bg-grayish-500 px-3 hover:bg-grayish-900 duration-300 right-0 hidden md:flex text-center py-3 cursor-pointer bg-pink-600 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </div>
    );

    return (
        <div className=" mb-8    w-full">
            <Carousel infinite  responsive={responsive} itemclassName="px-4" autoPlay={true} autoPlaySpeed={3000}
                keyBoardControl={true}
                 showDots={true}
            customLeftArrow={customLeftArrow}
            customRightArrow={customRightArrow}
swipeable={true}
            >

                <div className=" w-screen bg-cover">
                    <img src="/sale/1.webp" alt="" className='w-full hidden md:flex'/>
                    <img src="/sale/11.webp" alt="" className='w-full  md:hidden'/>


                    <div className="text-xl sm:text-2xl  md:text-3xl lg:text-4xl xl:text-6xl text-left hidden md:block md:absolute right-[12%] overflow-y-hidden  items-center align-middle top-[40%] ">
                        <h2 className='overflow-y-hidden'> Now Its Your Turn </h2>
                        <div className='overflow-y-hidden flex'>To <Link href='/collection/color?subCategory=plain%20color&color=gray'><div className='bg-[#bcffbc] px-3 text-md mx-2  overflow-y-hidden   rounded-xl' > Convert</div></Link></div>
                    </div>
                </div>

                <div className="w-screen bg-cover">
                    <img src="/sale/2.webp" alt=""  className='w-full hidden md:flex'/>
                    <img src="/sale/12.webp" alt=""  className='w-full  md:hidden'/>
                    <div className='text-xl sm:text-2xl  md:text-3xl lg:text-4xl xl:text-6xl text-left hidden md:block md:absolute left-[12%]  items-center align-middle top-[40%]'>

                        <h2 className='overflow-y-hidden'>Now Its Your Turn </h2>
                        <div className='overflow-y-hidden flex'>To  <Link href='/collection/color?subCategory=plain%20color&color=green'><div className='bg-[#7d927d] px-3 text-md mx-2 overflow-y-hidden  rounded-xl'> Convert</div></Link> </div>
                    </div>
                </div>



            </Carousel>
        </div>
    );
};



export default FeaturedPosts;



// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class SimpleSlider extends Component {
//     render() {
//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 1,
//             slidesToScroll: 1
//         };
//         return (
//             <div>
//                 <Slider {...settings}>
// <div className="bg-[url('/sale/11.webp')] md:bg-[url('/sale/1.webp')] h-[360px] md:h-[720px] bg-cover">
//                      <div className="text-xl md:text-6xl text-left hidden md:block md:absolute right-[15%] overflow-y-hidden  items-center align-middle top-[40%] ">
//               <h2 className='overflow-y-hidden'> Now Its Your Turn </h2>
//                          <h2 className='overflow-y-hidden'>To <button className='bg-[#bcffbc] px-3 py-1 rounded-xl' onClick={() => ''}> Convert</button></h2>
//                      </div>
//                  </div>

//                  <div className="bg-[url('/sale/12.webp')] md:bg-[url('/sale/2.webp')] h-[360px] md:h-[720px] bg-cover">
//                      <div className='text-6xl text-left hidden md:block md:absolute left-[15%]  items-center align-middle top-[40%]'>

//                          <h2 className='overflow-y-hidden'>Now Its Your Turn </h2>
//                          <h2 className='overflow-y-hidden'>To <button className='bg-[#7d927d] px-3 py-1 rounded-xl' onClick={() => ''}> Convert</button></h2>
//                      </div>
//                  </div>
//                 </Slider>
//             </div>
//         );
//     }
// }