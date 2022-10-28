// import Image from 'next/image'
export default function ItemComponent(props) {
    // const [iphone, setIphone] = useState("");
    // const [iphonepic, setIphonepic] = useState("");
    // useEffect(() => {
    //     setIphone('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/iPhone-12-Color__Black.png?v=1662038653'); setIphonepic('https://cdn.shopify.com/s/files/1/0602/9334/9613/products/iPhone-12-back.png?v=1662038647')
    // }, []);

    return (
        <>
            <div className='w-full  md:w-[500px]  flex justify-center items-center p-10'>
                <img src={props.skin} alt="" className='w-[250px] md:w-auto' />
            </div>
            {/* <div>
                <img src={props.phone} alt="Cinque Terre" className='w-[420px] ' />

                <img src={props.image} alt="Cinque Terre" style={{ webkitMaskImage: "url(" + props.skin + ")", WebkitMaskRepeat: 'no-repeat' }} className=' scale-50' />
            </div> */}
            {/* <div style={{ backgroundImage: "url(" + props.phone + ")", backgroundRepeat: 'no-repeat' }} className='-ml-[50%] -mr-[50%] -mb-[50%]   md:m-0 scale-[50%]  md:scale-90 -mt-[55%] border border-black'>
                <Image src={props.image} alt="Cinque Terre" style={{ webkitMaskImage: "url(" + props.skin + ")", WebkitMaskRepeat: 'no-repeat' }} className='h-[790px] md:h-[820px] md:w-[720px] ' width={720} height={820} />

            </div> */}
            {/* <>
                <img
                    id="product-mock-up"
                    tabIndex={-1}
                    data-sizes="auto"
                    src={props.phone}
                    alt="iPhone 12 Pro Max"
                    srcSet={props.phone}
                />
                <div
                    className="absolute"
                    style={{
                        display: "block",
                        width: 761,
                        height: 761,
                        maxWidth: "100%",
                        background:
                            `url(${props.Image})`,
                        WebkitMaskImage:
                            `url(${props.skin})`,
                    }}
                />
            </> */}

            {/* <Image src={props.phone} alt="Cinque Terre" width={500} height={500} /> */}
        </>
    )
}
