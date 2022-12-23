import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {  AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'


function CartItem({cart, item,subTotal ,addToCart,removeFromCart}) {


//     const temp = ()=> {
// localStorage.setItem('cart', JSON.stringify({
//     'cart': "cart",
// }))
//     }
// useEffect(() => {
//     temp()
// }, [])


    return (
        <div className='md:flex mt-10 justify-center'>
            <div className='grid grid-cols-1 w-[80%] xl:max-w-[800px] mx-10'>
               
                {Object.keys(cart).length === 0 && <li className='my-4 font-normal'>Cart is empty</li>}
                {Object.keys(cart).map((key) => {
                    const { name, price, qty, size, varient, img } = cart[key]
                    // console.log(cart[key])
                    return (
                   
                        <div key={name} className='flex items-center border-b-2 py-[24px]' >
                            <div className='flex flex-col justify-center items-center relative w-[240px] h-[240px]'>
                                <Image
                                    src={img}
                                    layout='fill'
                                    objectFit='contain'
                                    alt="Picture of the Skin"
                                />
                            </div>
                            <div>
                                <div className='md:text-xl ml-3 md:ml-10 '>
                                    <p className='font-mono flex items-center'>{name} </p>
                                    <p className='font-thin text-gray-800 my-[5px]'>{varient}</p>
                                    <p className='font-mono'>Quantity - {qty}</p>
                                    <div>
                                        <p className='font-mono'>Price - {price}</p>
                                    </div>

                                <div className='flex'>
                                    <p className='font-thin text-gray-600 my-[5px]'>{size}</p>
                                        <div className='flex items-center justify-center w-1/3 '>
                                            
                                            <AiOutlineMinusCircle className='mx-1 cursor-pointer' onClick={() => { removeFromCart(key, 1, price, name, size, varient) }} />
                                            {qty}  <AiOutlinePlusCircle className='mx-1 cursor-pointer' onClick={() => { addToCart(key, 1, price, name, size, varient) }} /> </div>

                                </div>
                                    {/* <div onClick={() => { removeFromCart(key, qty, price, name, size, varient) }}>remove me</div> */}
                                    <BsTrash className='cursor-pointer' onClick={() => { removeFromCart(key, qty, price, name, size, varient) }} />
                                </div>
                            </div>
                        </div>
                        )
                })}


            </div>

            <div className='md:w-[350px] mx-10 md:ml-10 mb-10'>
                <div className='text-3xl mt-1 mb-5'>Order Summary</div>
                <div className='text-lg'>
                    <div className='flex justify-between px-5 py-2'>
                        <p className='font-mono'>Subtotal</p>
                        <p className='font-mono'>{subTotal}</p>
                    </div>
                    <div className='flex justify-between px-5 py-2'>
                        <p className='font-mono'>Shipping</p>
                        <p className='font-mono'>0</p>
                    </div>
                    <div className='flex justify-between px-5 py-2'>
                        <p className='font-mono'>Tax</p>
                        <p className='font-mono'>0</p>
                    </div>
                    <div className='flex justify-between px-5 py-3 border-t-2 border-b-2'>
                        <p className='font-mono'>Total</p>
                        <p className='font-mono'>{subTotal}</p>
                    </div>
                    <div>
                        <Link legacyBehavior href="/checkout"><a><button className={`bg-black hover:bg-gray-800 text-white w-full py-5 mt-5 rounded-[40px]`} onClick={item}>Checkout</button></a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem