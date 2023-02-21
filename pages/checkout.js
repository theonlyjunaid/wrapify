import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pincode from '../pincode.json'
import { ProductReview2, ProductReview1 } from '../components/checkout/ProductReview'
import CheckoutDetails from '../components/checkout/CheckoutDetails'
// import mongoose from 'mongoose'
// import Pincodes from '../model/Pincodes'

const checkout = ({ cart, addToCart, removeFromCart, clearCart, subTotal, qty, user, setSubTotal }) => {
    // console.log(pincodeList)
    // console.log(pincode.includes(110001))
//checkif pincode is valid
const router = useRouter()

  
const [pincheck, setPincheck] = useState(2000)
let pincodeList = []

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
        disabled: false
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
            if(subTotal === 0){
                // router.push('/')

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
     
        if (e.target.name === 'pincode') {
          if(e.target.value >100000&&e.target.value<999999){   
            pincode.map((pin,index) => {
              pincodeList.push(pin.Pincode)
                
                if (pin.Pincode == e.target.value) {
                    console.log(pin)
                    console.log(pin.Pincode)
                    setPincheck(pin.Pincode)

                    if(city!=pin.City || state!=pin.State){
                        console.log(pin.City)
                        console.log(pin.State)
                        setInfo({ ...info, city: pin.City, state: pin.State, pincode: e.target.value })
                    }
                }else{
                    console.log("pincode")
                    return
                }

            })
          

            // console.log(pincodeList)
            // console.log(pincodeList.includes(e.target.value))
            // if (pincodeList.find(e.target.value)) {
            //     console.log(e.target.value)
            // }
         
            // if (pincode.includes(e.target.value)) {
            //     console.log(e.target.value)
            // }
                 }else if(e.target.value>999999){
                    console.log("invalid pincode")
                    toast.error('invalid pincode', {
                        position: "top-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    
                    // setInfo({ ...info, pincode: e.target.value })

                 }
               
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

//         if (e.target.name === 'pinode') {
//             console.log(e.target.value);
// setInfo({ ...info, pincode: e.target.value })
//             if (e.target.value.length == 6) {
//                 // console.log(pincode)
//                 let pins = await fetch(`/api/pincode`)
//                 let pinJson = await pins.json()
//                 // console.log(pinJson)
//                 if (Object.keys(pinJson).includes(e.target.value)) {
//                     // console.log(pinJson[e.target.value][0])
//                     // console.log(pinJson[e.target.value][1])
//                     setInfo({ ...info, city: pinJson[e.target.value][1], state: pinJson[e.target.value][0], pincode: e.target.value })
//                 }

//             }
//             else {
//                 setInfo({ ...info, city: '', state: '' })
//             }
//         }
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
        )
        console.log(data);
        // console.log(data);
        // console.log(data.success);
        if (data.success) {
            var options = {
                key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
                name: "mzart",
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
        <div className='' >
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


            {/* <h1 className='font-bold text-3xl text-center mt-8 mb-3'>Checkout</h1> */}
            <ProductReview2 cart={cart} subTotal={subTotal} />

            <div className='md:flex  '>
             <CheckoutDetails info={info} setInfo={setInfo} handleChange={handleChange} makePayment={makePayment} user={user} />
              
                <ProductReview1 cart={cart} subTotal={subTotal}/>
     
            </div>

        </div>
    )
}

export default checkout


// export async function getServerSideProps(context) {
//     if (!mongoose.connections[0].readyState) {
//         await mongoose.connect(process.env.MONGO_URI)
//     }

// const pincode = await Pincodes.find()
//     // const order = await Order.findById(context.query.id);
//     return {
//         props: {
//             pincodeList: JSON.parse(JSON.stringify(pincode)),
//         },
//     };
// }