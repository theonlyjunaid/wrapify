import React from 'react'

function Footer() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 bg-black text-white pt-4 items-center'>
            <div className='grid md:grid-cols-2'>
                <div className='text-center'>
                    <p className='text-lg font-semibold py-2 my-2  border-b '>Options</p>
                    <ul className=' px-8 '>
                        <li>Home</li>
                        <li>Products</li>
                        <li>Services</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='text-center my-4  px-20'>
                    <p className='text-lg font-semibold border-t md:border-0'>Profile</p>
                    <ul className=''>
                        <li> my profile </li>
                        <li> my Cart </li>
                        <li> my Orders </li>
                    </ul>
                </div>
            </div>

            <div>
                <div className='text-center text-3xl'>
                    How to Apply?
                </div>
            </div>

            <div>
                <div className='text-center py-2'>
                    <div className='text-3xl'>Socials</div>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer