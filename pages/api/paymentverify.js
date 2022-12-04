import mongoose from "mongoose";
import Order from "../../model/Order";
import connectDB from "../../middleware/mongoose";
import crypto from "crypto";
// const mailgun = require("mailgun-js");
// const DOMAIN = process.env.MAILGUN_DOMAIN;
// const mg = mailgun({
//     apiKey: process.env.API_EMAIL, domain: DOMAIN
// });




const handler = async (req, res) => {

    let order;
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    var expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET)
        .update(body.toString())
        .digest('hex');
    // console.log("sig" + razorpay_signature)
    // console.log("sig" + expectedSignature)
    if (expectedSignature === razorpay_signature) {
        order = await Order.findOneAndUpdate({ 'paymentInfo.id': razorpay_order_id }, { status: 'paid', paymentInfo: req.body });
//         const data = {
//             from: 'Mz art <order@www.mzart.in>',
//             to: order.email,
//             subject: 'Order Placed',
//             html: '<h1>Your Order is been placed</h1>'
//         };
//         mg.messages().send(data, function (error, body) {
//             console.log(body);
//         });
        let products = order.products;
        for (let slug in products) {
            await mongoose.connection.db.collection('products').updateOne({ slug: slug }, { $inc: { availableQty: -products[slug].qty } });
        }
        res.redirect('/order?id=' + order._id + '&clearCart=1');
    }
    else {
        res.status(400).json({ message: 'This method is not allowed' });
        res.redirect('/cart');
    }
}

export default connectDB(handler);
