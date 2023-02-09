import React ,{useState,useEffect}from 'react'
import mongoose from 'mongoose'
import Orders from '../../../components/admin/Order'
import Order from '../../../model/Order'
import Router from 'next/router'
var jwt = require('jsonwebtoken');



const firozandjunaid = ({orders}) => {

  const router = Router
const [userAdmin, setUserAdmin] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('admin')
    if (token) {
    let decoded = jwt.verify(JSON.parse(token).token, process.env.NEXT_PUBLIC_JWT);
    if (decoded.password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setUserAdmin(true)
    } 
  }
  }, [])


    // console.log(products)
  return (
    <div className='w-full justify-center flex'>
      {userAdmin && <Orders orders={orders}/>}
      {!userAdmin && <div className='w-full flex justify-center items-center'>
        <div className='w-1/2 flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold'>Login kro bro</h1>
          </div>
      </div>}
    </div>
  )
}

export default firozandjunaid
export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI);
    
    }

    let orders = await Order.find({}).lean();
    
    return {
        props: { orders: JSON.parse(JSON.stringify(orders))},
    }
    }


