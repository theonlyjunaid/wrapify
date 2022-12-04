import mongoose from 'mongoose'
import React,{useEffect} from 'react'
import Order from '../model/Order'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const order = ({ order, clearCart }) => {

    const router = useRouter()
    const sendmail = async () => {
        const data = await fetch("/api/mailapi", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 'id': order._id }),
        }).then((t) =>
            t.json()        
            );
            console.log(data)
        if (data.success) {
            toast.success(data.message, {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else if (data.success === false) {
     console.log(data.message)
        }
    };
    if (router.query.clearCart == 1) {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('cart')
        }
        sendmail()
    }

    return (
        <div>
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className=" w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">
                            Wrapify
                        </h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                            Order id : {order.orderId}
                        </h1>
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">
                            Order has been successfully placed your payment is {order.status}
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
                        {Object.keys(order.products).map((item) => {
                            const { name, price, quantity,img,size,varient,qty} = order.products[item]
                            console.log(size)
                            // console.log(name[0].split("(")[1].split("/"))
                            return (
                                <div key={item} >
                                    {
                                        name.map((item,index)=>{
                                            return(
                                                <div key={name} className='grid grid-cols-4 items-center border-b-2 py-[4px] md:text-sm' >
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
                                // <div key={name} className='flex items-center border-b-2 py-[24px]' >
                                //     <div className='flex flex-col justify-center items-center relative w-[240px] h-[240px]'>
                                //         <Image
                                //             src={img}
                                //             layout='fill'
                                //             objectFit='contain'
                                //             alt="Picture of the Skin"
                                //         />
                                //     </div>
                                //     <div>
                                //         <div className='md:text-xl ml-3 md:ml-10 '>
                                //             <p className='font-mono flex items-center'>{name} </p>
                                //             <p className='font-thin text-gray-800 my-[5px]'>{varient}</p>
                                //             <p className='font-mono'>Quantity - {qty}</p>
                                //             <div>
                                //                 <p className='font-mono'>Price - {price}</p>
                                //             </div>
                                //         </div>
                                //     </div>
                                // </div>
                                // <div key={item} className='flex border-b border-gray-200 py-2'>
                                //     <span className="text-gray-500">{order.products[item].name}</span>
                                //     <span className="ml-auto text-gray-900">{order.products[item].qty}</span>
                                //     <span className="ml-auto text-gray-900">{order.products[item].price}</span>
                                // </div>
                            )

                        })}


                        <div className="flex my-2 py-2">
                            <span className="title-font font-medium text-2xl text-gray-900">
                                ₹{order.amount}
                            </span>
                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                Track Order
                            </button>
                            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* <img
                        alt="ecommerce"
                        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                        src="https://dummyimage.com/400x400"
                    /> */}
                </div>
            </div>
        </section>
        </div>
    )
}

export default order

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI)
    }



    const order = await Order.findById(context.query.id);
    return {
        props: {
            order: JSON.parse(JSON.stringify(order)),
        },
    };
}