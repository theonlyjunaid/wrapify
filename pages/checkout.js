import React, { useState, useEffect } from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { BsTrash, BsCircle, BsCheck2Circle } from 'react-icons/bs'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const checkout = ({ cart, addToCart, removeFromCart, clearCart, subTotal, qty, user ,setSubTotal}) => {
    const [info, setInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        pincode: '',
        delivery: 'standard',
        disbled: false
    })
    // console.log(info)
    useEffect(() => {

        if (typeof window !== 'undefined') {
            if (localStorage.getItem('myuser')) {
                const myuser = JSON.parse(localStorage.getItem('myuser'));
                const user = JSON.parse(localStorage.getItem('myuser'))
                setInfo({
                    ...info,
                    email: user.email,
                })
                fetchData(myuser.token)

            }
        }


    }, [])
    const fetchData = async (token) => {
        const res = await fetch(`/api/getuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: token })
        })
        const json = await res.json()
        const userData = json.user
        // console.log(userData)
        setInfo({
            ...info,
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            address1: userData.address1,
            address2: userData.address2,

            pincode: userData.pincode,
        })
        // console.log(json)
        // console.log(user)
    }


    const handleChange = async (e) => {

        setInfo({ ...info, [e.target.name]: e.target.value })
        if (info.name && info.email && info.phone && info.address && info.pincode) {
            setInfo({ ...info, disbled: false })
        }
     
        // if (e.target.name === "phone") {
        //     if (e.target.value.length !== 10) {
        //         setInfo({ ...info, disbled: true })
        //         toast.error('enetr 10 digit number', {
        //             position: "top-left",
        //             autoClose: 5000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //             theme: "light",
        //         });
        //     }
        // }

        if (e.target.name === 'pinode') {
            console.log(e.target.value);
setInfo({ ...info, pincode: e.target.value })
            if (e.target.value.length == 6) {
                // console.log(pincode)
                let pins = await fetch(`/api/pincode`)
                let pinJson = await pins.json()
                // console.log(pinJson)
                if (Object.keys(pinJson).includes(e.target.value)) {
                    // console.log(pinJson[e.target.value][0])
                    // console.log(pinJson[e.target.value][1])
                    setInfo({ ...info, city: pinJson[e.target.value][1], state: pinJson[e.target.value][0], pincode: e.target.value })
                }

            }
            else {
                setInfo({ ...info, city: '', state: '' })
            }
        }
        // console.log(info)
    }


    const makePayment = async () => {

        // console.log("here...");
        const res = await initializeRazorpay();
        let oid = Math.floor(Math.random() * Date.now());
        if (!res) {
            alert("Razorpay SDK Failed to load");
            return;
        }
        const bodyData = { subTotal, qty, cart, oid, info };

        // Make API call to the serverless API
        const data = await fetch("/api/razorpay", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bodyData),
        }).then((t) =>
            t.json()
        );
        // console.log(data.success);
        if (data.success) {
            var options = {
                key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
                name: "Wrapify",
                currency: data.currency,
                amount: data.amount,
                order_id: data.id,
                description: "Thankyou for your test donation",
                callback_url: "/api/paymentverify",
                prefill: {
                    name: info.name,
                    email: info.email,
                    contact: 91 + info.phone,
                },
            };
            // console.log(options);
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } else {
            if (data.cartClear) {
                clearCart()
            }
            toast.error(data.message, {
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
    };
    const initializeRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    };

    return (
        <div className='container m-auto ' >
            <Head>
                <title>Checkout</title>
                <meta name='description' content='Checkout Page' />
            </Head>
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


            <h1 className='font-bold text-3xl text-center mt-8 mb-3'>Checkout</h1>
            <div className='md:flex '>
                <div className='md:w-3/5'>
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
                    <div className="relative px-2 mb-2">

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
                        <div className="flex border py-2 cursor-pointer w-full  px-2 items-center rounded-md" onClick={()=>{setInfo({...info,delivery:'standard'})}}>

                                {info.delivery === 'standard' ? <BsCheck2Circle className='scale-150 ml-2'/>:<BsCircle className='ml-2' />}
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
                    <Link href=""><a>
                        <button disabled={info.disbled} onClick={makePayment} className="dis disabled:bg-gray-500 disabled:cursor-not-allowed cursor-pointer relative mx-auto flex justify-center   w-full   py-3  rounded-md my-5  bg-black text-white">Pay Now</button>
                    </a></Link>
                    </div>
                    </div>
                </div>
                <div className='hidden md:block md:w-2/5 bg-gray-100'>
                    <div className="sidbar  p-4  py-10  w-[100%]  z-20">
                        <div className='list-decimal text-semibold text-black'>
                            {Object.keys(cart).length === 0 && <li className='my-4 font-normal'>Cart is empty</li>}
                            {Object.keys(cart).map((key) => {
                                const { name, price, qty, size, varient, img } = cart[key]

                                return (
                                    <div key={name} className='flex  border-b border-gray-400  py-[10px]' >
                                        <div className='flex flex-col justify-center items-center relative w-[100px] h-[100px]'>
                                            <Image
                                            priority
                                                src={img}
                                                layout='fill'
                                                objectFit='contain'
                                                alt="Picture of the Skin"
                                            />
                                        </div>

                                        <div className=' ml-1 md:ml-4  items-center w-3/5'>
                                            <p className='font-mono flex items-center'>{name.split("(")[0]} </p>
                                            <p className='font-thin text-gray-800 my-[5px]'>{varient}</p>
                                            <div className='md:flex'>
                                                <p className='font-thin text-gray-800 my-[5px]'>Size: {size} /</p>
                                                <p className='font-thin text-gray-800 my-[5px] ml-2'>Qty: {qty}</p>
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
            </div>

        </div>
    )
}

export default checkout