import React from 'react'
import mongoose from 'mongoose'
import Orders from '../../../components/admin/Order'
// import Image from 'next/image'
import Product from '../../../model/Product'
import User from '../../../model/User'
import Order from '../../../model/Order'
import Image from 'next/image'
const order = ({orders}) => {
  console.log(orders)
const Authenticate = (e) => {
    e.preventDefault()
    const email = 'junaidmalik9069@gmail.com'
    const password = 'Malik.@2002'

  fetch('https://apiv2.shiprocket.in/v1/external/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data && data.token) {
          localStorage.setItem('adminToken', data.token)
        }
      })
  }

  const bookShipment = (e) => {
    e.preventDefault()
    const token = localStorage.getItem('adminToken')
    let body = {
      "order_id": orders.orderId,
      "order_date": "2022-07-24 11:11",
      "pickup_location": "Home",
      "channel_id": "",
      "comment": "Seller: MZART",
      "billing_customer_name": orders.name.split(' ')[0],
      "billing_last_name": orders.name.split(' ')[1],
      "billing_address": orders.address.split('-')[0],
      "billing_address_2": orders.address.split('-')[1],
      "billing_city": orders.city,
      "billing_pincode": orders.pincode,
      "billing_state": orders.state,
      "billing_country": "India",
      "billing_email": orders.email,
      "billing_phone": orders.phone,
      "shipping_is_billing": true,
      "shipping_customer_name": "",
      "shipping_last_name": "",
      "shipping_address": "",
      "shipping_address_2": "",
      "shipping_city": "",
      "shipping_pincode": "",
      "shipping_country": "",
      "shipping_state": "",
      "shipping_email": "",
      "shipping_phone": "",
      "order_items": [
        {
          "name": "Kunai",
          "sku": "chakra123",
          "units": 10,
          "selling_price": "900",
          "discount": "",
          "tax": "",
          "hsn": 441122
        }
      ],
      "payment_method": "Prepaid",
      "shipping_charges": 0,
      "giftwrap_charges": 0,
      "transaction_charges": 0,
      "total_discount": 0,
      "sub_total": orders.amount,
      "length": 10,
      "breadth": 15,
      "height": 20,
      "weight": 0.5
    }
    fetch('https://apiv2.shiprocket.in/v1/external/orders/create/adhoc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      }).then((r) => r.json())
      .then((data) => {
        console.log(data)
      })
  
    console.log(token)
  }

  

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-4 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className=" w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-gray-900 text-xl title-font font-medium ">name: {orders.name}</h2>
              <h2 >phone: {orders.phone}</h2>
              <h2>email: {orders.email}</h2>
              <h2>address: {orders.address}</h2>
              <h2>city: {orders.city}</h2>
              <h2>state: {orders.state}</h2>
              <h2>pincode: {orders.pincode}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4 pt-3">
              Order id : {orders.orderId}
            </h1>
            <h2 className="text-md title-font text-gray-500 tracking-widest flex items-center">
              Order has been successfully placed and payment is <div className='text-2xl font-mono text-black mx-2'>{orders.status}</div>
            </h2>
            <div className="grid grid-cols-4">
<div></div>
              <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                Description
              </a>
              <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                Quantity
              </a>
              <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                Price
              </a>
            </div>
      {Object.keys(orders.products).map((item,index) => {
// console.log(orders.products[item])
const { name, price, quantity,img,size,varient,qty} = orders.products[item]
// console.log(name)
        return (  
          <div key={item+index}>
           {
              
                name.map((item, index) => {
                  return (
                    <div key={name+index} className='grid grid-cols-4 items-center border-b-2 py-[4px] md:text-sm' >
                      <div className='flex flex-col justify-center items-center relative w-[100px] h-[100px]'>
                        <Image
                          src={img}
                          layout='fill'
                          objectFit='contain'
                          alt="Picture of the Skin"
                        />
                      </div>


                      <div>

                        <p className='font-mono flex items-center'>{item} </p>
                        {/* <p className='font-thin text-gray-800 my-[5px]'>{varient}</p> */}
                      </div>
                      <p className='font-mono'>{size[index].split(" ")[1]}</p>
                      <div>
                        <p className='font-mono'>{price}</p>
                      </div>


                    </div>
                  )
                }
                )
              
           }
          </div>
        )

      })}
            <div className="flex my-2 py-2">
              <span className="title-font font-medium text-2xl text-gray-900">
                ₹{orders.amount}
              </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={Authenticate}>
                Authenticate
              </button>
              <button className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded" onClick={bookShipment}>
                Book Shipping
              </button>
     
            </div>
          </div>
   
        </div>
      </div>
    </section>
    </div>
  )
}

export default order

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI);

    }
    let products = await Product.find({}).lean();
    let users = await User.find({}).lean();
    let orders = await Order.findOne({orderId: context.query.id}).lean();

    return {
        props: { products: JSON.parse(JSON.stringify(products)), users: JSON.parse(JSON.stringify(users)), orders: JSON.parse(JSON.stringify(orders)) },
    }
}