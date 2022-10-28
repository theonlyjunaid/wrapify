import Router from 'next/router'
import React, { useState, useEffect } from 'react'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyAccount = ({ user }) => {
    // console.log(user.value)
    const router = Router;

    const [info, setInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        password: '',
        cpassword: '',
    })
    useEffect(() => {
        if (!user) {
            router.push('/')
        } else {
            setInfo({ ...info, email: user.email })
            router.push('/myaccount')
        }

    }, [])

    const handleChange = async (e) => {

        setInfo({ ...info, [e.target.name]: e.target.value })

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
        // console.log(info)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = { name: info.name, email: info.email, phone: info.phone, address: info.address, pincode: info.pincode, token: user.value }
        let fetching = await fetch(`/api/updateuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        let json = await fetching.json()
        console.log(json)
    }
    const handlePassword = async (e) => {
        e.preventDefault()
        let data = { password: info.password, token: user.value, cpassword: info.cpassword }
        let fetching = await fetch(`/api/updatepassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        let json = await fetching.json()
        console.log(fetching)
        console.log(json)
    }

    return (
        <div className='container px-8 py-9 mx-auto  bg-green-200 '>
            <h1 className='text-2xl text-center font-bold'>My Account</h1>
            <h2 className='text-xl'>Update Your Account</h2>
            <form className='container m-auto' >
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

                <div className=" mb-4 flex items-center ">
                    <Link href="" ><a><button onClick={handleSubmit} className='text-3xl bg-green-500 hover:bg-green-800 py-1 px-3 rounded-lg transition-all duration-300' type='submit'>Update Address</button></a></Link>
                </div>
            </form>
            <h2 className='my-8 text-lg font-semibold'>Change Your Password</h2>
            <form>


                <div>
                    <div className="grid grid-cols-2 gap-10">

                        <div className=" mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                                New Password
                            </label>
                            <input
                                onChange={handleChange}
                                type="text"
                                id="password"
                                name="password"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className=" mb-4 ">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                                Confirm New Password
                            </label>
                            <input

                                onChange={handleChange}
                                type="password"
                                id="cpassword"
                                name="cpassword"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className=" mb-4 flex items-center ">
                            <Link href="" ><a><button onClick={handlePassword} className='text-3xl bg-green-500 hover:bg-green-800 py-1 px-3 rounded-lg transition-all duration-300' type='submit'>Change Password</button></a></Link>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default MyAccount