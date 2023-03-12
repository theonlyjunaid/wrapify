import mongoose from 'mongoose'
import React,{useEffect} from 'react'
import Order from '../model/Order'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const order = ({ order }) => {
// console.log(order)
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
    const inv = () => {
        var element = `
       <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    />
      <script src="https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"></script>
    
    <style>
      .invoice {
        margin-bottom: 15px;
        border-top: 1px solid;
        border-bottom: 1px solid;
        background: lightblue;
        padding: 0 17px;
      }
      .border {
        border: 1px solid #e5e5e5;
      }
    </style>
  </head>

  <body>
    <div class="container" id="invoice">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10 border">
          <div class="row">
            <div class="col-md-12 invoice text-center text-primary">
              <h2>Invoice</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-right">
              <p><strong>Invoice No: </strong> 12345</p>
              <p><strong>Date:</strong> 15/Jan/2020</p>
              <p>Bangalore</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 well invoice-body">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Service request</td>
                    <td>15/Jan/2020</td>
                    <td>$1000.00</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td><strong>Total</strong></td>
                    <td><strong>$1000.00</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="row">
            <div class="col-md-11 text-right mt-2 mb-2">Signature</div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row ">
        <div class="col-md-12 text-center mb-4">
          <button class="btn btn-warning" id="downloadPdf">
            Generate Invoice
          </button>
        </div>
      </div>
    </div>
  </body>

  <script>
    
    document
      .getElementById("downloadPdf")
      .addEventListener("click", function download() {
        const element = document.getElementById("invoice");
        html2pdf()
          .from(element)
          .save();
      });
  </script>
</html>

        `
        html2pdf()
            .from(element)
            .save();
    }
    const router = useRouter()
    const sendmail = async () => {
      const data = await fetch("/api/mailapi", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 'id': order._id }),
        }).then((t) =>
            t.json()        
            );
            console.log(data)
        if (data.success) {
            toast.success(data.message, {
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
        else if (data.success === false) {
     console.log(data.message)
        }
    };
  
    let totalQuantity = 0
 
  if (router.query.clearCart == 1) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cart')
    }
   try {
     sendmail()
   } catch (error) {
    console.log(error)
   }
  }

    // const downloadInvoice = async () => {
    //     const data = await fetch("/api/invoice", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(order),

    //     }).then((t) =>
    //         t.json()
    //     );
        
    //     console.log(data?.data)
    //     try {
    //         download(`${order?.orderId}.pdf`, data?.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
       

    // }
    return (

        <div className="2xl:container 2xl:mx-auto flex mx-auto justify-center py-14 px-4 md:px-6 xl:px-20 min-h-screen">
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
        
            <div className="flex flex-col xl:flex-row justify-center items-center space-y-10 xl:space-y-0 xl:space-x-8">
              
                <div className="flex justify-center flex-col items-start w-full lg:w-9/12 xl:w-full " >
                    <h3 className="text-3xl xl:text-4xl font-semibold py-1 w-full  md:text-left text-gray-800">Order Summary</h3>
                    <div>
                        <button onClick={() => inv()} className="flex justify-center items-center mx-2 mr-10 px-2 hover:bg-gray-300 bg-gray-100 ">
                           Download invoice
                        </button>
                    </div>
                    <div className="flex justify-center items-center w-full mt-8  flex-col space-y-4 ">
                        
                     {Object.keys(order.products).map((item) => {
                            const { name, price, quantity,img,size,varient,qty} = order.products[item]
                         totalQuantity += qty
                            console.log(size[0].split(" ")[0])
                            let namee = name[0].split("(")[0]
                         let sizee = size[0].split(" ")[0]
                            // console.log(name[0].split("(")[1].split("/"))
                            return (
                                <div key={item} className="  w-full">
                                    {
                                     name.map((item,index)=>{
                                        return(
                                    <div key={item} className='flex md:flex-row justify-start items-start md:items-center w-full border border-gray-200'>

                                  
                                    <div className="w-40 md:w-32 " >
                                        <img  src={img} alt="girl-in-red-dress" className='h-32 py-1 md:h-32 md:py-2 md:ml-4'/>
                                        {/* <img className="md:hidden " src="https://i.ibb.co/f8pyz8q/Rectangle-8.png" alt="girl-in-red-dress" /> */}
                                    </div>
                                    <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-4 md:px-8">
                                        <div className="flex flex-col md:flex-shrink-0  justify-start items-start">
                                            <h3 className="text-lg md:text-xl  w-full font-semibold   text-gray-800 ">{namee + " "+ varient}</h3>
                                            <div className="flex flex-row justify-start  space-x-4 md:space-x-6 items-start mt-4 ">
                                                <p className="text-sm -none text-gray-600">
                                                                     Size: <span className="text-gray-800"> {size[index].split(" ")[0]}</span>
                                                </p>
                                                <p className="text-sm -none text-gray-600">
                                                                     Quantity: <span className="text-gray-800"> {size[index].split(" ")[1]}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex mt-4 md:mt-0 md:justify-end items-center w-full ">
                                                             <p className="text-xl lg:text-2xl font-semibold -5 lg:-6 text-gray-800">₹ {price}</p>
                                        </div>
                                        
                                    </div>
                                    </div>
                                    )
                                    }
                                    )
                                }
                                </div>

                            )
                        })}
                      
                    </div>
                    <div className="flex flex-col justify-start items-start mt-8 xl:mt-10 space-y-10 w-full">
                        <div className="flex justify-between items-start flex-col md:flex-row  w-full md:w-auto space-y-8 md:space-y-0 md:space-x-14 xl:space-x-8  lg:w-full">
                            <div className="flex jusitfy-start items-start flex-col space-y-2">
                                <p className="text-base font-semibold   text-gray-800">Billing Address</p>
                                <p className="text-sm -5 text-gray-600">{order.address}</p>
                            </div>
                         
                            <div className="flex jusitfy-between items-start flex-col space-y-2">
                                <p className="text-base font-semibold   text-gray-800">Shipping Method</p>
                                <p className="text-sm -5 text-gray-600">DHL - Takes up to 3 working days</p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4 w-full">
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between  w-full">
                                    <p className="text-base  text-gray-800">Subtotal</p>
                                    <p className="text-base  text-gray-600"> ₹{499 * totalQuantity}</p>
                                </div>
                                <div className="flex justify-between  w-full">
                                    <p className="text-base  text-gray-800">
                                        Discount <span className="bg-gray-200 px-1 text-xs font-medium   text-gray-800">STUDENT</span>
                                    </p>
                                    <p className="text-base  text-gray-600">-₹{(499 * totalQuantity) - order.amount}{"(" + Math.round((((499 * totalQuantity) - order.amount) / (499 * totalQuantity)) * 100) +"%"+")"}</p>
                                </div>
                                <div className="flex justify-between  w-full">
                                    <p className="text-base  text-gray-800">Shipping</p>
                                    <p className="text-base  text-gray-600">Free</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base font-semibold  text-gray-800">Total</p>
                                <p className="text-base font-semibold  text-gray-600"> ₹ {order.amount}</p>
                            </div>
                            <div className="flex w-full justify-center items-center pt-1 md:pt-4  xl:pt-8 space-y-6 md:space-y-8 flex-col">
                                <button className="py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  w-full text-base font-medium  text-white bg-gray-800 hover:bg-black">Track Your Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default order

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI);

  }

    const order = await Order.findById(context.query.id);
    return {
        props: {
            order: JSON.parse(JSON.stringify(order)),
        },
    };
}