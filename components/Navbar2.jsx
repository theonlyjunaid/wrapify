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
console.log(searchItems)
useEffect(() => {
  console.log(searchItem)

}, [searchItems])

const List = (e)=>{
console.log(e.target.value)
// let filldata = e.target.value
// console.log(searchItem.search(filldata))
  let input, filter, ul, li, a, i, txtValue;
  input = e.target.value;
  filter = input.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }

}



  return (
    <div className='w-full '>
      <nav className='flex justify-between w-full  align-middle items-center px-5 pl-7 h-[64px] bg-white shadow-xl border border-b-2 border-black'>
        <div className='w-[30%]'>
          <Link legacyBehavior href="/"><a><h1 className='text-xl cursor-pointer font-mono'>MZ Art</h1></a></Link>
        </div>


        <div className='flex items-center text-2xl gap-6 lg:hidden'>
          <Link legacyBehavior href="/cart"><a><AiOutlineShoppingCart className='cursor-pointer' /></a></Link>
          <AiOutlineSearch className='cursor-pointer' />
          <AiOutlineMenu className='cursor-pointer' onClick={toggleDropdown} />
        </div>
        <div className='hidden lg:flex w-[40%] justify-center items-center text-2xl gap-10 font-mono'>
          <Link legacyBehavior href="/"><a><h1 className='text-xl cursor-pointer'>Home</h1></a></Link>
          <Link legacyBehavior href="/skin"><a><h1 className='text-xl cursor-pointer'>Skin</h1></a></Link>
          <Link legacyBehavior href="/about"><a><h1 className='text-xl cursor-pointer'>About</h1></a></Link>

        </div>
        <div className='hidden w-[30%] lg:flex items-center ml-auto justify-end relative gap-4 text-2xl'>
<div className='  '>
            <div className='flex items-center'>


          <AiOutlineSearch className='cursor-pointer absolute ml-3 text-2xl ' />
            <input type="text" className={`border flex items-center rounded-[100px] py-2 px-[48px] ${search ? 'w-[300px]' : 'w-[180px]'} cursor-text h-10 bg-[#f5f5f5] text-lg text-gray-600`} placeholder='Search' onClick={() => { setSearch(true); searchProduct() }} onChange={(e)=>List(e)} />
            </div>


</div>

          {!user.value && <FaRegUserCircle onClick={() => { setDropdown('') }} onMouseEnter={() => { setDropdown('') }} onMouseLeave={() => { setDropdown('hidden') }} />}

          {user.value && <FaUserCircle onClick={() => { setDropdown('') }} onMouseEnter={() => { setDropdown('') }} onMouseLeave={() => { setDropdown('hidden') }} />}
          <Link legacyBehavior href="/cart"><a><AiOutlineShoppingCart className='cursor-pointer' /></a></Link>

        </div>

      </nav>
{search && 
      <ul className='absolute z-50 w-[270px] right-20 mr-8 top-14 border' id='myUL'>
        {
          searchItem.map((item, index) => {
            console.log(item)
            return (
              <li key={index} className='bg-white  z-50 border-t'>
               
                <Link legacyBehavior href={`/skin/${searchItems[item].brand}/${item}`}><a>{item}</a></Link>
              </li>
            )
          }
          )
        }
      </ul>}

      {!user.value && <div className={`right-14 absolute bg-white shadow-xl border rounded-md top-10  z-20 ${dropdown}`} onMouseEnter={() => { setDropdown('') }} onMouseLeave={() => { setDropdown('hidden') }}>
        <Link legacyBehavior href="/login"><a><div className='px-5 py-1 border-b border-gray-200 cursor-pointer hover:bg-gray-300 transition-all duration-200'>
          Login
        </div></a></Link>
        <Link legacyBehavior href="/signup"><a><div className='px-5 py-1 cursor-pointer hover:bg-gray-300 transition-all duration-200'>
          Sign Up
        </div></a></Link>
      </div>}
      {user.value && <div className={`right-14 absolute bg-slate-100 border rounded-md top-10  z-20 ${dropdown}`} onMouseEnter={() => { setDropdown('') }} onMouseLeave={() => { setDropdown('hidden') }}>
        <Link legacyBehavior href="/myaccount"><a><div className='px-5 py-1 border-b border-gray-200 cursor-pointer hover:bg-gray-300 transition-all duration-200'>
          my account
        </div></a></Link>
        <Link legacyBehavior href="/orders"><a><div className='px-5 py-1 cursor-pointer hover:bg-gray-300 transition-all duration-200'>
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

