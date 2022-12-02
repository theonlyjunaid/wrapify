import React from 'react'
import Link from 'next/link'
function Order({ orders }) {
    return (
        <div>
            {
                orders.map((item, index) => {
                    return (
                        <div key={index}><Link href={`/mzart/admin/orderinfo?id=${item.orderId}`} ><a><div className='flex cursor-pointer gap-10 bg-gray-400 my-2 py-2 px-10 justify-around'>
                            <div>
                                <p>{item.orderId}</p>
                            </div>
                            <div>
                                <p>{item.name}</p>
                            </div>
                            <div>
                                {item.status}
                            </div>
                            <div>
                                <p>{item.amount}</p>
                            </div>
                            <div>
                                <p>{item.city}</p>
                            </div>
                            <div>
                                <p>{item.state}</p>
                            </div>
                            <div>
                                <p>{item.pincode}</p>
                            </div>

                        </div></a></Link></div>
                    )
                }).reverse()
            }
        </div>
    )
}

export default Order