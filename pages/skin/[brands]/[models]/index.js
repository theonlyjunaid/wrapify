import React, { useState } from 'react'
import Product from '../../../../model/Product';
import Link from 'next/link'
import mongoose from 'mongoose';
import Image from 'next/image';

function Index({ products }) {
    const [show, setShow] = useState('hidden')
    return (
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  py-8 min-h-max'>
                {products.map((product, index) => {
                      const destination = '/skin/' + product.brand + '/' + product.name.split(" ").join("-") + '/' + product.color;
                    return (
                            <Link href={destination} key={index}><a><div className='grid grid-cols-1 place-items-center  border-2 border-l-0 hover:shadow-2xl transition-all ease-in-out relative '
                                onMouseEnter={() => setShow(product.slug)}
                                onMouseLeave={() => setShow('')}
                            ><Image src={product.img} alt="" className=' my-2' width={280} height={400} />
                                <div className={`sm:absolute bg-slate-100 bg-opacity-50 w-[100%] bottom-0 flex justify-center py-6 md:${show === product.slug ? '' : 'hidden'} `}>
                                    <div>{product.color}</div>
                                </div>
                            </div></a></Link>
                    )
                })}
            </div>
    )
}
export default Index

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI);
    }
    let model = context.query.models.split('-').join(' ')
    let brand = context.query.brands
    let products = await Product.find({ name: model, brand: brand,color:{$ne:'plain'} }).lean();
    return {
        props: { products: JSON.parse(JSON.stringify(products)) },
    }
}