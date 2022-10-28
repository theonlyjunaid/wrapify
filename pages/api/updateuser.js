import User from "../../model/User";
import connectDB from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jsonwebtoken = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method === 'POST') {
        console.log(req.body.token);
        let token = req.body.token
        let decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        let user = await User.findOne({ email: decoded.email });
        // console.log(user);
        if (user) {
            let dbuser = await User.findOneAndUpdate({ email: decoded.email }, { name: req.body.name, phone: req.body.phone, address: req.body.address, pincode: req.body.pincode });
            const { name, email, phone, address, pincode } = dbuser;
            res.status(200).json({ success: true, name, email, phone, address, pincode });
        }
    }
    else {
        res.status(400).json({ message: 'This method is not allowed' });
    }
}

export default connectDB(handler);
