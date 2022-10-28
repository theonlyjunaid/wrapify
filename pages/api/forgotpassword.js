import User from "../../model/User";
import connectDB from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jsonwebtoken = require('jsonwebtoken');


const handler = async (req, res) => {
    if (req.method === 'POST') {
        let email = req.body.email;
        let user = await User.findOne({ email: email });
        if (user) {
            const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
            let decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

            res.status(200).json({ success: true, message: 'Email has sent', password: decryptedPassword });
        }
        else {
            res.status(200).json({ success: false, message: 'User not found' });
        }
    }
}
export default connectDB(handler);
