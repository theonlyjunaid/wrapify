import React, { useState, useEffect } from 'react'
import Link from 'next/link'


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
        <div>
            <div className='container mx-auto '>
                <h1 className='font-bold text-2xl p-6'>My Orders</h1>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead className="bg-white border-b">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                #
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                First
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                Last
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                            >
                                                Handle
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderdata.map((item, index) => {
                                            return (<tr key={index} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {item.orderId}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {item.name}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {item.amount}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {/* {item.quantity} */}
                                                    <Link legacyBehavior href={`/order?id=${item._id}`}><a>Details</a></Link>
                                                </td>
                                            </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>

    )
}


export default Orders