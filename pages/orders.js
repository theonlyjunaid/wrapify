import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Orders = () => {
    const [orderdata, setOrderdata] = useState([])
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const user = JSON.parse(localStorage.getItem('myuser'))


            fetch('/api/myorders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "token": user?.token }),
            }).then((t) =>

                t.json()
            ).then((data) => {
                setOrderdata(data.orders)
            })
        }
    }, [])

    return (
        <div className='w-full'>
            <div className=' mx-auto w-full '>
                <h1 className='font-bold text-2xl  py-4 pt-10 mx-auto w-[900px]'>My Orders</h1>

                {orderdata.map((item, index) => {
                    // console.log(item)
                    return (
                        <div className=' border rounded-[10px] h-max mx-auto w-full max-w-[900px] my-5 mb-14' key={item}>
                            <div className='sm:flex  sm:justify-between my-5 px-2 md:px-10 items-center w-full'>
<div className='level6:flex text-center level6:text-justify  level6:justify-around gap-4 md:gap-10 w-full sm:w-auto'>


                                <div>
                                    <h2>Order number</h2>
                                    <h3 className='font-thin'>{item.orderId}</h3>
                                </div>
                                <div>

                                    <h2>Date Placed</h2>
                                    <h3 className='font-thin'>{item.updatedAt.slice(4, 15)}</h3>
                                </div>
                                <div>

                                    <h2 >Total amount</h2>
                                    <h3 >₹{item.amount}</h3>
                                </div>
                                </div>
                                <div className='level6:flex  gap-5 mt-4 sm:mt-0 sm:gap-3 sm:ml-14 w-full sm:w-auto justify-center '>
                                    <Link href={`/order?id=${item._id}`}>
                                        <div className='cursor-pointer border rounded-md px-5 level6:px-10 py-2 my-2 mx-auto level6:mx-0 level6:my-0 sm:p-2 bg-gray-50 hover:bg-gray-200 w-max'>
                                            View Order
                                        </div>
                                    </Link>
                                    <div className='cursor-pointer border rounded-md px-5 level6:px-10 py-2 sm:p-2 mx-auto level6:mx-0 bg-gray-50 hover:bg-gray-200 w-max'>
                                        View Invoice
                                    </div>

                                </div>
                            </div>

                            {
                                Object.keys(item.products).map((key, index) => {
                                    // let name = item.products[key].name.split("")
                                    console.log(item.products[key])
                                    return (
                                        <div className='border-t flex py-2' key={key}>
                                            <div className='w-[15%] bg-gray-50 flex justify-center mx-5 rounded-lg'>

                                                <Image src={item.products[key].img} width={100} height={100} className='w-auto py-1 h-[100px] ' />
                                            </div>
                                            <div className='w-[80%]'>


                                                <div className='flex gap-2 justify-between w-full pr-5 '>
                                                    <div>

                                                        <h2 className='font-[500] tracking-wide'>{item.products[key].varient.toUpperCase()}</h2>
                                                        <h3 className='text-sm text-gray-500 tracking-wide mt-1 my-[1px] '>Model: {item.products[key].name[0].split("(")[0].toUpperCase()}</h3>
                                                        <h3 className='text-sm text-gray-500 tracking-wide my-[1px]'>
                                                            Size:   {item.products[key].name[0].split("(")[1].split("/")[1].split(")")[0]}
                                                        </h3>
                                                        <h3 className='text-sm text-gray-500 tracking-wide my-[1px]'>
                                                            Quantity:   {item.products[key].qty}
                                                        </h3>
                                                    </div>


                                                    <div className='w-4/6 items-center '>

                                                        <div className='flex gap-2 justify-end'>


                                                            <h2>
                                                                ₹{item.products[key].price} x {item.products[key].qty} =
                                                            </h2>
                                                            <h2>
                                                                ₹{item.products[key].price * item.products[key].qty}
                                                            </h2>
                                                        </div>
                                                        {/* <div className='text-gray-500 w-full flex justify-end'>
                                 {item.products[key].desc2 === " " ? <div>Whether it's the result of climate change or a nuclear winter, all-year snowfall is just around the corner. When that day comes, you'll need Arctic Camo if you want to continue hiding from your responsibilities.</div> : <div>{item.products[key].desc2}</div>}
                             </div> */}
                                                        <Link href={`/skin/${item.products[key].brand}/${item.products[key].name[0].split("(")[0]}`} >
                                                            <div className='text-blue-600 font-semibold text-base underline cursor-pointer flex mt-5 justify-end'>
                                                                View Product
                                                            </div></Link>
                                                    </div>


                                                </div>
                                                <div>

                                                </div>
                                                <div>

                                                </div>

                                            </div>
                                        </div>)
                                })
                            }

                        </div>
                    )
                }).reverse()}

            </div>
        </div>

    )
}


export default Orders