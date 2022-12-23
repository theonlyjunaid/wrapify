import React, { useState, useEffect } from 'react'
import ItemComponent from './ItemComponent'
// import { theme } from '../../data/design'
// import { useContext } from 'react'
// import { ItemContext } from '../../context/Itemcontext'
// import Link from 'next/link'
function Theme(props) {
    // console.log(props.mobile[props.model].name + " " + props.mobile[props.model].model[props.design.split("-").join(" ")].name)
    // // const ShownItem = useContext(ItemContext)
    // // const [baba, setBaba] = useState('hidden');
    // const [skine, setSkine] = useState(props.mobile[props.model]?.model[props.design.split("-").join(" ")]?.skin[props.itemview]);
    // useEffect(() => {
    //     setSkine(props.mobile[props.model]?.model[props.design.split("-").join(" ")]?.skin[props.itemview])
    // }, [props.query]);
    // const [task, setTask] = useState({
    //     'image': skine, 'phone': skine?.split("/").splice(0, 6), 'skin': props.query, 'model': props.model, 'design': props.design, 'price': props.mobile[props.model]?.model[props.design.split("-").join(" ")]?.price
    // });
    // const [tasks, setTasks] = useState([]);
    // useEffect(() => {
    //     if (localStorage.getItem("localTasks")) {
    //         const storedList = JSON.parse(localStorage.getItem("localTasks"));
    //         setTasks(storedList);
    //     }
    // }, [])

    // const addTask = (e) => {
    //     if (task) {
    //         const newTask = {
    //             'image': skine, 'name': props.mobile[props.model].name + " " + props.mobile[props.model].model[props.design.split("-").join(" ")].name, 'price': 249, skinColor: skine?.split("/").splice(6, 1).join("").split(".")[0]
    //         };
    //         setTasks([...tasks, newTask]);
    //         localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));

    //     }
    // };
    return (
        <div className=' md:flex p-4'>
            <ItemComponent
                skin={props.product.img} />
            <div>
                {/* <div>
                    {
                        Object.keys(props.mobile).map((mobi, index) => {
                            return (
                                <div key={index} className='flex'>
                                    <div>
                                        <div>
                                            <p className='text-2xl font-semibold my-1' onClick={() => baba === mobi ? '' : setBaba(mobi)}>{mobi.toUpperCase()}</p>

                                            <div>
                                                {
                                                    Object.keys(props.mobile[mobi].model).map((mobi2, index2) => {

                                                        return (
                                                            <div key={index2} className={baba === mobi ? '' : 'hidden'}>
                                                                <p onClick={() => {
                                                                    setSkine(props.mobile[mobi].model[mobi2].skin.plain);
                                                                }} className='bg-gray-400 cursor-pointer'>{props.mobile[mobi].model[mobi2].name}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div> */}
                {/* <div className='border border-black max-h-[300px] overflow-y-scroll'>
                    <h1 className='text-3xl  font-semibold mx-2'>Customize Skin</h1>
                    <div className=''>
                        {
                            Object.keys(theme).map((item, index) => {
                                return (
                                    <div className='my-4 mx-2' key={index}>
                                        <h1 className='text-2xl font-mono font-semibold'>{item}</h1>
                                        <div className='grid grid-cols-4 gap-6'>
                                            {
                                                theme[item].map((item, index) => {
                                                    return (
                                                        <div className=' ' key={index}>
                                                            <img src={item.URL} alt="" onClick={() => setSkine(skine?.split("/").splice(0, 6).join('/') + '/' + item.name.toLowerCase() + '.png')} className='w-[50px] h-[50px]' />

                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> */}
                {/* <div className='mt-1  gap-5'>
                    <div>
                        <Link legacyBehavior href="/cart"><a >   <h1 className='px-3 py-1 bg-gray-300 cursor-pointer text-center' onClick={() => {
                            addTask();
                        }}>Add to Bag</h1>
                        </a></Link>
                    </div>
                </div> */}
            </div>
        </div >
    )
}
export default Theme