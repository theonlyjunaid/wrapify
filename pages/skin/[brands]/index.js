import React, { useState, useEffect } from 'react'
// import Navbar from '../../components/Navbar'
// import { mobile } from '../../data/mobilee'
// import mobile from '../api/data/mobile'
import Product from '../../../model/Product';
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlineSearch, AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineMenu } from 'react-icons/ai'

import Link from 'next/link'
import mongoose from 'mongoose';
import { useRouter } from 'next/router'
import Image from 'next/image';

function Index({ products, brand }) {
    const [show, setShow] = useState('hidden')
console.log(products)
    // const router = useRouter();
    // const [rola, setRola] = useState('')
    // useEffect(() => {
    //     if (!router.isReady) return;
    //     setRola(router.query.brands)
    // }, [router.isReady]);
    // console.log(router.query.brands)
    // console.log(products);
    const List = (e) => {
        console.log(e.target.value)
        let input, filter, ul, li, a, i, txtValue;
        input = e.target.value;
        filter = input.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }

    }
    return (
        <div className='pb-20 bg-[#F8F8F8] w-full'>
            <div className='text-center md:text-start md:flex items-center w-full justify-between'>
                
            <div className='text-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold    level4:py-2 m-3 level3:mt-5 sm:mt-12 md:mt-16  lg:mt-20 level3:mx-5 sm:mx-12 md:mx-16  lg:mx-20 mb-3 sm:mb-6 md:mb-8 '>{brand?.split("")[0]?.toUpperCase() + brand?.split("").splice(1).join("")} Models</div>
                <div className='flex items-center   level4:py-2 m-3 level3:mt-5 sm:mt-12 md:mt-16  lg:mt-20 level3:mx-5 sm:mx-12 md:mx-16  lg:mx-20 mb-3 sm:mb-6 md:mb-8  ' >


                    <AiOutlineSearch className='cursor-pointer absolute ml-2 xl:ml-3 text-2xl ' id="searchIcon" />
                    <input type="text" className={`border  flex items-center rounded-[100px]  pl-[34px]  xl:px-[48px] w-full  sm:w-[240px] md:w-[350px] cursor-text h-12 bg-[#eeeeeec7] focus:bg-[#e4e3e3] text-base xl:text-lg text-gray-600`} placeholder='Search' onChange={(e) => List(e)} />

                </div>
            </div>

            {/* <div className='grid level6:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-3 sm:gap-6 md:gap-8 pb-4 relative mx-3 level3:mx-5 sm:mx-12 md:mx-16 lg:mx-20 mb-3 sm:mb-6 md:mb-8 lg:mb-10 '>

                {
                    products.map((product, index) => {
                        const destination = '/skin/' + product.brand + '/' + product.name.split(" ").join("-")

                        return (
                            <Link  href={destination} key={index}><div className='relative flex  justify-center'
                                onMouseEnter={() => setShow(product.slug)}
                                onMouseLeave={() => setShow('')}
                            >
                            { product.img?   <><Image src={product.img} alt="bsbu" className='  -top-0 hover:scale-[103%] transition-all ease-in-out duration-300' width={140} height={200} />
                                <div className={` bg-slate-100 bg-opacity-50 w-[100%] bottom-0 grid grid-cols-1 place-items-center py-2  level3:text-lg transition-all ease-in-out duration-300 `}>

                                    <div className='text-mono font-semibold'>{product.brand.split("")[0].toUpperCase() +
                                        product.brand.split("").slice(1).join("")}</div>
                                    <div>{product.name}</div>
                                    </div></> : <div className={`relative  bg-white px-6 pt-10 pb-8 m-5 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10`}>

                                    <div className='text-mono font-semibold'>{product.brand.split("")[0].toUpperCase() +
                                        product.brand.split("").slice(1).join("")}</div>
                                    <div>{product.name}</div>
                                </div>

                                }
                            </div></Link>
                        )
                    })
                }

            </div> */}
            {/* <Navbar /> */}
            {/* <div className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold p-4 sm:p-10'>{mobile[rola]?.name} Models</div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4   '>
                {
                    rola && Object.keys(mobile[rola]?.model).map((item, index) => {
                        return (
                            <Link legacyBehavior href={`${'/skin'}/${rola}/${item?.toLocaleLowerCase().split(" ").join("-")}`} key={index}><a >
                                <div className='grid grid-cols-1 place-items-center  border-2 border-l-0 hover:shadow-2xl transition-all ease-in-out relative '
                                    onMouseEnter={() => setShow(item)}
                                    onMouseLeave={() => setShow('')}
                                >
                                    <img src={mobile[rola]?.model[item]?.skin['plain']} alt="" className='w-[260px] relative -top-0' />
                                    <div className={`sm:absolute bg-slate-100 bg-opacity-50 w-[100%] bottom-0 grid grid-cols-1 place-items-center py-4 text-xl ${show === item ? '' : 'hidden'}`}>
                                        <div className='text-mono'>{mobile[rola]?.name}</div>
                                        <div>{mobile[rola]?.model[item]?.name}</div>
                                    </div>
                                </div>
                            </a>
                            </Link>
                        )
                    }
                    )
                }
            </div> */}
            {/* <div className='absolute z-40 top-[65px]   w-full bg-white h-max max-h-[40vh] pb-10 shadow-2xl  flex justify-center'>
                <ul id='myUL' className='text-base sm:text-lg md:text-xl w-4/5  sm:w-[380px] md:w-[520px] xl:w-[700px] px-5'>
                    {
                        products.map((item, index) => {
                            return (
                                <li key={index + item} className='bg-white my-1'>

                                    <Link legacyBehavior href={`/skin/${products[item].brand}/${item}`}><a>{item.toUpperCase()}</a></Link>
                                </li>
                            )
                        }
                        )
                    }
                </ul>
            </div> */}

            <ul id='myUL' className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg- px-10 sm:px-10 lg:px-20 xl:px-30 py-5 ">
                {/* <div class="block w-full shad link-dark py-6 ring-white text-center text-gray-900 bg-white relative overflow-hidden text-decoration-none">Google</div>
                <div class="block w-full shad link-dark py-6 text-center text-gray-900 bg-white relative overflow-hidden text-decoration-none">Google</div>
                <div class="block w-full shad link-dark py-6 text-center text-gray-900 bg-white relative overflow-hidden text-decoration-none">Google</div>
                <div class="block w-full shad link-dark py-6 text-center text-gray-900 bg-white relative overflow-hidden text-decoration-none">Google</div>
                <div class="block w-full shad link-dark py-6 text-center text-gray-900 bg-white relative overflow-hidden text-decoration-none">Google</div>
                <div class="block w-full shad link-dark py-6 text-center text-gray-900 bg-white relative overflow-hidden text-decoration-none">Google</div> */}
                {
                    products.map((product, index) => {
                        const destination = '/skin/' + product.brand + '/' + product.name.split(" ").join("-")
                        const arr = product.name.split(" ");
                        for (var i = 0; i < arr.length; i++) {
                            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

                        }
                        const str2 = arr.join(" ");
                        return (
                           <li key={index} className='p-5'>
                            <Link legacyBehavior href={destination} key={index} ><a className="block w-full shad link-dark py-6 px-2 text-center text-gray-900 relative overflow-hidden text-decoration-none ">{
                                str2
                            }</a></Link>
                            </li>

                        )})}
            </ul>

        </div>
    )
}


export default Index

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI);

    }
    // let model = context.query.models.split('-').join(' ')
    let brand = context.query.brands
    // let design = context.query.design.split('-').join(' ')
    let products = await Product.find({ brand: brand, color: 'plain' }).lean();
    

    return {
        props: { products: JSON.parse(JSON.stringify(products)), brand: brand },
    }
}


//getstaticprops
// export async function getStaticProps() {
//     const res = await fetch(`http://localhost:3000/api/mobile`)
//     const mobile = await res.json()
//     return {
//         props: {
//             mobile
//         }
//     }
// }
// //get static paths
// export async function getStaticPaths() {
//     const res = await fetch(`http://localhost:3000/api/mobile`)
//     const mobile = await res.json()
//     const paths = Object.keys(mobile).map((item) => {
//         return {
//             params: {
//                 brands: item
//             }
//         }
//     })
//     return {
//         paths,
//         fallback: false
//     }
// }


//get serverside props
// export async function getServerSideProps(context) {
//     const res = await fetch(`${process.env.BABLU_MERA_BHAI}`)
//     const mobile = await res.json()
//     return {
//         props: {
//             mobile
//         }
//     }

// }
