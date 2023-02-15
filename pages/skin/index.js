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
    // console.log(apple)
//     let mobile = products.filter((item) => {
//         return item.name.includes('s22')
//     })
// console.log(mobile)
    let mobileBrand = [apple, samsung]

    return (
        <div className='level3:mb-5 sm:mb-10 md:mb-20'>
            <div className='text-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold    level4:py-2 m-3 level3:mt-5 sm:mt-12 md:mt-16  lg:mt-20 level3:mx-5 sm:mx-12 md:mx-16  lg:mx-20 mb-3 sm:mb-6 md:mb-8 '>
                <p className='py-1'>Skins</p>
            </div>
            <div className="grid level6:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-6 md:gap-8 pb-4 relative mx-3 level3:mx-5 sm:mx-12 md:mx-16 lg:mx-20 mb-3 sm:mb-6 md:mb-8 lg:mb-10 ">
                <Link legacyBehavior href='/skin/apple'><a> <div className=" grid grid-cols-1 place-items-center bg-gray-100  rounded-md pt-1 hover:shadow-2xl transition-all ease-in-out relative  ">
                    <Image src="https://raw.githubusercontent.com/theonlyjunaid/wrap/main/public/mobile/skin/apple/14series/14promax/plain.webp" alt="" className=' -top-0 hover:scale-[103%] transition-all ease-in-out duration-300' width={140} height={200} />
                    <div className={` bg-slate-100 bg-opacity-50 w-[100%] bottom-0 grid grid-cols-1 place-items-center py-4 text-xl transition-all ease-in-out duration-300 `}>
                        <div className='text-mono font-semibold'>Apple</div>
                    </div>
                </div></a></Link>
                <Link legacyBehavior href='/skin/samsung'><a>  <div className="grid grid-cols-1 place-items-center bg-gray-100  rounded-md pt-1 hover:shadow-2xl transition-all ease-in-out relative  ">
                    <Image src='https://raw.githubusercontent.com/theonlyjunaid/wrap/main/public/mobile/skin/samsung/note22series/note22ultra/plain.webp' className=' -top-0 hover:scale-[103%] transition-all ease-in-out duration-300' alt="" width={140} height={200} />
                    <div className={` bg-slate-100 bg-opacity-50 w-[100%] bottom-0 grid grid-cols-1 place-items-center py-4 text-xl transition-all ease-in-out duration-300 `}>
                        <div className='text-mono font-semibold'>Samsung</div>
                    </div>
                </div> </a></Link>
                <Link legacyBehavior href='/skin/nothing'><a>  <div className="grid grid-cols-1 place-items-center bg-gray-100  rounded-md pt-1 hover:shadow-2xl transition-all ease-in-out relative  ">
                    <Image src='https://mzart.sgp1.cdn.digitaloceanspaces.com/mobiles/Untitled design (35).png' className=' -top-0 hover:scale-[103%] transition-all ease-in-out duration-300 bg-gray-100 w-[220px] h-[200px]' alt="" width={140} height={200} />
                    <div className={` bg-slate-100 bg-opacity-50 w-[100%] bottom-0 grid grid-cols-1 place-items-center py-4 text-xl transition-all ease-in-out duration-300 `}>
                        <div className='text-mono font-semibold'>Nothing</div>
                    </div>
                </div> </a></Link>
            </div>
            <div className=' level3:mt-5 md:mt-10' >
                {
mobileBrand.map((item, index) => {
                        return (
                            <div>
                                <div className='text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold    level4:py-2 m-3 level3:mx-5 sm:mx-12 md:mx-16  lg:mx-20 mb-2 sm:mb-4 md:mb-5  '>
                                    <p className='overflow-y-hidden'>{item[0]?.brand.split("")[0].toUpperCase() + 
item[0]?.brand.split("").slice(1).join("")
                                    }</p>
                                </div>
                                <div className='grid level6:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-6 md:gap-8 pb-4 relative mx-3 level3:mx-5 sm:mx-12 md:mx-16 lg:mx-20 mb-3 sm:mb-6 md:mb-8 lg:mb-10'>
                                {
                                    item.map((item, index) => {
                                        return (
                                            <Link legacyBehavior href={`/skin/${item.brand}/${item.name}`}><a>  <div className="grid grid-cols-1 place-items-center bg-gray-100  rounded-md pt-1 hover:shadow-2xl transition-all ease-in-out relative ">
                                                <Image src={item.img} className=' -top-0 hover:scale-[103%] transition-all ease-in-out duration-300' alt="" width={140} height={200} />
                                                <div className={` bg-slate-100 bg-opacity-50 w-[100%] bottom-0 grid grid-cols-1 place-items-center py-2  level3:text-xl transition-all ease-in-out duration-300 `}>
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

