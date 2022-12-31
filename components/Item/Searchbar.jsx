import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlineSearch, AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineMenu } from 'react-icons/ai'
import { FaRegUserCircle, FaUserCircle } from 'react-icons/fa'


const Searchbar = ({setSearch,search}) => {

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

        <div className={`${search==='hidden'?'absolute translate-x-[200%]':'translate-x-0'} duration-500 w-full flex justify-around items-center relative transform`}>
              <Link href='/'><div
                  className='text-2xl font-semibold w-max lg:w-[180px] xl:w-[280px]'>
                  MZ Art
              </div></Link>
              <div className='grid grid-cols-1 relative'>

             
              <div className='flex items-center xl:mr-6' >


                  <AiOutlineSearch className='cursor-pointer absolute ml-2 xl:ml-3 text-2xl ' id="searchIcon" />
                  <input id='search' type="text" className={`border flex items-center rounded-[100px]  pl-[34px]  xl:px-[48px] w-[130px] xl:w-[720px] cursor-text h-12 bg-[#eeeded] focus:bg-[#e4e3e3] text-base xl:text-lg text-gray-600`} placeholder='Search' onChange={(e) => List(e)} />
             
              </div>
                  {/* <div className='absolute z-100'>
                      <ul id='myUL'>
                          {
                              searchItem.map((item, index) => {
                                  return (
                                      <li key={index} className='bg-white '>

                                          <Link legacyBehavior href={`/skin/${searchItems[item].brand}/${item}`}><a>{item}</a></Link>
                                      </li>
                                  )
                              }
                              )
                          }
                      </ul>
                  </div> */}
              </div>
              <div className='text-xl font-base text-center w-max lg:w-[180px] xl:w-[280px] cursor-pointer' onClick={()=>setSearch('hidden')}>
    Cancel
</div>
        </div>
       

  )
}

export default Searchbar