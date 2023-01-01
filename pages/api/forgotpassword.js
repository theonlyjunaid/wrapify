import User from "../../model/User";
import connectDB from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jsonwebtoken = require('jsonwebtoken');
const mailgun = require("mailgun-js")
const DOMAIN = process.env.MAILGUN_DOMAIN
const API = process.env.MAILGUN_API_KEY


const handler = async (req, res) => {
    const mg = mailgun({ apiKey: API, domain: DOMAIN })
    if (req.method === 'POST') {
        let email = req.body.email;
        let user = await User.findOne({ email: email });
        if (user) {
            const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
            let decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
           let data = {
                from: 'MZART<order@www.mzart.in>',
                to: email,
                subject: "MZART Password",
                html: `<h1>Hi ${user.name}</h1> <br> <h2>Your password is ${decryptedPassword}</h2>
                <br>
                <h3>Thank you for using MZART</h3>
                <br>
                <a href='https://mzart.in/login'>Login Here</a>
                <br>
                <h4>Regards</h4>
                <h4>MZART</h4>
                `,
            }
            mg.messages().send(data)
            res.status(200).json({ success: true, message: 'Email has sent'});
        }
        else {
            res.status(200).json({ success: false, message: 'User not found' });
        }
    }
}
export default connectDB(handler);
