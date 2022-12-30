import React,{useState} from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlineSearch, AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineMenu } from 'react-icons/ai'
import { FaRegUserCircle, FaUserCircle } from 'react-icons/fa'
import {mobile2} from '../../data/mobile'
const NavDevice = () => {
const [drop, setDrop] = useState('hidden translate-x-full')
const [slide, setSlide] = useState('mainMenu')
const [brand, setBrand] = useState('apple')


  return (
    <div className='w-full md:hidden' >
      <div className='flex items-center justify-between w-full'>
        <Link href='/'><div
          className='text-2xl font-semibold '>
          MZ Art
        </div></Link>
        <div className='flex text-2xl gap-5'>
          <Link href="/cart"><AiOutlineShoppingCart className='cursor-pointer ' /></Link>
          <AiOutlineSearch className='cursor-pointer  ' id="searchIcon" />
          <AiOutlineMenu className='cursor-pointer' onClick={()=>setDrop('')}/>
        </div>
        <div className={`w-[280px] min-h-screen right-0 bg-white absolute top-0 z-40 overflow-y-scroll   ${drop}  transform duration-300 border-black border `}
        // onMouseLeave={()=>setDrop('translate-x-full')}
        >
          <div className='flex justify-end pb-2 p-5'>

          <div className='flex items-center text-white cursor-pointer hover:bg-gray-200 w-max p-[0.5px] rounded-full duration-300 '
          onClick={()=>setDrop('translate-x-full')}
          >
          <img src="/icons/cross.svg" alt="" />
            </div>
          </div>
          <div className={`px-5 ${slide === 'mainMenu' ? 'translate-x-0' : 'absolute -translate-x-full'} duration-300`}>
            <ul className='w-full h-full '>

              <li className='cursor-pointer w-full border-black flex justify-between  mx-auto font-sans  bg-white text-[24px] font-[500]  py-1  items-center' onClick={()=>{setSlide('selectDevice')}}>
                Select Device
                <img src="/icons/rightarraw.svg" alt="" className='mt-2' />
              </li>

              <li className='cursor-pointer w-full border-black flex justify-between  mx-auto font-sans  bg-white text-[24px] font-[500]  py-1  items-center'>
                Collections
                <img src="/icons/rightarraw.svg" alt="" className='mt-2' />

              </li>

              <Link href='/faqs'><li className='cursor-pointer w-full border-black flex justify-between  mx-auto font-sans  bg-white text-[24px] font-[500]  py-1 items-center'>
                FAQs

              </li></Link>
              <Link href='/devicenotfound'><li className='cursor-pointer w-full border-black flex justify-between  mx-auto font-sans  bg-white text-[24px] font-[500]  py-1 items-center'>
                Device not Found ?


              </li></Link>


            </ul>
            <div>
              <div className='flex justify-center items-center px-1 text-gray-400 my-10 mt-16'>
                Become a MZ Art Member for the best products, inspiration and stories in Design.
              </div>
            </div>

            <div className='flex  gap-5 mb-5 justify-center'>
              <Link href='/signup'><div className='px-[20px] cursor-pointer py-[6px] bg-black text-white text-[16px] rounded-[30px] hover:bg-gray-600 border border-black'>
                Join Us
              </div></Link>
              <Link href='/login'><div className='px-[20px] cursor-pointer py-[6px] bg-white  text-[16px] rounded-[30px] hover:bg-gray-600 border border-black'>
                Sign in
              </div></Link>
            </div>
            <ul className='w-full mb-20 over overflow-y-scroll'>
              <Link href='/cart'><li className='border-black  flex justify-start   font-sans  bg-white text-[18px] font-[500]  py-2'>
                Bag
              </li></Link>
              <Link href='/orders'><li className='border-black  flex justify-start   font-sans  bg-white text-[18px] font-[500]  py-2'>
                orders
              </li></Link>
              <Link href='/'><li className='border-black  flex justify-start   font-sans  bg-white text-[18px] font-[500]  py-2'>
                track order
              </li></Link>
              <Link href='/'><li className='border-black  flex justify-start   font-sans  bg-white text-[18px] font-[500]  py-2'>
                FAQs
              </li></Link>
              <Link href='/'><li className='border-black  flex justify-start   font-sans  bg-white text-[18px] font-[500]  py-2'>
                Help?
              </li></Link>

            </ul>
           </div>
 <div className={`${slide==='selectDevice'?'translate-x-0':'absolute  -translate-x-full'} transform duration-300`}
  
  >
    <div onClick={()=>setSlide('mainMenu')}>
              <img src="/icons/rightarraw.svg" alt="" className='mt-2 rotate-180 mx-5 mb-2' />

    </div>
  <div className='px-5'>
                <ul className='w-full '>

                  <li className='cursor-pointer w-full border-black flex justify-between  mx-auto font-sans  bg-white text-[20px] font-[500]  py-1  items-center' onClick={() => { setSlide('selectModel') ;setBrand('apple')}}>
                      Apple
                    <img src="/icons/rightarraw.svg" alt="" className='mt-2' />
                  </li>
                <li className='cursor-pointer w-full border-black flex justify-between  mx-auto font-sans  bg-white text-[20px] font-[500]  py-1  items-center' onClick={() => { setSlide('selectModel');setBrand('samsung') }}>
                      Samsung
                    <img src="/icons/rightarraw.svg" alt="" className='mt-2' />
                  </li>




                </ul>
  </div>
  </div>
          <div className={`${slide === 'selectModel' ? 'translate-x-0' : 'translate-x-full'} transform duration-300`}

          >
            <div onClick={() => setSlide('selectDevice')}>
              <img src="/icons/rightarraw.svg" alt="" className='mt-2 rotate-180 mx-5 mb-2' />

            </div>
            <div className='px-5'>
              <ul className='w-full '>

                {Object.keys(mobile2[brand].models).map((model) => (
                  <Link href={`/skin/${brand}/${model}`}><li className='cursor-pointer w-full border-black flex justify-between  mx-auto font-sans  bg-white text-[20px] font-[500]  py-1  items-center' onClick={() => { setSlide('selectModel') }}>
                    {model}
                  </li></Link>
                ))

                }
              




              </ul>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default NavDevice