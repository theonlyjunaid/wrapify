import mobile from '../../mobile.json'
import Product from '../../model/Product';
import Link from 'next/link'
import mongoose from 'mongoose';
import Image from 'next/image'


export default function Popular({ products }) {
    let apple = products.filter((item) => {
        return item.brand === 'apple'
    })
    let samsung = products.filter((item) => {
        return item.brand === 'samsung'
    })
    console.log(apple)
    let mobileBrand = [apple, samsung]

    return (
        <div className='mb-20'>
            <div className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold m-20  mb-10 '>
                <p className='overflow-y-hidden'>Skins</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6  gap-5  mx-20">
                <Link href='/skin/apple'><a> <div className=" grid grid-cols-1 place-items-center bg-gray-100  rounded-md pt-1 hover:shadow-2xl transition-all ease-in-out relative  ">
                    <Image src="https://raw.githubusercontent.com/theonlyjunaid/wrap/main/public/mobile/skin/apple/14series/14promax/plain.webp" alt="" className='absolute -top-0 hover:scale-[103%] transition-all ease-in-out duration-300' width={140} height={200} />
                    <div className={` bg-slate-100 bg-opacity-50 w-[100%] bottom-0 grid grid-cols-1 place-items-center py-4 text-xl transition-all ease-in-out duration-300 `}>
                        <div className='text-mono font-semibold'>Apple</div>
                    </div>
                </div></a></Link>
                <Link href='/skin/samsung'><a>  <div className="grid grid-cols-1 place-items-center bg-gray-100  rounded-md pt-1 hover:shadow-2xl transition-all ease-in-out relative  ">
                    <Image src='https://raw.githubusercontent.com/theonlyjunaid/wrap/main/public/mobile/skin/samsung/note22series/note22ultra/plain.webp' className='absolute -top-0 hover:scale-[103%] transition-all ease-in-out duration-300' alt="" width={140} height={200} />
                    <div className={` bg-slate-100 bg-opacity-50 w-[100%] bottom-0 grid grid-cols-1 place-items-center py-4 text-xl transition-all ease-in-out duration-300 `}>
                        <div className='text-mono font-semibol'>Samsung</div>
                    </div>
                </div> </a></Link>
            </div>
            <div className='mt-10' >
                {
mobileBrand.map((item, index) => {
                        return (
                            <div>
                                <div className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mx-20 my-5 '>
                                    <p className='overflow-y-hidden'>{item[0].brand.split("")[0].toUpperCase() + 
item[0].brand.split("").slice(1).join("")
                                    }</p>
                                </div>
                            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6  gap-5  mx-20'>
                                {
                                    item.map((item, index) => {
                                        return (
                                            <Link href={`/skin/${item.brand}/${item.name}`}><a>  <div className="grid grid-cols-1 place-items-center bg-gray-100  rounded-md pt-1 hover:shadow-2xl transition-all ease-in-out relative ">
                                                <Image src={item.img} className='absolute -top-0 hover:scale-[103%] transition-all ease-in-out duration-300' alt="" width={140} height={200} />
                                                <div className={` bg-slate-100 bg-opacity-50 w-[100%] bottom-0 grid grid-cols-1 place-items-center py-2 text-xl transition-all ease-in-out duration-300 `}>
                                                    <div className='text-mono font-semibold'>{item.brand}</div>
                                                    <div className='text-mono'>{item.name}</div>
                                                </div>
                                            </div> </a></Link>
                                        )
                                    })

                }
                            </div>
                            
                            </div>)
                    })
                }



        </div >
        </div>
    )
}



export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI);

    }
   
    let products = await Product.find({  color: 'plain' }).lean();

    return {
        props: { products: JSON.parse(JSON.stringify(products)) },
    }
}

