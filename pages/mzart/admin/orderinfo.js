import mongoose from 'mongoose'
import React from 'react'
import Order from '../../../model/Order'
const orderinfo = ({order}) => {
console.log(order)
  return (
    <div>orderinfo</div>
  )
}

export default orderinfo
export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI)
    }



    const order = await Order.findOne({orderId:context.query.id});
    return {
        props: {
            order: JSON.parse(JSON.stringify(order)),
        },
    };
}