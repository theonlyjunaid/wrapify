import Order from "../../model/Order";
import jsonwebtoken from 'jsonwebtoken';
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        let token = req.body.token
        let decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        let orders = await Order.find({ email: decoded.email });
        res.status(200).json({ success: true, orders });
        // console.log(req.body);
    }
    else {
        res.status(400).json({ message: 'This method is not allowed' });
    }

}

export default connectDB(handler);
