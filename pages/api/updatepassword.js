import User from "../../model/User";
import connectDB from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jsonwebtoken = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { password, cpassword, token } = req.body;
        if (password === cpassword) {
            let decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
            let user = await User.findOne({ email: decoded.email });
            if (user) {
                let encryptedPassword = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString();
                let dbuser = await User.findOneAndUpdate({ email: decoded.email }, { password: encryptedPassword });
                res.status(200).json({ success: true, message: 'Password Updated Successfully' });
            }
        }
        else {
            res.status(200).json({ success: false, message: 'Password and Confirm Password are not same' });
        }
    }
    else {
        res.status(400).json({ message: 'This method is not allowed' });
    }
}

export default connectDB(handler);
