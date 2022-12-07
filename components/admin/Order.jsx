import React from 'react'
import Link from 'next/link'
function Order({ orders }) {
    console.log(orders)
    return (
        
        <div className='max-w-5xl '>
            <div className='flex justify-between '>
<h2>
    Order details
</h2>
<h2>
    Customer Details
</h2>
<h2>
    payment
</h2>
<h2>
    Address
</h2>
<h2>
    Order Status
</h2>
<h2>
    Action
</h2>



            </div>
            {
                orders.map((item, index) => {
                    return (
                        <div key={index}><Link href={`/mzart/admin/orderinfo?id=${item.orderId}`} ><a><div className='flex cursor-pointer gap-10 bg-gray-400 my-2 py-2 px-10 justify-around'>
                            <div>
                                <p>{item.orderId}</p>
                                <p>
{item.updatedAt
                                    }
                                </p>
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