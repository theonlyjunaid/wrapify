import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Example() {
    const router = useRouter()
    useEffect(() => {
        if (localStorage.getItem('token')) {
            router.push('/')
        }
    }, [])
    const [email, setEmail] = useState('')
    const handleChange = async (e) => {
        const { name, value } = e.target
        if (name === "email") {

            setEmail(value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { email }
        const fetching = await fetch(`/api/forgotpassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const json = await fetching.json()
        console.log(json)
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
            }, 3000);
        } else {
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
                    Forgot your password?
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
                      
                        <Link legacyBehavior href="/login"><a><p className="text-sm text-gray-500 flex justify-end cursor-pointer hover:text-gray-800">Sign in</p></a></Link>
                        <button
                            type="submit"
                            className="bg-black text-white p-2 rounded-lg hover:text-gray-300 hover:bg-gray-800"
                        >
                            Forgot your password
                        </button>
                    </form>
                    <div>
                        <p className="text-sm text-gray-500">Don't have an account? <Link legacyBehavior href="/signup"><a><span className="text-black cursor-pointer hover:text-gray-800">Sign up</span></a></Link></p>
                    </div>

                </div>
            </div>
        </>
    )
}
