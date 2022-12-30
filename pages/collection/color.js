import React ,{useState,useEffect}from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import mongoose from 'mongoose'
import Product from '../../model/Product'
import {mobile} from '../../data/mobile'

const color = ({products}) => {
    // console.log(mobile)
const [brand, setBrand] = useState('apple')
const [model, setModel] = useState('iphone 14')
const [size, setSize] = useState('backfit')
    // const router = useRouter()
    // const { color } = router.query
    // console.log(router)
    let item = products.find((item) => {
        return item.brand === brand && item.name === model
    })
    let models=products.filter((item)=>{
        return item.brand===brand
    })
    // console.log(products)
    let defaultModel=products.find((item)=>{
        return item.brand===brand && item.name===models[0].name
    })
    console.log(defaultModel.name)
    useEffect(() => {
        setModel(defaultModel.name)
    }, [brand])

  return (
      <div className='md:flex w-full lg:w-4/5 mx-auto min-h-[600px] max-w-[1280px] py-10'>
        <div className='xl:w-1/2  flex justify-center'>

<Image src={item?.img} width={360} height={360} alt='image'  className='w-[220px] sm:w-auto h-auto'/>
        </div>
          <div className=' mx-auto md:mx-0 sm:w-4/5 md:w-1/2 px-5 md:px-2 pt-10  '>
<div className='mx-auto md:mx-0 sm:w-full md:w-full px-5 md:px-2 pt-10    '>


Models
<div className=' xl:flex'>
    
<select onChange={(e)=>{
    setBrand(e.target.value)

}}

                  className='bg-[#e7e7e7]  h-max mr-3 p-1 my-2 w-full lg:w-4/5 rounded-md xl:w-1/2 py-3'
>
{
  Object.keys(mobile).map((it)=>{
      return (
          <option onClick={()=>{
              setBrand(it)
              keys=Object.keys(mobile[it])
          }}>
              {it}
              </option>
      )
  
    })
}
</select>
<select onChange={(e)=>{
    setModel(e.target.value)
}}
defaultValue={defaultModel.name}
                      className='bg-[#e7e7e7]  h-max  p-1 my-2 rounded-md lg:w-4/5  w-full  xl:w-1/2 py-3' 
>


{
    models.map((it) => {
        return (
            <option onClick={()=>{
                setModel(it.name)
            }}>
                {it.name}
                </option>
        )
    }
    )
}
</select>
              </div>
          </div>
              <div className='mx-auto md:mx-0 sm:w-full md:w-full max-w-[320px] px-5 md:px-2 pt-10    '>


                  Select Size
                  <div className=' xl:flex'>
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

                  </div>
              </div>


</div>


    </div>
  )
}

export default color

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI);

    }

    let products = await Product.find({ color: context.query.color, subCategory: context.query.subCategory }).lean();

    return {
        props: { products: JSON.parse(JSON.stringify(products))},
    }
}
