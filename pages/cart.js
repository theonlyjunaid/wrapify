import React, { useEffect, useState } from 'react'
// import { Cart } from '../../data/Cart'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'


function CartItem({cart, item,subTotal ,addToCart,removeFromCart}) {
    // const [cartItems, setCartItems] = useState({});
    // useEffect(() => {
    //     if (localStorage.getItem("cart")) {
    //         const storedList = JSON.parse(localStorage.getItem("cart"));
    //         console.log(storedList)
    //         setCartItems(storedList);
    //     }
    // }, [])
    // const handleDelete = (task) => {
    //     const deleted = tasks.filter((t) => t !== task);
    //     setTasks(deleted);
    //     localStorage.setItem("localTasks", JSON.stringify(deleted))
    // }
    // console.log(cartItems) 
        // <li className='flex my-2 text-lg' key={key}>
                        //     <div className='w-2/3 '>{name} </div>
                        //     <div className='flex items-center justify-center w-1/3 '><AiOutlineMinusCircle className='mx-1 cursor-pointer' onClick={() => { removeFromCart(key, 1, price, name, size, varient) }} />
                        //         {qty}  <AiOutlinePlusCircle className='mx-1 cursor-pointer' onClick={() => { addToCart(key, 1, price, name, size, varient) }} /> </div>
                        // </li>
           
    return (
        <div className='md:flex mt-10 justify-center'>
            <div className='grid grid-cols-1 w-[80%] xl:max-w-[800px] mx-10'>
               
                {Object.keys(cart).length === 0 && <li className='my-4 font-normal'>Cart is empty</li>}
                {Object.keys(cart).map((key) => {
                    const { name, price, qty, size, varient, img } = cart[key]
                    console.log(cart[key])
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
{
//    Object.keys(cartItems).map((key) => {
//        if (!cartItems) return;
//        return (
//            <div key={cartItems[key].name} className='flex items-center border-b-2 py-[24px]' >
//                <div className='flex flex-col justify-center items-center relative w-[240px] h-[240px]'>
//                    <Image
//                        src={cartItems[key].img}
//                        layout='fill'
//                        objectFit='contain'
//                        alt="Picture of the Skin"
//                    />
//                </div>
//                <div>
//                    <div className='md:text-xl ml-3 md:ml-10 '>
//                        <p className='font-mono flex items-center'>{cartItems[key]?.name} </p>
//                        <p className='font-thin text-gray-800 my-[5px]'>{cartItems[key]?.varient}</p>
//                        <p className='font-thin text-gray-600 my-[5px]'>{cartItems[key]?.size}</p>
//                        <p className='font-mono'>Quantity - {cartItems[key].qty}</p>
//                        <div>
//                            <p className='font-mono'>Price - {cartItems[key].price}</p>
//                        </div>
//                        <div><div className='flex items-center justify-center w-1/3 '><AiOutlineMinusCircle className='mx-1 cursor-pointer' onClick={() => { removeFromCart(cartItems[key].slug, 1, cartItems[key].price, cartItems[key].name + " " + cartItems[key].color, cartItems[key].size, cartItems[key].color, cartItems[key].img) }} />
//                            {cartItems[key].qty}  <AiOutlinePlusCircle className='mx-1 cursor-pointer' onClick={() => { addToCart(cartItems[key].slug, 1, cartItems[key].price, cartItems[key].name + " " + cartItems[key].color, cartItems[key].size, cartItems[key].color, cartItems[key].img) }} /> </div></div> 

//                    </div>
//                </div>
//            </div>
//          )
//    })
}

                {/* {
                    tasks.map((task, index) => {
                        // when task image is not defined
                        if (!task.image) return;
                        return (
                            <div key={index} className='flex items-center border-b-2 py-[24px]' >
                                <div className='flex flex-col justify-center items-center relative w-[240px] h-[240px]'>
                                    <Image
                                        src={task.image}
                                        layout='fill'
                                        objectFit='contain'
                                        alt="Picture of the Skin"
                                    />
                                </div>
                                <div>
                                    <div className='md:text-xl ml-3 md:ml-10 '>
                                        <p onClick={() => { handleDelete(task) }} className='bg-red-100 px-1 py-1 w-[80px] text-sm rounded-lg hover:bg-red-400 cursor-pointer'>delete me</p>
                                        <p className='font-mono flex items-center'>{task?.name} </p>
                                        <p className='font-thin text-gray-800 my-[5px]'>{task?.skin}</p>
                                        <p className='font-thin text-gray-600 my-[5px]'>{task?.skinColor}</p>
                                        <p className='font-mono'>Quantity - 1</p>
                                        <div>
                                            <p className='font-mono'>Price - {task.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )} */}

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
                        <Link href="/checkout"><a><button className={`bg-black hover:bg-gray-800 text-white w-full py-5 mt-5 rounded-[40px]`} onClick={item}>Checkout</button></a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem