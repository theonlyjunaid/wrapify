
// import { useRouter } from 'next/router'
// import { useState, useEffect } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const Post = ({ cart, addToCart, removeFromCart, clearCart, subTotal, buyNow }) => {
//     // console.log(cart, addToCart, removeFromCart, clearCart, subTotal)
//     const router = useRouter()
//     const { brands, models, item } = router.query
//     // console.log(router.query)
//     const [pin, setPin] = useState()
//     let data

//     const getmobile = async () => {
//         const res = await fetch(`/api/mobile`)
//         data = await res.json()
//         // data = data['apple'].model['iphone 14 pro max'].skin['plain']
//         // console.log(data)
//     }
//     const [mobile, setMobile] = useState('/mobile/skin/apple/14series/14promax/plain.webp')
//     getmobile()
//     useEffect(() => {
//         // console.log(brands, models, item)
//         // data = data[brands]?.model[models]?.skin[item]
//         // setMobile(data[brands]?.model[models]?.skin[item])
//         console.log(data)
//     }, [router.isReady])

//     const [service, setService] = useState('null')
//     const checkServicebility = async () => {
//         toast.success('Your pincode is checking', {
//             position: "top-right",
//             autoClose: 2000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//         });

//         let pins = await fetch(`/api/pincode`)
//         let pinJson = await pins.json()
//         if (Object.keys(pinJson).includes(pin)) {
//             setService(true)
//             toast.success('Your pincode is servicable', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//             });
//         } else {
//             setService(false)
//             toast.warn('Your Pincode is not servisable', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//             });
//         }


//     }
//     const onPinChange = (e) => {
//         setPin(e.target.value)
//     }



//     return (
//         <section className="text-gray-600 body-font overflow-hidden">
//             <ToastContainer
//                 position="top-right"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="light"
//             />
//             {/* Same as */}
//             <ToastContainer />
//             <div className="container px-5 py-24 mx-auto">
//                 <div className="lg:w-4/5 mx-auto flex flex-wrap">
//                     <img
//                         alt="ecommerce"
//                         className="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded"
//                         src={mobile}
//                     />
//                     <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//                         <h2 className="text-sm title-font text-gray-500 tracking-widest">
//                             BRAND NAME
//                         </h2>
//                         <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//                             The Catcher in the Rye
//                         </h1>
//                         {/* <div className="flex mb-4">
//                             <span className="flex items-center">
//                                 <svg
//                                     fill="currentColor"
//                                     stroke="currentColor"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     className="w-4 h-4 text-indigo-500"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                                 </svg>
//                                 <svg
//                                     fill="currentColor"
//                                     stroke="currentColor"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     className="w-4 h-4 text-indigo-500"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                                 </svg>
//                                 <svg
//                                     fill="currentColor"
//                                     stroke="currentColor"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     className="w-4 h-4 text-indigo-500"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                                 </svg>
//                                 <svg
//                                     fill="currentColor"
//                                     stroke="currentColor"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     className="w-4 h-4 text-indigo-500"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                                 </svg>
//                                 <svg
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     className="w-4 h-4 text-indigo-500"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                                 </svg>
//                                 <span className="text-gray-600 ml-3">4 Reviews</span>
//                             </span>
//                             <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
//                                 <a className="text-gray-500">
//                                     <svg
//                                         fill="currentColor"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         className="w-5 h-5"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
//                                     </svg>
//                                 </a>
//                                 <a className="text-gray-500">
//                                     <svg
//                                         fill="currentColor"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         className="w-5 h-5"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
//                                     </svg>
//                                 </a>
//                                 <a className="text-gray-500">
//                                     <svg
//                                         fill="currentColor"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         className="w-5 h-5"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
//                                     </svg>
//                                 </a>
//                             </span>
//                         </div> */}
//                         <p className="leading-relaxed">
//                             Fam locavore kickstarter distillery. Mixtape chillwave tumeric
//                             sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps
//                             cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
//                             tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean
//                             shorts keytar banjo tattooed umami cardigan.
//                         </p>
//                         <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//                             <div className="flex">
//                                 <span className="mr-3">Color</span>

