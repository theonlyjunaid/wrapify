import React from 'react'
import Link from 'next/link'
function Order({ orders }) {
    // console.log(orders.orderAt)
    return (
        
        <div className='max-w-[1300px] '>
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
                    console.log(item?.orderAt?.slice(4,13))
                    return (
                        <div key={index}><Link legacyBehavior href={`/mzart/admin/orderinfo?id=${item.orderId}`} ><a><div className='flex cursor-pointer gap-10 bg-gray-300 rounded-lg my-2 py-2 px-2 justify-between'>
                            <div>
                                <p>{item.orderId}</p>
                                <p>
                                    {item?.orderAt?.slice(4, 15)
                                    }
                                </p>
                                <p>
                                    {item?.orderAt?.slice(16, 24)}
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