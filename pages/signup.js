import { useState, useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import {useRouter} from "next/router";


export default function Example() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleChange = async (e) => {
        const { name, value } = e.target
        if (name === "name") {
            setName(value)
        }
        if (name === "email") {
            setEmail(value)
        }
        if (name === "password") {
            setPassword(value)
        }
    }
    let router = useRouter();
    useEffect(() => {
        if (localStorage.getItem('myuser')) {
            router.push('/')
        }
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { name, email, password }
        const res = await fetch(`/api/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const json = await res.json()
        // console.log(json)
        setEmail("")
        setName("")
        setPassword("")
        if (json.success) {
        toast.success(json.message, {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setTimeout(() => {
            router.push('/login')
        }, 1500);
    }
    else {
        toast.error(json.message, {
            position: "top-left",
            autoClose: 3000,
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
                    Create Your account
                </h1>

                <div className=" w-full ">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 w-80 my-10 mx-auto">

                        <input
                            onChange={handleChange}
                            id="text"
                            name="name"
                            type="text"
                            value={name}
                            autoComplete="name"
                            required
                            className="border-2 border-gray-300 p-2 rounded-lg"
                            placeholder="Your Name"
                        />
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
                        <button
                            type="submit"
                            className="bg-black text-white p-2 rounded-lg hover:text-gray-300 hover:bg-gray-800"
                        >
                            Sign up
                        </button>
                    </form>
                    <div>
                        <p className="text-sm text-gray-500">Already have an account? <Link href="/login"><span className="text-black cursor-pointer hover:text-gray-800">Sign in</span></Link></p>
                    </div>

                </div>
            </div>
        </>
    )
}
