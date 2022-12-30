import React,{useState} from "react";

import Link from "next/link";
const Footer2 = () => {
    const [email, setEmail] = useState("");
    const changeHandler = (e) => {
        setEmail(e.target.value);
    };
    const emailHandler = async () => {
        
        const res = await fetch("/api/newsletter", {
            method: "POST",
            body: JSON.stringify({ email }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        console.log(data);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        emailHandler()
        console.log(email);
    };


    return (
        <footer className=" body-font shadow-xl  border-t-2 border-black ">
            <div className="max-w-full level2:container   px-5 py-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap justify-between flex-wrap flex-col">
                <div >
                    <h2 className="tracking-widest font-mono text-2xl flex justify-center my-1  sm:justify-start">
                        SUBSCRIBE
                    </h2>
                    <form onSubmit={submitHandler} className="sm:flex items-center gap-2  mt-3">
                        <div className="flex justify-center my-1">
                            <input type="email" value={email} onChange={changeHandler} name="email" id="email" placeholder="Enter your email" className="w-full max-w-[400px] rounded border-[1.7px] border-black  focus:outline-none focus:border-indigo-500 text-base mb-2 level4:mb-0 px-4 py-2" />
                        </div>
                        <div className="flex justify-center mt-1">
                            <button className="text-white w-full max-w-[400px]  sm:w-fit border-0 py-2 px-8 focus:outline-none bg-black rounded text-lg">
                                SUBMIT    </button>

                        </div>
                    </form>
                    <p className="mt-2 text-gray-600 text-[8.5px] flex justify-center  sm:justify-start">
                        Subscribe to our newsletter to get the latest updates on our products and services.
                    </p>
                </div>
                <div className="text-center sm:text-start my-2 mt-4" >
                    <h2 className="tracking-wider font-mono text-sm text-gray-600">
                        Customer
                    </h2>
                    <ul className="font-mono">
                        <li>
                            <Link legacyBehavior href="/login"><a className="text-black hover:text-gray-400">Login</a></Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="/signup"><a className="text-black hover:text-gray-400">Sign up</a></Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="/trackorder"><a className="text-black hover:text-gray-400">Track Order</a></Link>
                        </li>


                    </ul>
                </div>
                <div className="text-center sm:text-start my-2" >

                    <h2 className="tracking-wider font-mono text-sm text-gray-600">
                        Company
                    </h2>
                    <ul className="font-mono">
                        <li>
                            <Link legacyBehavior href="/about"><a className="text-black hover:text-gray-400">About Us</a></Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="/contact"><a className="text-black hover:text-gray-400">Contact Us</a></Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="/faqs"><a className="text-black hover:text-gray-400">FAQs</a></Link>
                        </li>

                    </ul>
                </div>

                <div className="text-center sm:text-start my-2" >

                    <h2 className="tracking-wider font-mono text-sm text-gray-600">
                        Help
                    </h2>
                    <ul className="font-mono">
                        <li>
                            <Link legacyBehavior href="/privacy_policy"><a className="text-black hover:text-gray-400">Privacy Policy</a></Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="/terms_and_condition"><a className="text-black hover:text-gray-400">Terms and Conditions</a></Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="/refund_return_policy"><a className="text-black hover:text-gray-400">Refund/Return Policy</a></Link>
                        </li>

                    </ul>
                </div>
                {/* <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
                            Account
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Login</a></Link>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Sign up</a></Link>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Orders</a></Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
                            CATEGORIES
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Skin</a></Link>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Second Link</a></Link>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Third Link</a></Link>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a></Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
                            About wrap
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">About us</a></Link>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Contact Us</a></Link>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Privacy policy</a></Link>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Terms and condition</a></Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
                            Help
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-100">Contact Us</a></Link>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Track Your Order</a></Link>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Refund Policy</a></Link>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Payment Issue</a></Link>
                            </li>
                           
                        </nav>
                    </div>
                </div> */}
            </div>
            <div className="border-t-2 border-b-2 border-black bg-black text-white">
                <div className="container mx-auto pt-4 px-5 flex flex-wrap w-full flex-col sm:flex-row justify-center items-center level4:items-start level4:justify-between">
                    <div>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start items-center gap-3">
                            <Link legacyBehavior href=""><a>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="36" height="36"
                                    className="fill-current text-white"
                                    viewBox="0 0 16 16">

                                    <path d="M 3.5 1 C 2.1250151 1 1 2.1250151 1 3.5 L 1 11.5 C 1 12.874985 2.1250151 14 3.5 14 L 11.5 14 C 12.874985 14 14 12.874985 14 11.5 L 14 3.5 C 14 2.1250151 12.874985 1 11.5 1 L 3.5 1 z M 3.5 2 L 11.5 2 C 12.335015 2 13 2.6649849 13 3.5 L 13 11.5 C 13 12.335015 12.335015 13 11.5 13 L 9.9042969 13 L 9.9042969 8.9667969 L 11.300781 8.9667969 L 11.509766 7.3574219 L 9.9042969 7.3574219 L 9.9042969 6.3320312 C 9.9042969 5.8660312 10.034031 5.5488281 10.707031 5.5488281 L 11.566406 5.5488281 L 11.566406 4.109375 C 11.417406 4.089375 10.907453 4.046875 10.314453 4.046875 C 9.0764531 4.046875 8.2304688 4.795875 8.2304688 6.171875 L 8.2304688 7.3574219 L 7 7.3535156 L 7 8.9628906 L 8.2304688 8.9667969 L 8.2304688 13 L 3.5 13 C 2.6649849 13 2 12.335015 2 11.5 L 2 3.5 C 2 2.6649849 2.6649849 2 3.5 2 z"></path>
                                </svg>
                            </a></Link>
                            <Link legacyBehavior href=""><a>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="36" height="36"
                                    className="fill-current text-white"
                                    viewBox="0 0 16 16">
                                    <path d="M 15 3.296875 C 14.476563 3.523438 13.949219 3.691406 13.367188 3.746094 C 13.949219 3.410156 14.417969 2.84375 14.648438 2.226563 C 14.066406 2.5625 13.484375 2.789063 12.84375 2.902344 C 12.257813 2.339844 11.5 2 10.683594 2 C 9.109375 2 7.824219 3.242188 7.824219 4.765625 C 7.824219 4.988281 7.824219 5.214844 7.882813 5.386719 C 4.875 5.386719 2.8125 3.691406 1.414063 2 C 1.121094 2.394531 1.003906 2.902344 1.003906 3.410156 C 1.003906 4.367188 1.53125 5.214844 2.289063 5.722656 C 1.820313 5.667969 1.355469 5.554688 1.003906 5.386719 C 1.003906 5.386719 1.003906 5.386719 1.003906 5.441406 C 1.003906 6.796875 1.996094 7.921875 3.28125 8.148438 C 3.046875 8.203125 2.8125 8.261719 2.519531 8.261719 C 2.347656 8.261719 2.171875 8.261719 1.996094 8.207031 C 2.347656 9.335938 3.976563 10.632813 5.257813 10.632813 C 4.265625 11.363281 3.34375 12 1.5 12 C 1.265625 12 1.453125 12 1 12 C 2.28125 12.789063 3.800781 13 5.375 13 C 10.683594 13 13.542969 8.769531 13.542969 5.101563 C 13.542969 4.988281 13.542969 4.878906 13.542969 4.765625 C 14.125 4.367188 14.59375 3.863281 15 3.296875"></path>
                                </svg>
                            </a></Link>
                            <Link legacyBehavior href=""><a>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="36" height="36"
                                    className="fill-current text-white"
                                    viewBox="0 0 16 16">
                                    <path d="M 4.773438 1 C 2.695313 1 1 2.695313 1 4.773438 L 1 10.230469 C 1 12.304688 2.695313 14 4.773438 14 L 10.230469 14 C 12.304688 14 14 12.304688 14 10.226563 L 14 4.773438 C 14 2.695313 12.304688 1 10.226563 1 Z M 4.773438 2 L 10.226563 2 C 11.765625 2 13 3.234375 13 4.773438 L 13 10.226563 C 13 11.765625 11.765625 13 10.230469 13 L 4.773438 13 C 3.234375 13 2 11.765625 2 10.230469 L 2 4.773438 C 2 3.234375 3.234375 2 4.773438 2 Z M 11.5 3 C 11.222656 3 11 3.222656 11 3.5 C 11 3.777344 11.222656 4 11.5 4 C 11.777344 4 12 3.777344 12 3.5 C 12 3.222656 11.777344 3 11.5 3 Z M 7.5 4 C 5.574219 4 4 5.574219 4 7.5 C 4 9.425781 5.574219 11 7.5 11 C 9.425781 11 11 9.425781 11 7.5 C 11 5.574219 9.425781 4 7.5 4 Z M 7.5 5 C 8.886719 5 10 6.113281 10 7.5 C 10 8.886719 8.886719 10 7.5 10 C 6.113281 10 5 8.886719 5 7.5 C 5 6.113281 6.113281 5 7.5 5 Z"></path>
                                </svg>
                            </a></Link>
                            <Link legacyBehavior href=""><a>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="36" height="36"
                                    className="fill-current text-white"
                                    viewBox="0 0 16 16">
                                    <path d="M 8 2 C 5.960938 2 4.15625 2.210938 3.058594 2.375 C 2.160156 2.507813 1.445313 3.210938 1.28125 4.113281 C 1.140625 4.902344 1 6.054688 1 7.5 C 1 8.945313 1.140625 10.097656 1.28125 10.886719 C 1.445313 11.789063 2.160156 12.488281 3.058594 12.625 C 4.160156 12.789063 5.972656 13 8 13 C 10.027344 13 11.835938 12.789063 12.9375 12.625 L 12.941406 12.625 C 13.839844 12.492188 14.554688 11.789063 14.71875 10.886719 C 14.859375 10.09375 15 8.941406 15 7.5 C 15 6.054688 14.859375 4.902344 14.714844 4.113281 C 14.554688 3.210938 13.839844 2.507813 12.941406 2.375 C 11.84375 2.210938 10.039063 2 8 2 Z M 8 3 C 9.96875 3 11.730469 3.203125 12.792969 3.363281 C 13.261719 3.433594 13.640625 3.800781 13.730469 4.289063 C 13.863281 5.027344 14 6.121094 14 7.5 C 14 8.878906 13.863281 9.972656 13.734375 10.707031 C 13.644531 11.199219 13.265625 11.566406 12.792969 11.636719 C 11.722656 11.792969 9.957031 12 8 12 C 6.042969 12 4.273438 11.792969 3.207031 11.636719 C 2.738281 11.566406 2.355469 11.199219 2.265625 10.707031 C 2.136719 9.96875 2 8.878906 2 7.5 C 2 6.117188 2.136719 5.027344 2.265625 4.289063 C 2.355469 3.800781 2.734375 3.433594 3.203125 3.367188 L 3.207031 3.367188 C 4.269531 3.207031 6.03125 3 8 3 Z M 6 5 L 6 10 L 11 7.5 Z"></path>
                                </svg>
                            </a></Link>
                        </span>

                    </div>
                    <div className="">

                        <img src="https://mzart.sgp1.cdn.digitaloceanspaces.com/icons/payment.png" alt="payment methods" className="max-w-[400px] w-full " />


                    </div>
                </div>
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between text-white">
                    <p className="text-white text-sm text-center sm:text-left">
                        © 2023 mzart.in —
                        <Link legacyBehavior href="https://twitter.com/knyttneve"><a

                            rel="noopener noreferrer"
                            className=" ml-1 text-white"

                            target="_blank"
                        >
                            @mzart
                        </a></Link>
                    </p>
                    <p className="text-white text-sm text-center sm:text-left">
                        @theonlyjunaid
                    </p>

                </div>
            </div>
        </footer>
        // <footer className=" body-font shadow-xl bg-black text-white  border-t-2 border-black">
        //     <div className="container  px-5 py-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap justify-between flex-wrap flex-col">
        //         <div>
        //             <h2 className="tracking-widest font-mono text-2xl">
        //                 SUBSCRIBE
        //             </h2>
        //             <form action="" className="flex items-center gap-2 mt-3">
        //                 <div>
        //                     <input type="email" name="email" id="email" placeholder="Enter your email" className="w-full  rounded border-[1.7px] border-black  focus:outline-none focus:border-indigo-500 text-base px-4 py-2" />
        //                 </div>
        //                 <div className="flex justify-center">
        //                     <button className="text-black border-0 py-2 px-8 focus:outline-none bg-white rounded text-lg">
        //                         SUBMIT    </button>

        //                 </div>
        //             </form>
        //             <p className="mt-2 text-gray-300 text-[8.5px]">
        //                 Subscribe to our newsletter to get the latest updates on our products and services.
        //             </p>
        //         </div>
        //         <div >
        //             <h2 className="tracking-wider font-mono text-sm text-gray-300">
        //                 Customer
        //             </h2>
        //             <ul className="font-mono">
        //                 <li>
        //                    <Link legacyBehavior href=""><a className="text-white hover:text-gray-400">Login</a></Link>
        //                 </li>
        //                 <li>
        //                    <Link legacyBehavior href=""><a className="text-white hover:text-gray-400">Sign up</a></Link>
        //                 </li>
        //                 <li>
        //                    <Link legacyBehavior href=""><a className="text-white hover:text-gray-400">Track Order</a></Link>
        //                 </li>


        //             </ul>
        //         </div>
        //         <div className="">
        //             <h2 className="tracking-wider font-mono text-sm text-gray-300">
        //                 Company
        //             </h2>
        //             <ul className="font-mono">
        //                 <li>
        //                    <Link legacyBehavior href=""><a className="text-white hover:text-gray-400">About Us</a></Link>
        //                 </li>
        //                 <li>
        //                    <Link legacyBehavior href=""><a className="text-white hover:text-gray-400">Contact Us</a></Link>
        //                 </li>
        //                 <li>
        //                    <Link legacyBehavior href=""><a className="text-white hover:text-gray-400">FAQs</a></Link>
        //                 </li>

        //             </ul>
        //         </div>

        //         <div className="">
        //             <h2 className="tracking-wider font-mono text-sm text-gray-300">
        //                 Help
        //             </h2>
        //             <ul className="font-mono">
        //                 <li>
        //                    <Link legacyBehavior href=""><a className="text-white hover:text-gray-400">Privacy Policy</a></Link>
        //                 </li>
        //                 <li>
        //                    <Link legacyBehavior href=""><a className="text-white hover:text-gray-400">Terms and Conditions</a></Link>
        //                 </li>
        //                 <li>
        //                    <Link legacyBehavior href=""><a className="text-white hover:text-gray-400">Return Policy</a></Link>
        //                 </li>

        //             </ul>
        //         </div>
        //         {/* <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        //             <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        //                 <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
        //                     Account
        //                 </h2>
        //                 <nav className="list-none mb-10">
        //                     <li>
        //                         <a className="text-gray-600 hover:text-gray-800">Login</a></Link>
        //                     </li>
        //                     <li>
        //                         <a className="text-gray-600 hover:text-gray-800">Sign up</a></Link>
        //                     </li>
        //                     <li>
        //                         <a className="text-gray-600 hover:text-gray-800">Orders</a></Link>
        //                     </li>
        //                 </nav>
        //             </div>
        //             <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        //                 <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
        //                     CATEGORIES
        //                 </h2>
        //                 <nav className="list-none mb-10">
        //                     <li>
        //                         <a className="text-gray-600 hover:text-gray-800">Skin</a></Link>
        //                     </li>
        //                     <li>
        //                         <a className="text-gray-600 hover:text-gray-800">Second Link</a></Link>
        //                     </li>
        //                     <li>
        //                         <a className="text-gray-600 hover:text-gray-800">Third Link</a></Link>
        //                     </li>
        //                     <li>
        //                         <a className="text-gray-600 hover:text-gray-800">Fourth Link</a></Link>
        //                     </li>
        //                 </nav>
        //             </div>
        //             <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        //                 <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
        //                     About wrap
        //                 </h2>
        //                 <nav className="list-none mb-10">
        //                     <li>
        //                         <a className="text-gray-600 hover:text-gray-800">About us</a></Link>
        //                     </li>
        //                     <li>
        //                         <a className="text-gray-600 hover:text-gray-800">Contact Us</a></Link>
        //                     </li>
        //                     <li>
        //                         <a className="text-gray-600 hover:text-gray-800">Privacy policy</a></Link>
        //                     </li>
        //                     <li>
        //                         <a className="text-gray-600 hover:text-gray-800">Terms and condition</a></Link>
        //                     </li>
        //                 </nav>
        //             </div>
        //             <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        //                 <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">
        //                     Help
        //                 </h2>
        //                 <nav className="list-none mb-10">
        //                     <li>
        //                         <a className="text-gray-600 hover:text-gray-100">Contact Us</a></Link>
        //                     </li>
        //                     <li>
        //                         <a className="text-gray-600 hover:text-gray-800">Track Your Order</a></Link>
        //                     </li>
        //                     <li>
        //                         <a className="text-gray-600 hover:text-gray-800">Refund Policy</a></Link>
        //                     </li>
        //                     <li>
        //                         <a className="text-gray-600 hover:text-gray-800">Payment Issue</a></Link>
        //                     </li>

        //                 </nav>
        //             </div>
        //         </div> */}
        //     </div>
        //     <div className="border-t-2 border-b-2 border-white text-white">
        //         <div className="container mx-auto pt-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between">
        //             <div>
        //                 <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start items-center gap-3">
        //                    <Link legacyBehavior href=""><a>
        //                         <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        //                             width="36" height="36"
        //                             className="text-white fill-current"
        //                             viewBox="0 0 16 16">
        //                             <path d="M 3.5 1 C 2.1250151 1 1 2.1250151 1 3.5 L 1 11.5 C 1 12.874985 2.1250151 14 3.5 14 L 11.5 14 C 12.874985 14 14 12.874985 14 11.5 L 14 3.5 C 14 2.1250151 12.874985 1 11.5 1 L 3.5 1 z M 3.5 2 L 11.5 2 C 12.335015 2 13 2.6649849 13 3.5 L 13 11.5 C 13 12.335015 12.335015 13 11.5 13 L 9.9042969 13 L 9.9042969 8.9667969 L 11.300781 8.9667969 L 11.509766 7.3574219 L 9.9042969 7.3574219 L 9.9042969 6.3320312 C 9.9042969 5.8660312 10.034031 5.5488281 10.707031 5.5488281 L 11.566406 5.5488281 L 11.566406 4.109375 C 11.417406 4.089375 10.907453 4.046875 10.314453 4.046875 C 9.0764531 4.046875 8.2304688 4.795875 8.2304688 6.171875 L 8.2304688 7.3574219 L 7 7.3535156 L 7 8.9628906 L 8.2304688 8.9667969 L 8.2304688 13 L 3.5 13 C 2.6649849 13 2 12.335015 2 11.5 L 2 3.5 C 2 2.6649849 2.6649849 2 3.5 2 z"></path>
        //                         </svg>
        //                     </a></Link>
        //                    <Link legacyBehavior href=""><a>
        //                         <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        //                             width="36" height="36"
        //                             className="text-white fill-current"

        //                             viewBox="0 0 16 16">
        //                             <path d="M 15 3.296875 C 14.476563 3.523438 13.949219 3.691406 13.367188 3.746094 C 13.949219 3.410156 14.417969 2.84375 14.648438 2.226563 C 14.066406 2.5625 13.484375 2.789063 12.84375 2.902344 C 12.257813 2.339844 11.5 2 10.683594 2 C 9.109375 2 7.824219 3.242188 7.824219 4.765625 C 7.824219 4.988281 7.824219 5.214844 7.882813 5.386719 C 4.875 5.386719 2.8125 3.691406 1.414063 2 C 1.121094 2.394531 1.003906 2.902344 1.003906 3.410156 C 1.003906 4.367188 1.53125 5.214844 2.289063 5.722656 C 1.820313 5.667969 1.355469 5.554688 1.003906 5.386719 C 1.003906 5.386719 1.003906 5.386719 1.003906 5.441406 C 1.003906 6.796875 1.996094 7.921875 3.28125 8.148438 C 3.046875 8.203125 2.8125 8.261719 2.519531 8.261719 C 2.347656 8.261719 2.171875 8.261719 1.996094 8.207031 C 2.347656 9.335938 3.976563 10.632813 5.257813 10.632813 C 4.265625 11.363281 3.34375 12 1.5 12 C 1.265625 12 1.453125 12 1 12 C 2.28125 12.789063 3.800781 13 5.375 13 C 10.683594 13 13.542969 8.769531 13.542969 5.101563 C 13.542969 4.988281 13.542969 4.878906 13.542969 4.765625 C 14.125 4.367188 14.59375 3.863281 15 3.296875"></path>
        //                         </svg>
        //                     </a></Link>
        //                    <Link legacyBehavior href=""><a>
        //                         <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        //                             width="36" height="36"
        //                             className="text-white fill-current"

        //                             viewBox="0 0 16 16">
        //                             <path d="M 4.773438 1 C 2.695313 1 1 2.695313 1 4.773438 L 1 10.230469 C 1 12.304688 2.695313 14 4.773438 14 L 10.230469 14 C 12.304688 14 14 12.304688 14 10.226563 L 14 4.773438 C 14 2.695313 12.304688 1 10.226563 1 Z M 4.773438 2 L 10.226563 2 C 11.765625 2 13 3.234375 13 4.773438 L 13 10.226563 C 13 11.765625 11.765625 13 10.230469 13 L 4.773438 13 C 3.234375 13 2 11.765625 2 10.230469 L 2 4.773438 C 2 3.234375 3.234375 2 4.773438 2 Z M 11.5 3 C 11.222656 3 11 3.222656 11 3.5 C 11 3.777344 11.222656 4 11.5 4 C 11.777344 4 12 3.777344 12 3.5 C 12 3.222656 11.777344 3 11.5 3 Z M 7.5 4 C 5.574219 4 4 5.574219 4 7.5 C 4 9.425781 5.574219 11 7.5 11 C 9.425781 11 11 9.425781 11 7.5 C 11 5.574219 9.425781 4 7.5 4 Z M 7.5 5 C 8.886719 5 10 6.113281 10 7.5 C 10 8.886719 8.886719 10 7.5 10 C 6.113281 10 5 8.886719 5 7.5 C 5 6.113281 6.113281 5 7.5 5 Z"></path>
        //                         </svg>
        //                     </a></Link>
        //                    <Link legacyBehavior href=""><a>
        //                         <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        //                             width="36" height="36"
        //                             className="text-white fill-current"

        //                             viewBox="0 0 16 16">
        //                             <path d="M 8 2 C 5.960938 2 4.15625 2.210938 3.058594 2.375 C 2.160156 2.507813 1.445313 3.210938 1.28125 4.113281 C 1.140625 4.902344 1 6.054688 1 7.5 C 1 8.945313 1.140625 10.097656 1.28125 10.886719 C 1.445313 11.789063 2.160156 12.488281 3.058594 12.625 C 4.160156 12.789063 5.972656 13 8 13 C 10.027344 13 11.835938 12.789063 12.9375 12.625 L 12.941406 12.625 C 13.839844 12.492188 14.554688 11.789063 14.71875 10.886719 C 14.859375 10.09375 15 8.941406 15 7.5 C 15 6.054688 14.859375 4.902344 14.714844 4.113281 C 14.554688 3.210938 13.839844 2.507813 12.941406 2.375 C 11.84375 2.210938 10.039063 2 8 2 Z M 8 3 C 9.96875 3 11.730469 3.203125 12.792969 3.363281 C 13.261719 3.433594 13.640625 3.800781 13.730469 4.289063 C 13.863281 5.027344 14 6.121094 14 7.5 C 14 8.878906 13.863281 9.972656 13.734375 10.707031 C 13.644531 11.199219 13.265625 11.566406 12.792969 11.636719 C 11.722656 11.792969 9.957031 12 8 12 C 6.042969 12 4.273438 11.792969 3.207031 11.636719 C 2.738281 11.566406 2.355469 11.199219 2.265625 10.707031 C 2.136719 9.96875 2 8.878906 2 7.5 C 2 6.117188 2.136719 5.027344 2.265625 4.289063 C 2.355469 3.800781 2.734375 3.433594 3.203125 3.367188 L 3.207031 3.367188 C 4.269531 3.207031 6.03125 3 8 3 Z M 6 5 L 6 10 L 11 7.5 Z"></path>
        //                         </svg>
        //                     </a></Link>
        //                 </span>

        //             </div>
        //             <div>

        //                 <img src="icons/payment.svg" alt="" />


        //             </div>
        //         </div>
        //         <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between">
        //             <p className="text-white text-sm text-center sm:text-left">
        //                 © 2022 wrap.com —
        //                 <a
        //                     href="https://twitter.com/knyttneve"
        //                     rel="noopener noreferrer"
        //                     className="text-white ml-1"
        //                     target="_blank"
        //                 >
        //                     @wrap
        //                 </a></Link>
        //             </p>
        //             <p className="text-white text-sm text-center sm:text-left">
        //                 @theonlyjunaid
        //             </p>

        //         </div>
        //     </div>
        // </footer>
    );
};

export default Footer2;
