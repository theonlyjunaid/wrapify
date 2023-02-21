import React from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { BsTrash, BsCircle, BsCheck2Circle } from 'react-icons/bs'
import Link from 'next/link'

const CheckoutDetails = ({ info, setInfo, handleChange, makePayment ,user}) => {
  return (
      <div className='p-8 md:w-[55%] lg:p-10 lg:pl-40 min-h-screen'>
          <h2> Contact Info</h2>
          <div className="mx-auto md:flex border-b bo">
              <div className="px-2 md:w-1/2">
                  <div className=" mb-4">
                      <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                          Name
                      </label>
                      <input
                          onChange={handleChange}
                          type="text"
                          id="name"
                          value={info.name}
                          name="name"
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                  </div>

              </div>
              {user?.email ? <div className="px-2 md:w-1/2">
                  <div className=" mb-4">
                      <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                          Email
                      </label>
                      <input
                          readOnly
                          value={user.email}
                          type="email"
                          id="email"
                          name="email"
                          className="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                  </div>

              </div> : <div className="px-2 md:w-1/2">
                  <div className=" mb-4">
                      <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                          Email
                      </label>
                      <input
                          onChange={handleChange}
                          type="email"
                          id="email"
                          value={info.email}
                          name="email"
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                  </div>

              </div>}

          </div>
          <h2 className='mt-4'> Delivery Details</h2>

          <div className="relative px-2 mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Address
              </label>
              <textarea
                  onChange={handleChange}
                  id="address1"
                  name="address1"
                  value={info.address1}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-12 text-base outline-none text-gray-700 pt-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={""}
                  minLength={10}
                  placeholder="House No. , Street Name, Block"
              />
          </div>
          <div className="relative px-2  mb-4">

              <textarea
                  onChange={handleChange}
                  id="address2"
                  name="address2"
                  value={info.address2}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-12 text-base outline-none text-gray-700 pt-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={""}
                  minLength={10}
                  placeholder="Locality , Landmark"
              />
          </div>
          <div className="flex">
              <div className="px-2 w-1/2">
                  <div className=" mb-4">
                      <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
                          phone
                      </label>
                      <input
                          onChange={handleChange}
                          type="number"
                          id="phone"
                          value={info.phone}
                          name="phone"
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                  </div>

              </div>
              <div className="px-2 w-1/2">
                  <div className=" mb-4">
                      <label htmlFor="city" className="leading-7 text-sm">
                          city
                      </label>
                      <input
                          onChange={handleChange}
                          type="text"
                          id="city"
                          value={info.city}
                          name="city"
                          className="w-full   rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                  </div>


              </div>
          </div>
          <div className="flex">
              <div className="px-2 w-1/2">
                  <div className=" mb-4">
                      <label htmlFor="state" className="leading-7 text-sm">
                          State
                      </label>
                      <input
                          onChange={handleChange}
                          type="text"
                          id="state"
                          value={info.state}
                          name="state"
                          className="w-full   rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                  </div>

              </div>
              <div className="px-2 w-1/2">
                  <div className=" mb-4">
                      <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">
                          pincode
                      </label>
                      <input
                          onChange={handleChange}
                          type="number"
                          id="pincode"
                          value={info.pincode}
                          name="pincode"
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                  </div>


              </div>
          </div>
          <div className='mt-4'>
              <h2>Delivery type</h2>
              <div className="md:flex gap-2 px-2"> 
                  <div className="flex border py-2 cursor-pointer w-full  px-2 items-center rounded-md" onClick={() => { setInfo({ ...info, delivery: 'standard' }) }}>

                      {info.delivery === 'standard' ? <BsCheck2Circle className='scale-150 ml-2' /> : <BsCircle className='ml-2' />}
                      <div className="px-2 w-3/5 ">
                          <p className='ml-2 '>Standard </p>
                          <p className='ml-2'> 5-10 days Delivery</p>
                      </div>
                      <div className='w-1/5 flex justify-end'>
                          <p className='ml-auto'>Free</p>
                      </div>
                  </div>
                  {/* <div className="flex border cursor-pointer py-2 md:w-1/2 px-2 items-center rounded-md" onClick={() => { setInfo({ ...info, delivery: 'express' }) }}>
                                {info.delivery === 'express' ? <BsCheck2Circle className='scale-150 ml-2' /> : <BsCircle className='ml-2'/>}

                            <div className="px-2 w-3/5 ">
                            <p className='ml-2 '>Express </p>
                                <p className='ml-2'> 4-6 days Delivery</p>
                            </div>
                           <div className='w-1/5 flex justify-end'>
                                    <p className='ml-auto'>₹50</p>
                           </div>
                        </div> */}
              </div>


              <div className='mt-4 px-2 w-full relative'>
                  <Link legacyBehavior href=""><a>
                      <button disabled={info.disbled} onClick={makePayment} className="dis disabled:bg-gray-500 disabled:cursor-not-allowed cursor-pointer relative mx-auto flex justify-center   w-full   py-3  rounded-md my-5  bg-black text-white">Pay Now</button>
                  </a></Link>
              </div>
          </div>
      </div>
  )
}

export default CheckoutDetails