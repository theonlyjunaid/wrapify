import React from 'react'
import Link from 'next/link'
function Order({orders}) {
  // console.log(props.orders)
  return (
    <div>
      {/* <div key={name} className='grid grid-cols-4 items-center border-b-2 py-[4px] md:text-sm' >
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
        </div>
        <p className='font-mono'>{size[index].split(" ")[1]}</p>
        <div>
          <p className='font-mono'>{price}</p>
        </div>


      </div> */}
{
 orders.map((item, index) => {

  // console.log(item)
    return (
  <Link href={`/mzart/admin/orderinfo?id=${item.orderId}`}><div className='flex cursor-pointer gap-10 bg-gray-400 my-2 py-2 px-10 justify-around'>
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

      </div></Link> 
    )
  })
}
    </div>
    )}

export default Order