//                                 <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"> </button>
//                                 <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"> </button>
//                                 <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"> </button>
//                             </div>
//                             <div className="flex ml-6 items-center">
//                                 <span className="mr-3">Size</span>
//                                 <div className="relative">
//                                     <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
//                                         <option>SM</option>
//                                         <option>M</option>
//                                         <option>L</option>
//                                         <option>XL</option>
//                                     </select>
//                                     {/* <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
//                                         <svg
//                                             fill="none"
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             className="w-4 h-4"
//                                             viewBox="0 0 24 24"
//                                         >
//                                             <path d="M6 9l6 6 6-6" />
//                                         </svg>
//                                     </span> */}
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex">
//                             <span className="title-font font-medium text-2xl text-gray-900">
//                                 $58.00
//                             </span>
//                             <button onClick={() => { addToCart('iphone-14-green', 1, 499, 'Iphone -11 - Green', 'Normal', 'Green'); console.log(cart) }} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
//                                 Add to cart
//                             </button>
//                             <button onClick={() => { buyNow('iphone-14-green', 1, 499, 'Iphone -11 - Green', 'Normal', 'Green') }} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
//                                 Buy Now                            </button>
//                             <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
//                                 <svg
//                                     fill="currentColor"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     className="w-5 h-5"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
//                                 </svg>
//                             </button>
//                         </div>
//                         <div className='flex m-10'>
//                             <input type="number" className='border-2' onChange={onPinChange} />
//                             <button onClick={checkServicebility} className="flex ml-1 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
//                                 Check
//                             </button>
//                         </div>
//                         {!service && service !== 'null' && <div className='text-red-600'>
//                             Sorry! This product is not available in your area.
//                         </div>}
//                         {service && service !== 'null' && <div className='text-green-600'>
//                             yes! This product is available in your area.
//                         </div>}
//                     </div>
//                 </div>
//             </div>
//         </section>

//     )
// }

// export default Post
import React, { useState, useEffect } from 'react'
import Product from '../../../../../model/Product';
import mongoose from 'mongoose';
import Link from 'next/link'
import { useRouter } from 'next/router'
import ItemComponent from '../../../../../components/Item/ItemComponent';


