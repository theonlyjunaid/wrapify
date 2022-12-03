import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlineSearch, AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineMenu } from 'react-icons/ai'
import { FaRegUserCircle, FaUserCircle } from 'react-icons/fa'
// import Product from '../../../model/Product';
// import Link from 'next/link'
// import mongoose from 'mongoose';
// import { useRouter } from 'next/router'
// import Image from 'next/image';

const Navbar2 = ({ user, logout }) => {
  const [dropdown, setDropdown] = useState('hidden')
  const [search, setSearch] = useState(false)
  const [searchItems, setSearchItems] = useState({})
  const [searchItem, setSearchItem] = useState([])
  const toggleDropdown = () => {
    if (dropdown === 'hidden') {
      setDropdown('block')
    } else {
      setDropdown('hidden')
    }
  }
  const searchProduct = () => {

fetch('/api/getproducts', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(data => {
  // console.log(data.Skins.filter("iphone 14"))
  // console.log(data.Skins?.find(item => item === "iphone 14"))
  // console.log(data.Skins)
  setSearchItems(data.Skins)
  setSearchItem(Object.keys(searchItems))
}
)
}
useEffect(() => {
  console.log(searchItem)
 
}, [searchItems])

const List = (e)=>{
// console.log(e.target.value)
let filldata = e.target.value
console.log(searchItem.filter(item=>item.include(filldata)))

}
  return (
    <div className='w-full'>
      <nav className='flex justify-between w-full  align-middle items-center px-5 pl-7 h-[64px] bg-white shadow-lg border border-b'>
        <div className='w-[30%]'>
          <Link href="/"><a><h1 className='text-xl cursor-pointer'>Wrap</h1></a></Link>
        </div>


        <div className='flex items-center text-2xl gap-6 lg:hidden'>
          <Link href="/cart"><a><AiOutlineShoppingCart className='cursor-pointer' /></a></Link>
          <AiOutlineSearch className='cursor-pointer' />
          <AiOutlineMenu className='cursor-pointer' onClick={toggleDropdown} />
        </div>
        <div className='hidden lg:flex w-[40%] justify-center items-center text-2xl gap-6 font-neue'>
          <Link href="/"><a><h1 className='text-xl cursor-pointer'>Home</h1></a></Link>
          <Link href="/skin"><a><h1 className='text-xl cursor-pointer'>Skin</h1></a></Link>
          <Link href="/about"><a><h1 className='text-xl cursor-pointer'>About</h1></a></Link>

        </div>
        <div className='hidden w-[30%] lg:flex items-center ml-auto justify-end relative gap-4 text-2xl'>
<div className='flex items-center '>

          <AiOutlineSearch className='cursor-pointer absolute ml-3 text-2xl ' />
            <input type="text" className={`border flex items-center rounded-[100px] py-2 px-[48px] ${search ? 'w-[300px]' : 'w-[180px]'} cursor-text h-10 bg-[#f5f5f5] text-lg text-gray-600`} placeholder='Search' onClick={() => { setSearch(true); searchProduct() }} onChange={(e)=>List(e)} />
</div>


          {!user.value && <FaRegUserCircle onClick={() => { setDropdown('') }} onMouseEnter={() => { setDropdown('') }} onMouseLeave={() => { setDropdown('hidden') }} />}

          {user.value && <FaUserCircle onClick={() => { setDropdown('') }} onMouseEnter={() => { setDropdown('') }} onMouseLeave={() => { setDropdown('hidden') }} />}
          <Link href="/cart"><a><AiOutlineShoppingCart className='cursor-pointer' /></a></Link>

        </div>

      </nav>
      {!user.value && <div className={`right-14 absolute bg-white shadow-xl border rounded-md top-10  z-20 ${dropdown}`} onMouseEnter={() => { setDropdown('') }} onMouseLeave={() => { setDropdown('hidden') }}>
        <Link href="/login"><a><div className='px-5 py-1 border-b border-gray-200 cursor-pointer hover:bg-gray-300 transition-all duration-200'>
          Login
        </div></a></Link>
        <Link href="/signup"><a><div className='px-5 py-1 cursor-pointer hover:bg-gray-300 transition-all duration-200'>
          Sign Up
        </div></a></Link>
      </div>}
      {user.value && <div className={`right-14 absolute bg-slate-100 border rounded-md top-10  z-20 ${dropdown}`} onMouseEnter={() => { setDropdown('') }} onMouseLeave={() => { setDropdown('hidden') }}>
        <Link href="/myaccount"><a><div className='px-5 py-1 border-b border-gray-200 cursor-pointer hover:bg-gray-300 transition-all duration-200'>
          my account
        </div></a></Link>
        <Link href="/orders"><a><div className='px-5 py-1 cursor-pointer hover:bg-gray-300 transition-all duration-200'>
My Orders
        </div></a></Link>
        <div className='px-5 py-1 cursor-pointer hover:bg-gray-300 transition-all duration-200' onClick={logout}>
Log out
        </div>
      </div>}
    </div>
  )
}

export default Navbar2

