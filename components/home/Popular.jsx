import mobile from '../../mobile.json'
import Link from "next/link"


export default function Popular() {
    return (
        <div className='mb-20'>
            <div className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold p-4 sm:p-10'>
                <p>Popular</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 w-screen items-center">
                <Link href='/skin/apple'><a> <div className=" grid grid-cols-1 place-items-center  border-2 border-l-0 hover:shadow-2xl transition-all ease-in-out relative ">
                    <img src="https://raw.githubusercontent.com/theonlyjunaid/wrap/main/public/mobile/skin/apple/14series/14promax/plain.webp" alt="" className="w-[280px]" />
                </div></a></Link>
                <Link href='/skin/samsung'><a>  <div className="grid grid-cols-1 place-items-center  border-2 border-l-0 hover:shadow-2xl transition-all ease-in-out relative ">
                    <img src='https://raw.githubusercontent.com/theonlyjunaid/wrap/main/public/mobile/skin/samsung/note22series/note22ultra/plain.webp' alt="" className="w-[280px]" />
                </div> </a></Link>
            </div>
           <Link  href="/skin"><a><div className='bg-gray-200 rounded-3xl m-3 hover:bg-gray-50 px-6 absolute right-5 cursor-pointer text-xl p-3 hover:text-gray-500'>See More ...</div></a></Link> 
        </div >
    )
}
