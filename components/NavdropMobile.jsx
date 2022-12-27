import React ,{useState,useEffect}from 'react'
// import Router from 'next/router'
import { useRouter } from 'next/router'
import Link from 'next/link'



const NavdropMobile = ({down,setDown}) => {

    const [rotate, setRotate] = useState(false)
let router  = useRouter()

    useEffect(() => {
        setDown(false)
    }, [router])
    
  return (
      <div className='absolute flex h-max justify-end  z-40 w-full over  overflow-scroll'>

   
          <div className={`px-10 w-[320px] grid grid-cols-1 bg-white items-center text-center  fixed ${down ? "translate-x-0" : "translate-x-[520px]"} z-20 transition tr tra  duration-300   border-black ml-auto  mr-0 mx-auto  border-l border-black`}>
          <div className=' '>

<div onClick={()=>{setDown(false);

}} className={` p-1  w-max ml-auto  cursor-pointer   my-3 hover:bg-gray-200 rounded-full text-lg transition-all duration-200`}>
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                          width="30" height="30"
                          viewBox="0 0 24 24">
                          <path d="M 5.7070312 4.2929688 L 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 L 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 L 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 L 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 z"></path>
                      </svg>
</div>
        </div>
         <ul className='w-full h-full '>
              <Link href='/'><li className='w-full border-black flex justify-between  mx-auto font-sans  bg-white text-[24px] font-[500]  py-1  items-center'>
                      Select Device 
                    <img src="/icons/rightarraw.svg" alt="" className='mt-2'/>

              </li></Link>
              <Link href='/'><li className='w-full border-black flex justify-between  mx-auto font-sans  bg-white text-[24px] font-[500]  py-1  items-center'>
                     Collections
                    <img src="/icons/rightarraw.svg" alt="" className='mt-2'/>

              </li></Link>
           
              <Link href='/'><li className='w-full border-black flex justify-between  mx-auto font-sans  bg-white text-[24px] font-[500]  py-1 items-center'>
                     FAQs


              </li></Link>
              <Link href='/'><li className='w-full border-black flex justify-between  mx-auto font-sans  bg-white text-[24px] font-[500]  py-1 items-center'>
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

      </div>
  )
}

export default NavdropMobile