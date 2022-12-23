import { useState, useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from "next/router";
import Link from "next/link";


export default function Example() {
    const router = Router;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleChange = async (e) => {
        const { name, value } = e.target
        if (name === "email") {
            setEmail(value)
        }
        if (name === "password") {
            setPassword(value)
        }
    }
    useEffect(() => {
        if (localStorage.getItem('myuser')) {
            router.push('/')
        }
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { email, password }
        const res = await fetch(`/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const json = await res.json()


        console.log(json.email)
        console.log(json.token)
        setEmail("")
        setPassword("")
        if (json.success) {
            localStorage.setItem('myuser', JSON.stringify({ email: json.email, token: json.token }));
            toast.success('Login Success', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                router.push('/')
            }, 1500);
        } else {
            toast.error(json.error, {
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


    return (
        <>
            <ToastContainer
                position="bottom-left"
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

        

            <div className="h-screen text-center pt-20">
                <h1 className="text-3xl font-semibold mt-20">
                    Login to your account
                </h1>

                <div className=" w-full ">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 w-80 my-10 mx-auto">

                        <input
                            onChange={handleChange}
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            className="border-2 border-gray-300 p-2 rounded-lg"
                            placeholder="Email address"
                        />
                        <input
                            onChange={handleChange}
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            className="border-2 border-gray-300 p-2 rounded-lg"
                            placeholder="Password"
                        />
                        <Link href="/forgot"><p className="text-sm text-gray-500 flex justify-end cursor-pointer hover:text-gray-800">forgot password?</p></Link>
                        <button
                            type="submit"
                            className="bg-black text-white p-2 rounded-lg hover:text-gray-300 hover:bg-gray-800"
                        >
                            Login
                        </button>
                    </form>
                    <div>
                        <p className="text-sm text-gray-500">Don't have an account? <Link href="/signup"><span className="text-black cursor-pointer hover:text-gray-800">Sign up</span></Link></p>
                    </div>

                </div>
            </div>
        </>
    )
}
