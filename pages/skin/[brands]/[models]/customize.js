import React, { useState, useEffect } from 'react'
import Product from '../../../../model/Product';
import Link from 'next/link'
import mongoose from 'mongoose';
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { theme } from '../../data/theme'
// import Theme from '../../../../../../components/Item/Theme'

export default function Slug({ cart, addToCart, removeFromCart, clearCart, subTotal, buyNow, products }) {
    const theme = {
        'PLain Colours': [{
            name: 'green',
            URL: 'https://dictionary.cambridge.org/images/thumb/green_noun_001_07350.jpg?version=5.0.252'
        },
        {
            name: 'gray',
            URL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSDxIVFRUVFRUVFRUVFRUVFRUVFRcXFxUVFRUYHSggGB0lHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDisZFRkrKy0tKy0rKzc3LS0tKzctLTctKy0rLTctLTctLTc3Ny03Ny0tLSstLTctLSstKys3Lf/AABEIAOEA4QMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDB//EABgQAQEBAQEAAAAAAAAAAAAAAAABEQJB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD0+mqiKpKEEKkWmAkBcAoAoCiCKgKigIEASgAWhQVBUEIqKCJ01WaCYGAOiKgoqRRFRUFAWCIRcQFUSAAAWpVMBCFICCpAAAEVICgoIzW2egZ0AHSpjSAAQAKAogAoARUAVNWsgoSlBLQUEDVBEVKAGgAQBWeliUGRcAbpVqUEUUEABQgAJVAFQFQKCAAAAAAgAItEBdIRQQWpQZwAHRAAWoAUgQBQAIQBQAEtAECoDSEUBKtQEgACLqAsWJABOqtZoAAN0EBYRFAFQBTABUABUAqKkARUAxpItBNRYAYlCggKBqxnFBWbGkBEQB0qVamAsNDAILgACwEAAhRQZo1jIBixMAihQGVTAAoCAAKkWArNrVYoAgDoCCqqKAigioKCCgAIBUDQNLQ0FQ0gAAIAAQAIrMUCs1pKDIaA6VFoArKgACrFSAgtqAAJQRQBFoABDQEwoAi6gL1UACCyIC6z1VrPVBAUV1qLUESgAoAKIAoQgCKgBSJQVABUUBDSoAqAKhQFtQAGK1UoJougOvTK1AVIAKIAsIEACgKhCgkABRADQABUAQAEFoEMF0GUqs0EUAdUqpQA0ABRRLQEUQBSoAAAAAiiAKgAACKlUBDTQKy1WaAMqDshUqKLEFFKICiRQCAIqVUACJQUQAoABRQRFATBUBFRQRlaAyoIOqU1BVIzaoKIAsWIqogAqwTTQVFKCACCACiKCaUqUF00xAC0qaAlKgINCK2IAAALEAaiACNRBQABaUAKgIACoU8AU9UASoAiJQAqAKAIj//Z'
        }]
    }

    const [color, setColor] = useState('plain')
    console.log(products)
    let mobile = products.filter(product => product.color === color)
    // for (let i = 0; i < products.length; i++) {
    //     console.log(products[i].name)
    // }
    console.log(mobile)
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
                            <img src={mobile[0].img} alt="" className='w-auto max-h-[100%] max-w-[100%] object-center' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-1/2 pt-6 md:pt-0  md:mt-6 lg:mt-0 text-center  md:text-left   md:px-20   bg-gray-100'>

                    <h1 className='text-2xl font-mono'>Configure Your Design</h1>

                    <h2 className='font-semibold text-xl'>DESIGN</h2>
                    <h3>{color.toUpperCase()}</h3>
                    <div>

                        {
                            Object.keys(theme).map((key, index) => {
                                console.log(key)
                                return (
                                    <div className=' justify-center items-center'>
                                        <h2 className='flex justify-start mx-14 py-2'>{key}</h2>
                                        <div className='grid grid-cols-5 px-14 mb-3'>
                                            {
                                                theme[key].map((item, index) => {
                                                    return (
                                                        <div key={index} onClick={() => setColor(item.name)}>
                                                            <img src={item.URL} alt="" className='w-[50px] h-[50px] rounded-full' />
                                                        </div>
                                                    )
                                                }
                                                )
                                            }
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }

                        <div>
                            <h2 className='font-semibold text-xl'>PRICE</h2>
                            <h3 className='font-semibold text-xl'>rs {mobile[0].price}</h3>
                            <div>Buy Now</div>
                        </div>
                    </div>



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