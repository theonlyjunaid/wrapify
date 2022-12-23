import React, { useRef, useEffect, useState } from 'react'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import Link from 'next/link'

const Navbar = ({ logout, user, cart, addToCart, removeFromCart, clearCart, subTotal, qty }) => {

    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        } else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }
    const [dropdown, setDropdown] = useState(false)

    const toggleDropdown = (value) => {
        if (!value) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }
    const ref = useRef()
    return (
        <div className='flex justify-between px-7 py-2 bg-black text-white '>
            <div className='text-2xl'>Wraper</div>
            <div className="nav">
                <ul className='flex gap-2 items-center'>
                    <li>Skin</li>
                    <li>About</li>
                    <li>Privacy</li>
                </ul>
            </div>
            <div className='text-3xl cursor-pointer flex' >
                <span onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}> {dropdown && <div className='absolute top-10 right-10 px-7 bg-black text-white p-2 rounded-md text-lg z-20'>
                    <ul>
                        <li> <Link legacyBehavior href='/myaccount'><a>Profile</a></Link></li>
                        <li> <Link legacyBehavior href='/orders'><a>Orders</a></Link></li>
                        <li onClick={logout} className='cursor-pointer'> Logout</li>
                    </ul>

                </div>}
                    {user.value && <FaUserCircle className='mx-3 cursor-pointer' onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} />}</span>
                {!user.value && <Link legacyBehavior href='/login'><a className='mx-3 text-xl'>Login</a></Link>}
               <Link legacyBehavior href="/cart"><a><AiOutlineShoppingCart /></a></Link> 
                {/* <AiOutlineShoppingCart onClick={toggleCart} /> */}
            </div >


            {/* <div ref={ref} className="sidbar  absolute top-0 right-0 bg-gray-400 py-10 px-20 transform transition-transform translate-x-full w-[400px] z-20">
                <h2 className='text-3xl font-semibold text-black'>Shopping Cart</h2>
                <span className='absolute top-5 right-3 text-2xl text-gray-600 cursor-pointer' onClick={toggleCart}><AiFillCloseCircle /></span>
                <ol className='list-decimal text-semibold text-black'>
                    {Object.keys(cart).length === 0 && <li className='my-4 font-normal'>Cart is empty</li>}
                    {Object.keys(cart).map((k) => {
                        const { name, price, qty, size, varient ,img} = cart[k]
                        // console.log(cart[k])
                        return (
                            <li className='flex my-2 text-lg' key={k}>
                                <div className='w-2/3 '>{name} </div>
                                <div className='flex items-center justify-center w-1/3 '><AiOutlineMinusCircle className='mx-1 cursor-pointer' onClick={() => { removeFromCart(k, 1, price, name, size, varient) }} />
                                    {qty}  <AiOutlinePlusCircle className='mx-1 cursor-pointer' onClick={() => { addToCart(k, 1, price, name, size, varient) }} /> </div>
                            </li>)
                    })}
                </ol>
                <div className='flex gap-5 text-lg'>
                    <Link legacyBehavior href="/checkout"><a >    <button disabled={Object.keys(cart).length ==0} className="disabled:bg-indigo-400 disabled:cursor-not-allowed text-white bg-indigo-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-md">Checkout</button></a></Link>
                    <button disabled={Object.keys(cart).length ==0}  className="disabled:bg-indigo-400 disabled:cursor-not-allowed text-white bg-indigo-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-300 rounded text-md" onClick={clearCart}>Clear Cart</button>
                </div>
            </div> */}
        </div >
    )
}

export default Navbar