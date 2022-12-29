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
    <div className='flex w-4/5 mx-auto max-h-screen min-h-[600px] py-10'>
        <div className='w-1/2  flex justify-center'>

<Image src={item?.img} width={360} height={430} alt='image'  className='w-auto h-auto'/>
        </div>
<div className='w-1/2 px-2 pt-10 '>


Models
<div className='flex'>
    
<select onChange={(e)=>{
    setBrand(e.target.value)

}}

                  className='bg-[#e7e7e7]  h-max mr-3 p-1 rounded-md w-1/2 py-3'
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
                      className='bg-[#e7e7e7]  h-max  p-1 rounded-md  w-1/2 py-3' 
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
