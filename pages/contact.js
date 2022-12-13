import React,{useState} from 'react'

const contact = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const changeHandler = (e) => {
if(e.target.name === 'email'){
    setEmail(e.target.value)
}
if(e.target.name === 'name'){
    setName(e.target.value)
}
if(e.target.name === 'phone'){
    setPhone(e.target.value)
}
if(e.target.name === 'message'){
    setMessage(e.target.value)
}
    }
    const contactUs = async () => {
        fetch('/api/contactus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                name: name,
                phone: phone,
                message: message
            }),
        }).then((r) => r.json()).then((data) => {
            console.log(data)
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        contactUs()
    }

    return (
        <div className='flex justify-center '>
            <div className='mx-2 my-6 md:w-1/2 '>
                <h2 className="tracking-widest text-center font-mono text-3xl">
Contact Us               
 </h2>
                <form onSubmit={submitHandler} className=" items-center gap-2  mt-3">
                    <div>
                        <input type="email" value={email} onChange={changeHandler} name="email" id="email" placeholder="Enter your email" className="w-full  rounded border-[1.7px] border-black  focus:outline-none focus:border-indigo-500 text-base mb-2  px-4 py-2" />
                    </div>
                    <div>
                        <input type="text" value={name} onChange={changeHandler} name="name" id="name" placeholder="Enter your name" className="w-full  rounded border-[1.7px] border-black  focus:outline-none focus:border-indigo-500 text-base mb-2  px-4 py-2" />
                    </div>
                    <div>
                        <input type="text" value={phone} onChange={changeHandler} name="phone" id="phone" placeholder="Enter your phone" className="w-full  rounded border-[1.7px] border-black  focus:outline-none focus:border-indigo-500 text-base mb-2  px-4 py-2" />
                    </div>
                    <div>
                        <textarea type="text" value={message} onChange={changeHandler} name="message" id="message" placeholder="Enter your message" className="w-full  rounded border-[1.7px] border-black  focus:outline-none focus:border-indigo-500 text-base mb-2  px-4 py-2" rows={10} />
                    </div>
                    <div className="flex justify-center">
                        <button className="text-white w-full md:w-fit border-0 py-2 px-8 focus:outline-none bg-black rounded text-lg">
                            SUBMIT    </button>

                    </div>
                </form>
               
            </div>
        </div>
    )
}

export default contact