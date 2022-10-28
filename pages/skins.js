import React, { useState, useEffect } from 'react'
import Product from '../model/Product';
import mongoose from 'mongoose';
import Link from 'next/link'




const Skins = ({ products }) => {
    // console.log(process.env.SECRET_KEY);
    // useEffect(() => {
    //     setFirst('Iphone 14')
    // }, [])
    // let data = []
    // const data = await fetch('http://localhost:3000/api/getproducts')
    // // data = await data.json()
    // console.log(data);
    // const getproducts = async () => {
    //     const data = await fetch('http://localhost:3000/api/getproducts')
    //     const data1 = await data.json()
    //     console.log(data1);
    // }
    // getproducts()

    console.log(products);
    return (
        // <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  text-gray-600 body-font py-10 px-2 ">
        //     {products.map((product) => (<Link href={"/products/" + product.slug} key={product._id} >
        //         <a ><div className=" p-2  grid grid-cols-1 place-items-center shadow-sm border hover:drop-shadow-2xl bg-white transition duration-150 ease-out hover:ease-in">
        //             <img
        //               alt="ecommerce baba"
        //                 className="m-auto  h-[35vh] block  relative  rounded overflow-hidden"
        //                 src="https://v2ecommerce.vercel.app/mobile/skin/Apple/14series/14promax/plain.png"
        //             />

        //             <div className="mt-4 text-center">
        //                 <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
        //                     {product.category}
        //                 </h3>
        //                 <h2 className="text-gray-900 title-font text-lg font-medium">
        //                     {product.name}
        //                 </h2>
        //             </div>
        //             <div>rs {product.price}</div>
        //         </div>
        //         </a>
        //     </Link>),)
        //     }
        // </div >
        <div>
            {products.map((product, index) => { return (<div key={index}>{product.name} {product.color}</div>) })}

        </div>
    )
}

export default Skins

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI);

    }

    let data = context.query.id.split('-').join(' ')

    // const products = await Product.find({}).lean();

    let products = await Product.find({ name: data });
    return {
        props: { products: JSON.parse(JSON.stringify(products)) },
    }
}
//get static props
// export async function getStaticProps(context) {
//     if (!mongoose.connections[0].readyState) {
//         await mongoose.connect(process.env.MONGODB_URI);

//     }
//     let products = await Product.find({ color: 'gray' });
//     return {
//         props: { products: JSON.parse(JSON.stringify(products)) },
//     }
// }
//get static paths
// export async function getStaticPaths() {
//     if (!mongoose.connections[0].readyState) {
//         await mongoose.connect(process.env.MONGODB_URI);

//     }
//     let products = await Product.find({ color: 'gray' });
//     return {
//         paths: products.map((product) => ({
//             params: { slug: product.slug },
//         })),
//         fallback: false,
//     }
// }
