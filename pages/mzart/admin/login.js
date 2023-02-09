import { useState, useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from "next/router";
import Link from "next/link";


export default function Example() {
    const router = Router;
    const [password, setPassword] = useState('')

    const handleChange = async (e) => {
        const { name, value } = e.target
       
        if (name === "password") {
            setPassword(value)
        }
    }
    useEffect(() => {
        if (localStorage.getItem('adminkaraaj')) {

            router.push('/')
        }
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        // const data = {  password }
        const res = await fetch(`/api/adminlogin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({password: password })
        })
        const json = await res.json()
        console.log(json)

// if(password === process.env.ADMIN){
//     localStorage.setItem('adminkaraaj', JSON.stringify({ token: 'junaidbhai'+process.env.ADMIN+'baburao'}));
// }

        // console.log(json.email)
        // console.log(json.token)

        setPassword("")
        if (json.success) {
            localStorage.setItem('admin', JSON.stringify({ token: json.token }));
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
                router.push('/mzart/admin/firozandjunaid')
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



            <div className="h-[500px] text-center pt-20">
              

                <div className=" w-full ">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 w-80 my-10 mx-auto">

                       
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
                            Login
                        </button>
                    </form>
               

                </div>
            </div>
        </>
    )
}
