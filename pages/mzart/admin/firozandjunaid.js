import React from 'react'
import mongoose from 'mongoose'
import Orders from '../../../components/admin/Order'
// import Image from 'next/image'
import Product from '../../../model/Product'
import User from '../../../model/User'
import Order from '../../../model/Order'


const firozandjunaid = ({ products ,users,orders}) => {
    // console.log(products)
  return (
    <div>firozandjunaid
      <Orders orders={orders}/>
    </div>
  )
}

export default firozandjunaid
export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI);
    
    }
    let products = await Product.find({}).lean();
    let users = await User.find({}).lean();
    let orders = await Order.find({}).lean();
    
    return {
        props: { products: JSON.parse(JSON.stringify(products)) , users: JSON.parse(JSON.stringify(users)), orders: JSON.parse(JSON.stringify(orders))},
    }
    }


