import React, { useState, useEffect } from 'react'
// import Navbar from '../../components/Navbar'
// import { mobile } from '../../data/mobilee'
// import mobile from '../api/data/mobile'
import Product from '../../../model/Product';
import Link from 'next/link'
import mongoose from 'mongoose';
import { useRouter } from 'next/router'

function Index({ products, brand }) {
    const [show, setShow] = useState('hidden')

    // const router = useRouter();
    // const [rola, setRola] = useState('')
    // useEffect(() => {
    //     if (!router.isReady) return;
    //     setRola(router.query.brands)
    // }, [router.isReady]);
    // console.log(router.query.brands)
    // console.log(products);

    return (
        <div className='pb-20'>
            <div className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold p-4 sm:p-10'>{brand?.split("")[0]?.toUpperCase() + brand?.split("").splice(1).join("")} Models</div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4   '>
                {
                    products.map((product, index) => {
                        const destination = '/skin/' + product.brand + '/' + product.name.split(" ").join("-")

                        return (
                            <Link href={destination} key={index}><a><div className='grid grid-cols-1 place-items-center  border-2 border-l-0 hover:shadow-2xl transition-all ease-in-out relative '
                                onMouseEnter={() => setShow(product.slug)}
                                onMouseLeave={() => setShow('')}
                            >
                                <img src={product.img} alt="" className='w-[260px] relative -top-0' />
                                <div className={`sm:absolute bg-slate-100 bg-opacity-50 w-[100%] bottom-0 grid grid-cols-1 place-items-center py-4 text-xl ${show === product.slug ? '' : 'hidden'}`}>
                                    <div className='text-mono'>{product.brand}</div>
                                    <div>{product.name}</div>
                                </div>
                            </div></a></Link>
                        )
                    })
                }
            </div>
            {/* <Navbar /> */}
            {/* <div className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold p-4 sm:p-10'>{mobile[rola]?.name} Models</div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4   '>
                {
                    rola && Object.keys(mobile[rola]?.model).map((item, index) => {
                        return (
                            <Link href={`${'/skin'}/${rola}/${item?.toLocaleLowerCase().split(" ").join("-")}`} key={index}><a >
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
