import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import { mobile2 } from '../data/mobile'
import NavMObDevice from './Item/NavMObDevice'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlineSearch, AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineMenu } from 'react-icons/ai'
import { FaRegUserCircle, FaUserCircle } from 'react-icons/fa'

const Navbar3 = ({ user, logout }) => {

    const [device, setDevice] = useState('hidden')
    const [device2, setDevice2] = useState('hidden')
    const [device3, setDevice3] = useState('hidden')
    const [collection, setCollection] = useState('hidden')
    const [collection2, setCollection2] = useState('hidden')
    const [userdrop, setUserdrop] = useState('hidden')
    const [userdrop2, setUserdrop2] = useState('hidden')
    const [brand, setBrand] = useState('apple')
    const [search, setSearch] = useState('hidden')
  const [searchItem, setSearchItem] = useState([])
    const [searchItems, setSearchItems] = useState({})
    useEffect(() => {
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
            })

    }, [searchItems])

    const List = (e) => {
        console.log(e.target.value)
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
    if (typeof window !== "undefined") {
        document.getElementsByTagName("body")[0].addEventListener("click", function (e) {
            if (e.target.id !== "search" && e.target.id !== "searchIcon") {
                // setSearch(false)
            }
        })
    }

    return (
        <div className='w-full bg-white shadow-md px-5 flex justify-center items-center border border-b-2 border-black h-[65px] '>
            <NavMObDevice search={search} setSearch={setSearch} user={user} logout={logout} />
          <div className={`${search==='hidden'?' translate-x-[400%] absolute hidden':'translate-x-0'} duration-500 flex items-center justify-center md:justify-around w-full max-w-[1280px]`}>
 <Link href='/'><div
                  className='text-2xl hidden md:flex font-semibold w-max lg:w-[180px] xl:w-[280px]'>
Wrap My Device
              </div></Link>

             
              <div className='flex items-center xl:mr-6 w-full sm:w-[400px] md:w-[550px] xl:w-[720px] ' >


                  <AiOutlineSearch className='cursor-pointer absolute ml-2 xl:ml-3 text-2xl ' id="searchIcon" />
                  <input id='search' type="text" className={`border flex items-center rounded-[100px]  pl-[34px]  xl:px-[48px] w-full  sm:w-[400px] md:w-[550px] xl:w-[720px] cursor-text h-12 bg-[#eeeded] focus:bg-[#e4e3e3] text-base xl:text-lg text-gray-600`} placeholder='Search' onChange={(e) => List(e)} />
             
              </div>
               

              <div className='text-xl font-base text-center w-max hidden md:flex lg:w-[180px] xl:w-[280px] cursor-pointer' onClick={()=>setSearch('hidden')}>
    Cancel
</div>
<div className='md:hidden absolute right-5' onClick={()=>setSearch('hidden')}>
          <img src="/icons/cross.svg" alt="" />

</div>
          </div>

            <div className={`hidden md:flex justify-around w-full max-w-[1280px] items-center ${search==='hidden'?" ":' absolute -translate-x-[400%] hidden'}  duration-500`}>
            <Link href='/'><div
                className='text-2xl font-semibold w-max lg:w-[180px] xl:w-[280px]'>
Wrap My Device
            </div></Link>
            <div className='w-max lg:w-[500px] xl:w-[640px]   flex gap-4 lg:gap-8 text-xl font-base jus justify-center items-center'>
                <div className='bg-0 py-4 items-center cursor-pointer flex hover:bg-gray-10 ' 
                    onMouseLeave={() => setDevice('hidden')}
                    onMouseOver={() => setDevice('')}
                >
                    <Link href='/skin' className='hover:text-gray-600'
                    >Select Device</Link>
                    <img src="/icons/rightarraw.svg" alt="" className='rotate-90 mb-1'/>
                    <div className={`absolute z-40  w-max bg-white rounded-md border-black border-2  top-[8vh] ${device === 'hidden' && device2 === 'hidden' ? ' hidden' : ""}
duration-500 ease-in-out transform  

`}
                        onMouseLeave={() => setDevice2('hidden')}
                        onMouseOver={() => setDevice2('')}
                    >
                        <ul className='px-5 divide-y py- '>
                            <li
                                onMouseOver={() => { setDevice3(''); setBrand('apple') }}
className='hover:text-gray-400 flex items-center'

                            >
                                <Link href='/skin/apple'>Apple</Link>
                                <img src="/icons/rightarraw.svg" alt="" className='scale-90 mt-1' />

                            </li>
                            <li
                                onMouseOver={() => { setDevice3(''); setBrand('samsung') }}
                                className='hover:text-gray-400 flex items-center '

                            >
                                <Link href='/skin/samsung'>Samsung</Link>
                                <img src="/icons/rightarraw.svg" alt="" className=' scale-90 mt-1' />

                            </li>

                        </ul>
                    </div>
                    {mobile2[brand] && <div className={`absolute z-40  w-max bg-white rounded-md border-black border-2 right-100 translate-x-28 top-[8vh] ${device2 === 'hidden' ? ' hidden' : ""}
                  ${device3 === 'hidden' ? 'hidden' : ''}
duration-500 ease-in-out transform 

`}
                        onMouseLeave={() => { setDevice3('hidden'); setDevice2('hidden') }}
                        onMouseOver={() => { setDevice3(''); setDevice2('') }}


                    >
                        <ul className={`px-5 z-40 divide-y py-1`}>
                            {
                                mobile2[brand] && Object.keys(mobile2[brand].models).map((item, index) => {
                                    return (
                                        <li key={item+index} 
                                            className='hover:text-gray-400'
                                        >
                                            <Link href={`/skin/${brand}/${item}`}>{mobile2[brand].models[item].name}</Link>
                                        </li>
                                    )
                                }
                                )

                            }
                        </ul>
                    </div>}
                </div>
                    <div className='bg-0 py-4 items-center cursor-pointer flex hover:bg-gray-10 ' 

                        onMouseLeave={() => setCollection('hidden')}
                        onMouseOver={() => setCollection('')}
                >
                    <Link href='/collection' className='hover:text-gray-600' >Collections</Link>
                    <img src="/icons/rightarraw.svg" alt="" className='rotate-90 mb-1' />
                        <div className={`absolute z-40  w-max bg-white rounded-md border-black border-2  top-[8vh] ${collection === 'hidden' && collection2 === 'hidden' ? ' hidden' : ""}
duration-500 ease-in-out transform  

`}
                            onMouseLeave={() => setCollection2('hidden')}
                            onMouseOver={() => setCollection('')}
                        >
                            <ul className='px-5 divide-y py- '>
                                <Link href='/collection/plain color'><li className='hover:text-gray-400 flex items-center' >
                                    Plain Colour
                                </li></Link>

                                <Link href='/collection/testured'><li className='hover:text-gray-400 flex items-center' >
                                    Textured                </li></Link>

                            </ul>
                        </div>
                </div>
                <div className='hover:bg-gray-10 py-3'>
                    <Link href='/faqs' className='hover:text-gray-600'>FAQs</Link>
                </div>
                <div className='hover:bg-gray-10 py-3'>
                    <Link href='/about' className='hover:text-gray-600'>About</Link>
                </div>
            </div>
<div className='flex text-2xl gap-3 items-center w-[220] xl:w-[280px]'>
                <div className='flex items-center xl:mr-6' >


                    <AiOutlineSearch className='cursor-pointer absolute ml-2 xl:ml-3 text-2xl ' id="searchIcon" />
                    <input id='search' type="text" className={`border flex items-center rounded-[100px] py-1 xl:py-2 pl-[34px]  xl:px-[48px] w-[130px] xl:w-[180px] cursor-text h-10 bg-[#f5f5f5] text-base xl:text-lg text-gray-600`} placeholder='Search' onClick={()=>setSearch('')} />
                </div>
                <div className='cursor-pointer' onMouseOver={()=>{setUserdrop('')}}
                    onMouseLeave={()=>{setUserdrop('hidden')}}
                >

                {!user.value && <FaRegUserCircle  />}

                {user.value && <FaUserCircle  />}
                    {userdrop===''&&<div className={`absolute z-40  w-max bg-white rounded-md border-black border-2  top-[42px]
duration-500 ease-in-out transform  text-base px-2 -translate-x-[40px] 

`}
                    onMouseOver={()=>{setUserdrop2('')}}
                    onMouseLeave={()=>{setUserdrop2('hidden')}}
>
                    <ul className='divide-y px-2 py-1'>
                        {!user.value && <li><Link href='/login'>Login</Link></li>}
                        {!user.value && <li><Link href='/signup'>Register</Link></li>}
                        {user.value && <li><Link href='/myaccount'>Profile</Link></li>}
                        {user.value && <li><Link href='/orders'>Orders</Link></li>}
                        {user.value && <li className='cursor-pointer' onClick={logout}>Logout</li>}
                    </ul>
                </div>}
                </div>
                <Link  href="/cart"><AiOutlineShoppingCart className='cursor-pointer' /></Link>

                </div></div>



   {search===''&& <div className='absolute z-40 top-[65px]   w-full bg-white h-max max-h-[40vh] pb-10 shadow-2xl  flex justify-center'>
                      <ul id='myUL' className='text-base sm:text-lg md:text-xl w-4/5  sm:w-[380px] md:w-[520px] xl:w-[700px] px-5'>
                          {
                              searchItem.map((item, index) => {
                                  return (
                                      <li key={index+item} className='bg-white my-1'>

                                          <Link legacyBehavior href={`/skin/${searchItems[item].brand}/${item}`}><a>{item.toUpperCase()}</a></Link>
                                      </li>
                                  )
                              }
                              )
                          }
                      </ul>
                  </div>}



        </div>
    )
}
export default Navbar3

