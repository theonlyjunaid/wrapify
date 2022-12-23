import mobile from '../../mobile.json'
import Link from "next/link"
import Image from 'next/image'


export default function Popular() {
    return (
        <div className='mb-20'>
            <div className='text-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold    level4:py-2 m-3 level3:mt-5 sm:mt-12 md:mt-16  lg:mt-20 level3:mx-5 sm:mx-12 md:mx-16  lg:mx-20 mb-3 sm:mb-6 md:mb-8 '>
                <p className='overflow-y-hidden'>Popular</p>
            </div>
            <div className='grid level6:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 pb-4  relative mx-3 level3:mx-5 sm:mx-12 md:mx-16 lg:mx-20 mb-3 sm:mb-6 md:mb-8 lg:mb-10 '>

                <Link href='/skin/apple'> <div className=" grid grid-cols-1 place-items-center bg-gray-100  rounded-md pt-1 hover:shadow-2xl transition-all ease-in-out relative  ">
                    <Image src="https://raw.githubusercontent.com/theonlyjunaid/wrap/main/public/mobile/skin/apple/14series/14promax/plain.webp" alt="" className=' -top-0 hover:scale-[103%] transition-all ease-in-out duration-300' width={280} height={400} />
                    <div className={` bg-slate-100 bg-opacity-50 w-[100%] bottom-0 grid grid-cols-1 place-items-center py-4 text-xl transition-all ease-in-out duration-300 `}>
                        <div className='text-mono font-semibold'>Apple</div>
                    </div>
                </div></Link>
                <Link href='/skin/samsung'>  <div className="grid grid-cols-1 place-items-center bg-gray-100  rounded-md pt-1 hover:shadow-2xl transition-all ease-in-out relative  ">
                    <Image src='https://raw.githubusercontent.com/theonlyjunaid/wrap/main/public/mobile/skin/samsung/note22series/note22ultra/plain.webp' className=' -top-0 hover:scale-[103%] transition-all ease-in-out duration-300' alt="" width={280} height={400} />
                    <div className={` bg-slate-100 bg-opacity-50 w-[100%] bottom-0 grid grid-cols-1 place-items-center py-4 text-xl transition-all ease-in-out duration-300 `}>
                        <div className='text-mono font-semibold'>Samsung</div>
                    </div>
                </div> </Link>
            </div>
           <Link  href="/skin"><div className='bg-gray-200 rounded-3xl m-3 hover:bg-gray-50 px-6 absolute right-5 cursor-pointer text-xl p-3 hover:text-gray-500'>See More ...</div></Link> 
        </div >
    )
}
