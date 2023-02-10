import React from 'react'
import Image from 'next/image'

export const ProductReview = ({cart,subTotal}) => {
  return (
      <div className='hidden md:block  md:w-[45%] bg-gray-100 p-10 pr-28 rounded-xl md:ml-4'>
          <div className="sidbar   py-5  w-[100%] max-w-[550px]  z-20">
              <div className='list-decimal text-semibold text-black'>
                  {Object.keys(cart).length === 0 && <li className='my-4 font-normal'>Cart is empty</li>}
                  {Object.keys(cart).map((key) => {
                      const { name, price, qty, size, varient, img } = cart[key]

                      return (
                          <div key={name} className='flex  border-b border-gray-10  py-[10px]' >
                              <div className='flex flex-col bg-gray-200  justify-center items-center relative w-[100px] h-[100px]'>
                                  <Image
                                      priority
                                      src={img}
                                      layout='fill'
                                      objectFit='contain'
                                      className='p-1'
                                      alt="Picture of the Skin"
                                  />
                              </div>

                              <div className=' ml-1 md:ml-4   items-center w-3/5'>
                                  <p className='font-mono flex items-center'>{name.split("(")[0]} </p>
                                  <p className='font- text-gray-500 my-[5px]'>{varient}</p>
                                  <div className='md:flex'>
                                      <p className='font- text-gray-500 my-[5px]'>Size: {size} /</p>
                                      <p className='font- text-gray-500 my-[5px] ml-2'>Qty: {qty}</p>
                                  </div>

                              </div>

                              <div className=' ml-1 md:ml-4 flex items-center text-center w-1/5'>
                                  {/* <p className='font-mono'>Price</p> */}
                                  <p className='font-mono'>₹{price * qty}</p>
                              </div>
                          </div>
                      )
                  })}
              </div>

              <div className='flex justify-between items-center mt-4'>
                  <p className='font-base'>Subtotal</p>
                  <p className='font-semibold'>₹{subTotal}</p>
              </div>
              <div className='flex justify-between items-center mt-4'>
                  <p className='font-base'>Delivery Charges</p>
                  <p className='font-semibold'>₹{0}</p>
              </div>

              <div className='flex justify-between items-center mt-4 border-t border-gray-500 pt-4'>
                  <p className='font-base'>Total Amount</p>
                  <p className='font-semibold text-2xl'>₹{subTotal}</p>
              </div>

          </div>
      </div>
  )
}
