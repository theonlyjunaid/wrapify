import User from "../../model/User";
import connectDB from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');


const handler = async (req, res) => {
    if (req.method === 'POST') {
        // console.log(req.body);
        // let user = await User.findOne({ email: req.body.email });
        // if (user) {
            // const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
            // let decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
            // res.status(200).json({ success: true, token: 'junaidbhai'+process.env.ADMIN+'baburao'});
            // console.log(req.body)
            let password = req.body.password
            // console.log(password)
        if (req.body.password) {
            if (password == process.env.ADMIN) {
                let token = jwt.sign({password:password}, process.env.JWT_SECRET, { expiresIn: '1d' });

                res.status(200).json({ success: true, token});
            }else{
                res.status(200).json({ success: false, error: 'Invalid credentials' });
            }
            // if (decryptedPassword === req.body.password) {
                // console.log(user);
            }
            else {
                res.status(200).json({ success: false, error: 'Invalid credentials' });
            }
        // }
        // else {
        //     res.status(400).json({ success: false, error: 'Invalid credentials' });
        // }
    }
    else {
        res.status(400).json({ success: false, error: 'This Method Is not allowed' });
    }
}
export default connectDB(handler);
