

import Order from "../../model/Order";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    let products = await Order.find();

   for(let i = 0; i < products.length; i++){
await Order.findOneAndUpdate({orderId: products[i].orderId}, {createdAt: products[i].createdAt.toLocaleString(), updatedAt: products[i].updatedAt.toLocaleString()});
   }
    
    res.status(200).json({ message: products });

}

export default connectDB(handler);
