import mongoose from "mongoose";
import Order from "../../model/Order";
import connectDB from "../../middleware/mongoose";
const mailgun = require("mailgun-js")
const DOMAIN = process.env.MAILGUN_DOMAIN
const API = process.env.MAILGUN_API_KEY



export default async (req, res) => {
const mg = mailgun({ apiKey: API, domain: DOMAIN })
let data
if (req.method === "POST") {
    let order = await Order.findById(req.body.id);
    if(order.ordermailsent === false){
     data = {
        from: 'MZART<order@www.mzart.in	>' ,
        to: order.email,
        subject: "New message from your website",
        text: `Hello ${order.name}, Thank you for your order. Your order id is ${order.orderId}. We will contact you soon.`
    }
    mg.messages().send(data)
    await Order.findByIdAndUpdate({ _id: req.body.id}, { ordermailsent: true });
    res.status(200).json({ success:true,message: 'Mail sent' });
    }else{
        res.statusCode = 200
        res.json({ success: false, message: "Order mail already sent" })
    }
}
}