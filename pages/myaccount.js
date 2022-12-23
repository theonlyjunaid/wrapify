import Router from 'next/router'
import React, { useState, useEffect } from 'react'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import User from '../model/User'
import mongoose from 'mongoose'

const MyAccount = ({ user,userData }) => {
    console.log(userData)
    const router = Router;
    const [info, setInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        pincode: '',
        password: '',
        cpassword: '',
    })
    useEffect(() => {
        const myuser = JSON.parse(localStorage.getItem('myuser'));
        if (!myuser) {
            router.push('/')
        } else {
            setInfo({ ...info, email: user.email })
            router.push('/myaccount')
            fetchData(myuser.token)
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
            // email: userData.email,
            phone: userData.phone,
            address1: userData.address1,
            address2: userData.address2,
            city: userData.city,
            state: userData.state,

            pincode: userData.pincode,
        })
        // console.log(json)
        // console.log(user)
    }

    const handleChange = async (e) => {

        setInfo({ ...info, [e.target.name]: e.target.value })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = { name: info.name, email: info.email, phone: info.phone, address1: info.address1,address2:info.address2,   city: info.city, state: info.state,            pincode: info.pincode, token: user.value }
        let fetching = await fetch(`/api/updateuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        let json = await fetching.json()
        // console.log(json)
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
        // console.log(fetching)
        // console.log(json)
    }

    return (
        <div className='container px-8 py-9 mx-auto  '>
            <h1 className='text-2xl text-center font-bold mb-4'>My Account</h1>
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


                <h2>1. Account Info</h2>
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
                                name="name"
                                value={info.name}
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
                <h2 className='mt-4'>2. Delivery Details</h2>

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
                        // defaultValue={""}
                        placeholder="House No. , Street Name, Block"
                    />
                </div>
                <div className="relative px-2 mb-4">
                   
                    <textarea
                        onChange={handleChange}
                        id="address2"
                        name="address2"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-12 text-base outline-none text-gray-700 pt-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        // defaultValue={""}
                        value={info.address2}
                        placeholder="Locality , Landmark"
                    />
                </div>
                {/* <div className="flex">
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
                                name="city"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>

                    </div>
                    <div className="px-2 w-1/2">
                        <div className=" mb-4">
                            <label htmlFor="state" className="leading-7 text-sm text-gray-600">
                                state
                            </label>
                            <input
                                onChange={handleChange}
                                type="text"
                                id="state"
                                value={info.state}
                                name="state"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                    </div>
                </div> */}
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
             

<div className='px-2'>

                    <Link href="" ><button onClick={handleSubmit} className=' bg-black w-full px-2 flex items-center justify-center py-2 border rounded-lg text-lg text-white hover:bg-gray-800' type='submit'>Update Your Info</button></Link>
</div>

            </form>
            <h2 className='mt-6'>3. Change Your Password</h2>
            <form>



                    <div className="grid md:grid-cols-2 md:gap-10">

                        <div className="mb-2 md:mb-4">
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
                        <div className="mb-2 md:mb-4 ">
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

                <div className='py-1 mb-2 '>
                            <Link href="" ><button onClick={handlePassword} className=' bg-black w-full    px-2 flex items-center justify-center  py-2 border rounded-lg text-lg hover:bg-gray-800 text-white' type='submit'>Change Password</button></Link>
                        </div>


            </form>
         

        </div>
    )
}

export default MyAccount


export async function getServerSideProps({context}) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI);

    }
    // let user = await User.findOne({email: context.req.cookies.email})

    let userData = await User.findOne({}).lean();
    return {
        props: { userData: JSON.parse(JSON.stringify(userData)) },
    }
}