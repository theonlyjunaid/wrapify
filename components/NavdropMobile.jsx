import React ,{useState}from 'react'
import Link from 'next/link'

const NavdropMobile = ({down,setDown}) => {
    const [rotate, setRotate] = useState(false)
  return (
      <div className={` w-screen grid grid-cols-1 bg-white items-center text-center  fixed ${down ? "translate-y-0" :"-translate-y-96"} z-20 transition  duration-500 border border-b-2 border-black `}>
          <div className='flex  items-end '>

<div onClick={()=>{setDown(false);

}} className={`py-1 w-max ml-auto  cursor-pointer px-3 m-1 my-4 mr-3 border shadow-2xl shadow-black transition-all duration-200`}>
    X
</div>
        </div>
         <ul className='w-full'>
              <Link href='/'><li className='border-black border-t-2 mx-auto bg-white text-xl py-2'>
                Home
              </li></Link>
              <Link href='/skin'><li className='border-black border-t-2 mx-auto bg-white text-xl py-2'>
                skin
              </li></Link>
              <Link href='/about'><li className='border-black border-t-2 mx-auto bg-white text-xl py-2'>
                about
              </li></Link>
         </ul> 

    </div>
  )
}

export default NavdropMobile