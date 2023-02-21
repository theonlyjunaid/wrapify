import React, { useState, useEffect } from 'react'
import Product from '../../../../model/Product';
import Link from 'next/link'
import mongoose from 'mongoose';
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Themes from '../../../../components/Item/Themes';

// import { theme } from '../../data/theme'
// import Theme from '../../../../../../components/Item/Theme'

export default function Slug({ products,  addToCart, buyNow, cart, size, setSize }) {
    console.log(products)
    useEffect(() => {
        setSize('Choose')
    }, [])
    const theme = {
        'Space':[{
            name: 'astro',
            URL: 'https://ik.imagekit.io/wrapmydevice1/mobile/apple/13series/13mini/astro.webp'
        },
        {
            name: 'galaxy',
            URL: 'https://ik.imagekit.io/wrapmydevice1/mobile/apple/13series/13mini/galaxy.webp'
        }
    ],
    'Super':[{    
        name: 'venom',
        URL: 'https://ik.imagekit.io/wrapmydevice1/mobile/apple/13series/13mini/venom.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676310472431'
    },
    {
        name: 'tony',
        URL: 'https://ik.imagekit.io/wrapmydevice1/mobile/apple/13series/13mini/tony.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676310472215'
    }
  
],
    'Electric': [{
        name: 'circuit',
        URL: 'https://ik.imagekit.io/wrapmydevice1/mobile/apple/13series/13mini/circuit.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676310469106'
    },
    {
        name: 'blueblack',
        URL: 'https://ik.imagekit.io/wrapmydevice1/mobile/apple/13series/13mini/blueblack.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676310469520'
    },
    {
        name: 'greenblack',
        URL: 'https://ik.imagekit.io/wrapmydevice1/mobile/apple/13series/13mini/greenblack.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676310469524&tr=w-180%2Ch-180'
    },
    
]
    ,
        'PLain Colours': [{
            name: 'green',
            URL: 'https://dictionary.cambridge.org/images/thumb/green_noun_001_07350.jpg?version=5.0.252'
        }

    ]
        

    }

    const [color, setColor] = useState('plain')
    // console.log(products)
    let mobile = products.filter(product => product.color === color)
    // for (let i = 0; i < products.length; i++) {
    //     console.log(products[i].name)
    // }
    // console.log(mobile)
    // const destinationback = "/skin/" + products.brand + "/" + products.name.split(" ").join("-").toLowerCase();


    // const { query } = useRouter()
    // const { brands, models } = query
    // // console.log(mobile[brands].name + " " + mobile[brands].brands[models.split("-").join(" ")].name)
    // // const ShownItem = useContext(ItemContext)
    // const [baba, setBaba] = useState('hidden');
    // const [skine, setSkine] = useState(mobile[brands].model[models.split("-").join(" ")]?.skin['plain']);
    // useEffect(() => {
    //     setSkine(mobile[brands].model[models.split("-").join(" ")]?.skin['plain'])
    // }, [query]);
    // console.log(brands + " " + models + " " + skine.split("/").pop().split(".")[0])
    // console.log(mobile[brands].model[models.split("-").join(" ")].skin['plain'])
    return (

        <section className='md:flex items-stretch w-full outline-none min-h-[93vh]'>
       
            <div className='w-full md:w-1/2 overflow-y-auto flex justify-self-stretch h-[70vh] md:h-screen md:max-h-[200vh] my-0 mx-auto bg-white'>
                <div className='w-[100%]  md:h-screen  flex justify-center items-center'>
                    <div className="w-[85%] h-[80%]">
                        <div className='w-[100%] h-[100%] relative flex justify-center items-center '>
                            <img src={mobile[0]?.img} alt="" className='w-auto max-h-[100%] max-w-[100%] object-center' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-1/2 pt-6 md:pt-0  md:mt-6 lg:mt-0 text-center  md:text-left   md:px-20   bg-gray-100'>

                    <h1 className='text-2xl font-mono md:text-3xl font-base md:mt-20 md:mb-3'>Configure Your Design</h1>

                    {size == 'Choose' && <div>
                    <h2 className='font-semibold text-xl mt-7'>DESIGN</h2>
                    <h3 className='md:hidden'>{color.toUpperCase()}</h3>
            
<Themes theme={theme} setColor={setColor} />
                <div className="md:flex  justify-center items-center md:justify-between my-5 md:mt-10">
                    <div className=''> <span className='text-lg md:text-xl font-mono line-through mx-1'>₹{200 + mobile[0].price}</span><span className='text-2xl md:text-3xl font-semibold py-2'> ₹{mobile[0].price}</span>
                    </div>
                        {color !== 'plain' && <div className='my-6 md:my-0 flex justify-around px-5 items-center'>
                        <button className='px-8  text-lg font-extralight py-2 bg-white hover:bg-slate-200 border-slate-300 border rounded-3xl md:w-[200px]' onClick={() => setSize('Choosing')}>Buy Now</button>
                    </div>}
                </div>
                </div>}
                {
                    size !== 'Choose' && color!=='plain'&&<div className='pb-10 text-left'>
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
                            Customize Your Size
                        </h1>

                        <div className='w-full border border-black rounded-md my-5'>
                            <div className={`h-[100px] md:h-[120px] flex  border-b border-b-black gap-3 cursor-pointer ${size === 'backfit' ? 'bg-[#ffa825]' : ""}`} onClick={() => setSize('backfit')}>
                                <img src="/icons/backfit.webp" alt="" className='h-full' />
                                <div className='py-1'>
                                    <h1 className='text-md md:text-lg font-semibold'>Back Fit</h1>
                                    <p className='text-sm md:text-md font-extralight'>- Cover Your Back panel</p>
                                    <p className='text-sm md:text-md font-extralight'>- Very Easy to apply</p>
                                </div>
                            </div>
                            <div className={`h-[100px] md:h-[120px] flex  gap-3 cursor-pointer ${size === 'fullcover' ? 'bg-[#ffa825]' : ""}`} onClick={() => setSize('fullcover')}>
                                <img src="/icons/fullcover.webp" alt="" className='h-full' />
                                <div className='  py-auto'>
                                    <h1 className='text-md md:text-lg font-semibold'>Full Coverage</h1>
                                    <p className='text-sm md:text-md font-extralight'>- Cover Your Back panel</p>
                                    <p className='text-sm md:text-md font-extralight'>- Cover Your Side Panel</p>
                                    <p className='text-sm md:text-md font-extralight'>- Hard to apply</p>

                                </div>
                            </div>

                        </div>


                        {size !== 'Choosing' && size !== 'Choose' && <Link legacyBehavior  href="/cart"><a><div className='w-full flex justify-around px-5 items-center'>
                            {/* <button className='px-8 text-lg font-extralight py-2 bg-white hover:bg-slate-200 border-slate-300 border rounded-3xl' onClick={() => setSize('Choosing')}>Buy Now</button> */}
                            <button className='px-8 text-3xl font-semibold py-2 hover:bg-[#f49f1c] bg-[#ffa825] rounded-3xl' onClick={() => { addToCart(mobile[0].slug + "-" + size, 1, mobile[0].price, mobile[0].name + " (" + mobile[0].color + "/" + size + ")", size, mobile[0].color, mobile[0].img) }}>Add to Cart</button>
                        </div></a></Link>}



                    </div>
                }


            </div>

        </section>

    )
}
//         <div>
// {/* <div onClick={()=>setColor('green')}>green</div>
// <div onClick={()=>setColor('gray')}>gray</div> */}
// <section className='flex'>
// <div className='h-[70vh]'>
// <img src={mobiles[0].img} alt="" className='h-full' />

// </div>
{/* <div className='flex gap-4 p-10'>
// {
//     theme['PLain Colours'].map((item, index) => {
//         return (
//             <div key={index} onClick={()=>setColor(item.name)}>
//                 <img src={item.URL} alt="" className='w-[50px] h-[50px]' />
//             </div>
//         )
//     }
//     )
// }
            </div>
</section> */}







//     )

// }
// export async function getServerSideProps(context) {
//     const res = await fetch('http://localhost:3000/api/mobile')
//     const mobile = await res.json()
//     return {
//         props: {
//             mobile
//         }
//     }
// }




// get the data from the server
export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI);
    }
    let model = context.query.models.split('-').join(' ')
    let brand = context.query.brands
    let products = await Product.find({ name: model, brand: brand }).lean();
    return {
        props: { products: JSON.parse(JSON.stringify(products)) },
    }
}