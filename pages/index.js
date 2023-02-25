import Head from "next/head"
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import FeaturedPosts from "../components/home/FeaturedPosts.jsx"
import Popular from "../components/home/Popular.jsx"
import Link from 'next/link'
import mongoose from 'mongoose'
import Product from '../model/Product'
const Home = ({ products }) => {
  const [isLoading, setLoading] = useState(true)

  const [show, setShow] = useState('hidden')
  const router = useRouter();
if (typeof window !== "undefined") {
    window.onscroll = function () {
// console.log(window.scrollY)
        if (window.scrollY/window.innerHeight !== 0) {
          console.log(Math.floor(window.scrollY / window.innerHeight))

        }
    };
  }

  return (
    <div>
      <Head>
        <title>mzart</title>
        <meta name="description" content="change the way you see your mobile, Apply mzart skin to give a new look to your loved mobile" />
        <link rel="icon" href="https://mzart.sgp1.cdn.digitaloceanspaces.com/icons/Screenshot 2023-01-02 at 8.22.38 AM.png" /> 
      </Head>
      <FeaturedPosts />
  
      <div className='mb-10'> 
        <div className='m-3 level3:mx-5 sm:m-12 text-center level3:text-start  mb-3 '>


          <div className='text-black   md:mx-10 overflow-y-hidden text-2xl sm:text-3xl md:text-5xl' >
            {/* {products[0]?.name} Skins Designs */}
            Select by Design
          </div>
          {/* <div className=' level3:flex items-center gap-1 md:gap-4 mt-3 level3:text-sm  sm:text-xl md:text-2xl lg:text-3xl font-light'>
                    <div className=' text-gray-700  md:w-contain'> Select your Design or
                    </div>  <button className='bg-yellow-400 md:bg-[#EDEFF2] w-full justify-center level3:w-fit  md:w-fit items-center gap-2 level3:gap-0 md:gap-2 flex  hover:bg-yellow-400  transition ease-in-out duration-300 fo  antialiased md:px-[42px] px-2 level3:px-5  py-2 md:py-[12px] rounded-[51px] mt-1 mb-4 level3:mb-0 level3:mt-0'> <div> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        // width="25" height="25"
                        className='h-[13px] w-[13px] md:h-[25px] md:w-[25px]'
                        viewBox="0 0 50 50">
                        <path d="M 36.875 4.0625 C 36.546875 4.0625 36.25 4.199219 36.0625 4.46875 L 23.90625 22 C 23.828125 22.113281 23.777344 22.269531 23.75 22.40625 C 23.492188 23.773438 23.984375 25.269531 25.1875 26.71875 C 27.152344 29.085938 30.675781 30.9375 33.1875 30.9375 C 33.472656 30.9375 33.746094 30.890625 34 30.84375 C 34.300781 30.789063 34.542969 30.613281 34.6875 30.34375 L 47.84375 5.53125 C 48.007813 5.222656 47.992188 4.832031 47.8125 4.53125 C 47.632813 4.230469 47.289063 4.0625 46.9375 4.0625 Z M 21.71875 23.71875 C 15 25.257813 13.367188 30.679688 11.78125 35.9375 C 10.214844 41.128906 8.734375 46.03125 2.6875 48.0625 C 2.222656 48.21875 1.921875 48.671875 2 49.15625 C 2.078125 49.640625 2.511719 50 3 50 C 22.550781 50 32.464844 47.335938 33.59375 32.875 C 33.449219 32.882813 33.335938 32.9375 33.1875 32.9375 C 30.097656 32.9375 25.992188 30.816406 23.65625 28 C 22.335938 26.410156 21.835938 24.929688 21.71875 23.71875 Z"></path>
                    </svg></div> <Link legacyBehavior href={`/skin/${brands}/${models}/customize`}><a ><div className=''>Start the Customizer</div></a></Link>  </button>
                </div> */}
        </div>
        {/* <div className='grid level6:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 pb-4 relative mx-3 level3:mx-5 sm:mx-12 md:mx-16 lg:mx-20 mb-3  '>
          {products.slice(2, 6).map((product, index) => {
            const destination = '/collection/color?' + 'subCategory=' + product.subCategory + '&color=' + product.color
            return (
              <Link legacyBehavior href={destination} key={index}><a className='h-max'><div className='grid grid-cols-1 place-items-center bg-gray-100  rounded-md py-3  relative '
                onMouseEnter={() => setShow(product?.slug)}
                onMouseLeave={() => setShow('')}
              >{<Image src={product?.img} alt="" className={` my-2  hover:scale-[103%] transition-all  duration-700 ease-in-out group-hover:opacity-75 bg-gray-100
              ${isLoading
                  ? 'scale-110 blur-[2px] grayscale'
                  : 'scale-100 blur-0 grayscale-0'}`} width={280} height={400} onLoadingComplete={() => {
                    setLoading(false);
                    console.log(product.color)
                  }}
                placeholder='blur'
                blurDataURL='/Loading_icon.gif' />}

              </div>
                <div className={`text-sm md:text-base  w-[100%] bottom-0   font-mono font-light py-1 sm:py-2 md:py-3 md:${show === product?.slug ? '' : 'hiden'} `}>
                  <div>{product?.color.toUpperCase()}</div>
       
                </div>

              </a>

              </Link>
            )
          }).reverse()}
        </div> */}
        <ul id='myUL' className="grid level6:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 pb-4  relative mx-3 level3:mx-5 sm:mx-12 md:mx-16 lg:mx-20 mb-3 sm:mb-6 md:mb-8 lg:mb-10">

          {products.slice(2, 6).map((product, index) => {
            const destination = '/collection/color?' + 'subCategory=' + product.subCategory + '&color=' + product.color
            return (
              // <Link legacyBehavior href={destination} key={index}><a className='h-max'><div className='grid grid-cols-1 place-items-center bg-gray-100  rounded-md py-3  relative '
              //   onMouseEnter={() => setShow(product?.slug)}
              //   onMouseLeave={() => setShow('')}
              // >{<Image src={product?.img} alt="" className={` my-2  hover:scale-[103%] transition-all  duration-700 ease-in-out group-hover:opacity-75 bg-gray-100
              // ${isLoading
              //     ? 'scale-110 blur-[2px] grayscale'
              //     : 'scale-100 blur-0 grayscale-0'}`} width={280} height={400} onLoadingComplete={() => {
              //       setLoading(false);
              //       console.log(product.color)
              //     }}
              //   placeholder='blur'
              //   blurDataURL='/Loading_icon.gif' />}

              // </div>
              //   <div className={`text-sm md:text-base  w-[100%] bottom-0   font-mono font-light py-1 sm:py-2 md:py-3 md:${show === product?.slug ? '' : 'hiden'} `}>
              //     <div>{product?.color.toUpperCase()}</div>
              //     {/* <div className=''>
              //                       <span className='md:text-lg font-semibold'>   ₹{
              //                           product?.price

              //                       }
              //                       </span >
              //                       <span className='text-sm md:text-base mx-2  line-through'>
              //                           ₹499
              //                       </span>
              //                   </div> */}
              //   </div>

              // </a>

              // </Link>
              <li className='p-2 ' key={index}>
                <Link legacyBehavior href={destination}  ><a className="block   shad link-dark py-6 px-2 text-center text-gray-900 relative overflow-hidden text-decoration-none ">
                  <div className='p-2'>
                    {<Image src={product?.img} alt="" className={` my-2  hover:scale-[103%] transition-all  duration-700 ease-in-out group-hover:opacity-75 
              ${isLoading
                        ? 'scale-110 blur-[2px] grayscale'
                        : 'scale-100 blur-0 grayscale-0'}`} width={280} height={400} onLoadingComplete={() => {
                          setLoading(false);
                          console.log(product.color)
                        }}
                      placeholder='blur'
                      blurDataURL='/Loading_icon.gif' />}
                  </div>
                  <div className='text-mono font-semibold'>
                    {product?.color.toUpperCase()}
                  </div>
                </a></Link>
              </li>
            )
          }).reverse()}
        
          {/* <li  className='p-5'>
                    <Link legacyBehavior href="/skin/samsung"  ><a className="block w-[110px] h-[110px] shad link-dark py-6 px-2 text-center text-gray-900 relative overflow-hidden text-decoration-none ">
                                    <div>
                            <Image src='/icons/samsung.svg' width={50} height={50} className='mx-auto   sc' />
                                    </div>
Samsung
                                </a></Link>
                            </li>
                            <li  className='p-5'>
                    <Link legacyBehavior href="/skin/samsung"  ><a className="block w-[110px] h-[110px] shad link-dark py-6 px-2 text-center text-gray-900 relative overflow-hidden text-decoration-none ">
                                    <div>
                            <Image src='/icons/oneplus.svg' width={50} height={50} className='mx-auto scale-50' />
                                    </div>
Oneplus
                                </a></Link>
                            </li> */}


        </ul>
        <Link legacyBehavior href="/collection"><a><div className='bg-gray-200 rounded-3xl m-1 md:m-3 mb-6 hover:bg-gray-50 px-3 md:px-6 absolute right-5 cursor-pointer text-lg md:text-xl p-1 md:p-3 hover:text-gray-500'>See More ...</div></a></Link> 
      </div>
      <Popular />
    </div>
  )
}

export default Home

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI);

  }

  let products = await Product.find({ brand: 'apple', name: 'iphone 14', color: { $ne: 'plain' } }).lean();

  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  }
}
