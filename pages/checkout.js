import React, { useState, useEffect } from 'react'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const checkout = ({ cart, addToCart, removeFromCart, clearCart, subTotal, qty, user }) => {
    // console.log(let item in cart)



    const [info, setInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        disbled: true
    })
    useEffect(() => {

        if (typeof window !== 'undefined') {
            if (localStorage.getItem('myuser')) {
                const user = JSON.parse(localStorage.getItem('myuser'))
                setInfo({
                    ...info,
                    email: user.email,
                })
            }
        }
    }, [])
    const handleChange = async (e) => {

        setInfo({ ...info, [e.target.name]: e.target.value })
        if (info.name && info.email && info.phone && info.address && info.pincode) {
            setInfo({ ...info, disbled: false })
        }
        if (e.target.name === "phone") {
            if (e.target.value.length !== 10) {
                setInfo({ ...info, disbled: true })
                toast.error('enetr 10 digit number', {
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
        }

        if (e.target.name === 'pincode') {
            console.log(e.target.value);

            if (e.target.value.length == 6) {
                // console.log(pincode)
                let pins = await fetch(`/api/pincode`)
                let pinJson = await pins.json()
                console.log(pinJson)
                if (Object.keys(pinJson).includes(e.target.value)) {
                    console.log(pinJson[e.target.value][0])
                    console.log(pinJson[e.target.value][1])
                    setInfo({ ...info, city: pinJson[e.target.value][1], state: pinJson[e.target.value][0], pincode: e.target.value })
                }

            }
            else {
                setInfo({ ...info, city: '', state: '' })
            }
        }
        console.log(info)
    }


    const makePayment = async () => {

        console.log("here...");
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
            console.log(options);
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
            // document.body.appendChild(script);

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
        <form className='container m-auto' >
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


            <h1 className='font-bold text-3xl text-center my-8'>Checkout</h1>
            <h2>1. Delivery Details</h2>
            <div className="mx-auto flex ">
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                            Name
                        </label>
                        <input
                            onChange={handleChange}
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>

                </div>
                {user?.email ? <div className="px-2 w-1/2">
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

                </div> : <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                            Email
                        </label>
                        <input
                            onChange={handleChange}
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>

                </div>}

            </div>

            <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Address
                </label>
                <textarea
                    onChange={handleChange}
                    id="address"
                    name="address"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-12 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
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
                            name="phone"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>

                </div>
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                            city
                        </label>
                        <input
                            onChange={handleChange}
                            type="text"
                            id="city"
                            value={info.city}
                            readOnly
                            name="city"
                            className="w-full bg-gray-200 cursor-not-allowed rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>


                </div>
            </div>
            <div className="flex">
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                        <label htmlFor="state" className="leading-7 text-sm text-gray-600">
                            State
                        </label>
                        <input
                            onChange={handleChange}
                            type="text"
                            readOnly
                            id="state"
                            value={info.state}
                            name="state"
                            className="w-full bg-gray-200 cursor-not-allowed rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                            name="pincode"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>


                </div>
            </div>
            <h2>2. Review cart item </h2>
            <div className="sidbar  p-4  py-10  w-[100%] bg-gray-200 z-20">
                <ol className='list-decimal text-semibold text-black'>
                    {Object.keys(cart).length === 0 && <li className='my-4 font-normal'>Cart is empty</li>}
                    {Object.keys(cart).map((k) => {
                        const { name, price, qty, size, varient } = cart[k]
                        return (
                            <li className='flex my-2 text-lg' key={k}>
                                <div className='w-1/3 '>{name} </div>
                                <div className='flex items-center justify-center w-1/3 '><AiOutlineMinusCircle className='mx-1 cursor-pointer' onClick={() => { removeFromCart(k, 1, price, name, size, varient) }} />
                                    {qty}  <AiOutlinePlusCircle className='mx-1 cursor-pointer' onClick={() => { addToCart(k, 1, price, name, size, varient) }} /> </div>
                            </li>)
                    })}
                    <span>the total amount is {subTotal}</span>
                </ol>
                <Link href=""><a >
                    <button disabled={info.disbled} onClick={makePayment} className="disabled:bg-green-200 mx-4 px-1 py-1 w-max rounded-md my-5  bg-green-500">Pay Now</button>
                </a></Link>
            </div>
        </form>
    )
}

export default checkout