export default function Slug({ product, addToCart, buyNow,cart,size,setSize,prop }) {
    useEffect(() => {
        setSize('Choose')
    }, [])
    const destination = "/skin/" + product?.brand + "/" + product?.name.split(" ").join("-").toLowerCase() + "/customize";
    const destinationback = "/skin/" + product?.brand + "/" + product?.name.split(" ").join("-").toLowerCase();

    return (
        <div className='md:flex items-stretch w-full outline-none min-h-[93vh] '>
          
            {/* flex flex-col justify-center items-center */}
            <div className='w-full md:w-1/2 relative overflow-y-auto flex justify-self-stretch h-[70vh] md:h-screen md:max-h-[200vh] my-0 mx-auto bg-white'>
                <p className='absolute w-full text-center m-1 text-xs md:text-base'>
                    {
                        product?.img ? "" : "shown image is of iphone 14 not of " + product.name
                    }
                </p>
                <div className='w-[100%]  md:h-screen  flex justify-center items-center'>
                    <div className="w-[85%] h-[80%]">
                        <div className='w-[100%] h-[100%] relative flex justify-center items-center '>
                            <img src={product.img?pro
                                .img : prop?.img} alt="" className='w-auto max-h-[100%] max-w-[100%] object-center' />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className=" ">

                <ItemComponent
                    skin={product.img} />
            </div> */}
            <div className='w-full md:w-1/2 pt-6 md:pt-0  md:mt-6 lg:mt-0 text-center  md:text-left  place-content-center md:px-20   grid bg-gray-100'>
                {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    {product.category}
                </h2> */}
                {size === 'Choose' && <div><Link legacyBehavior href={destinationback}><a ><div className='p-auto  mb-5 hidden md:flex font-extralight'><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    style={{ fill: "rgba(30, 30, 80, 1)", transform: "", msfilter: "", marginRight: '10px' }}
                >
                    <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z" />
                </svg>
                    Back to All Skins</div></a></Link>
                    <h1 className="text-sm md:text-2xl title-font text-gray-500 tracking-widest">
                        {product.name}
                    </h1>
                    <h2 className='text-lg  font-serif  md:text-6xl font-bold tracking-widest mb-4 overflow-y-hidden  mt-2' >{product.color.toUpperCase()}</h2>
                    <p className='font-mono mx-20 md:mx-0 py-3 md:text-2xl  text-[#667085]  ' >{product.desc}</p>
                    <p className=' hidden md:flex w-full text-2xl text-[#667085] font font-ser font-sans font-extralight my-5  '>Whether it's the result of climate change or a nuclear winter, all-year snowfall is just around the corner. When that day comes, you'll need Arctic Camo if you want to continue hiding from your responsibilities.
                    </p>
                    <div className="md:flex  justify-center items-center md:justify-between my-5 md:mt-10">
                        <div className=''> <span className='text-lg md:text-xl font-mono line-through mx-1'>₹{200 + product.price}</span><span className='text-2xl md:text-3xl font-semibold py-2'> ₹{product.price}</span>
                        </div>
                        <div className='my-6 md:my-0 md:w-[70%] flex justify-around px-5 items-center'>
                            <button className='px-8  text-lg font-extralight py-2 bg-white hover:bg-slate-200 border-slate-300 border rounded-3xl' onClick={() => setSize('Choosing')}>Buy Now</button>
                            <Link legacyBehavior href={destination}><a><button className='px-8 text-lg font-extralight py-2 hover:bg-[#f49f1c] bg-[#ffa825] rounded-3xl'>Customize</button></a></Link>
                        </div>
                    </div>
                </div>}
                {
                    size !== 'Choose' && <div className='pb-10 text-left'>
                        <div className='p-auto mb-5 flex font-extralight  cursor-pointer ' onClick={() => setSize('Choose')} ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            style={{ fill: "rgba(30, 30, 80, 1)", transform: "", msfilter: "", marginRight: '10px' }}
                        >
                            <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z" />
                        </svg>
                            Back</div>
                        <h1 className="text-xl md:text-2xl font-mono font-semibold tracking-widest">
                            Select Your Size
                        </h1>

                        <div className='w-full border border-black rounded-md my-5'>
                            <div className={`h-[100px] md:h-[120px] flex  border-b border-b-black gap-3 cursor-pointer ${size === 'backfit' ? 'bg-[#ffa825]' : ""}`} onClick={()=>setSize('backfit')}>
                                <img src="/icons/backfit.webp" alt="" className='h-full' />
                                <div className='py-1'>
                                    <h1 className='text-md md:text-lg font-semibold'>Back Fit</h1>
                                    <p className='text-sm md:text-md font-extralight'>- Cover Your Back panel</p>
                                    <p className='text-sm md:text-md font-extralight'>- Very Easy to apply</p>
                                </div>
                            </div>
                            <div className={`h-[100px] md:h-[120px] flex  gap-3 cursor-pointer ${size === 'fullcover' ? 'bg-[#ffa825]' : ""}`} onClick={()=>setSize('fullcover')}>
                                <img src="/icons/fullcover.webp" alt="" className='h-full' />
                                <div className='  py-auto'>
                                    <h1 className='text-md md:text-lg font-semibold'>Full Coverage</h1>
                                    <p className='text-sm md:text-md font-extralight'>- Cover Your Back panel</p>
                                    <p className='text-sm md:text-md font-extralight'>- Cover Your Side Panel</p>
                                    <p className='text-sm md:text-md font-extralight'>- Hard to apply</p>

                                </div>
                            </div>

                        </div>


                        {size !== 'Choosing' && size !== 'Choose' && <Link legacyBehavior href="/cart"><a><div className='w-full flex justify-around px-5 items-center'>
                            {/* <button className='px-8 text-lg font-extralight py-2 bg-white hover:bg-slate-200 border-slate-300 border rounded-3xl' onClick={() => setSize('Choosing')}>Buy Now</button> */}
                            <button className='px-8 text-3xl font-semibold py-2 hover:bg-[#f49f1c] bg-[#ffa825] rounded-3xl' onClick={() => { addToCart(product.slug + "-"+size, 1, product.price, product.name + " (" + product.color+"/"+size+")",size, product.color, product.img,product.brand,product.desc,product.desc2) }}>Add to Cart</button>
                        </div></a></Link>}



                    </div>
                }

                {/* <div className='grid grid-cols-2 gap-5  place-content-center  md:left-0  px-4 md:px-0 pb-10'>
                    <div onClick={() => { addToCart(product.slug, 1, product.price, product.name + " " + product.color, product.size, product.color) }} className="flex justify-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded cursor-pointer">
                        Add to cart
                    </div>
                    <div onClick={() => { buyNow(product.slug, 1, product.price, product.name + " " + product.color, product.size, product.color) }} className="flex justify-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded cursor-pointer">
                        Buy Now
                    </div>
                </div> */}
            </div>

        </div>
    )
}
export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI);

    }
    let model = context.query.models.split('-').join(' ')
    let brand = context.query.brands
    let design = context.query.design
    let product = await Product.findOne({ name: model, brand: brand, color: design }).lean();
    let prop = await Product.findOne({ name: 'iphone 14', brand: 'apple', color: design }).lean();
 

    return {
        props: { product: JSON.parse(JSON.stringify(product)),prop:JSON.parse(JSON.stringify(prop)) },
    }
}




