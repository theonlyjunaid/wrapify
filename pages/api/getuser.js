import User from '../../model/User';
import connectDB from '../../middleware/mongoose';
import jsonwebtoken from 'jsonwebtoken';

const handler = async (req, res) => {

    if (req.method === "POST") {
       let token  = req.body.token;
       
            const  user = jsonwebtoken.verify(token, process.env.JWT_SECRET);
            const  dbuser = await User.findOne({ email: user.email });
            // if (dbuser) {
            //     res.status(200).json({ success: true, user: dbuser });
            //     return;
            // }

            res.status(200).json({ success: true, user: dbuser });

    } else {
        res.status(200).json({ success: false, error: 'Method not allowed' });
    }
}


export default connectDB(handler);
