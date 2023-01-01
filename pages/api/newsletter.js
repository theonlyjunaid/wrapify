import Newsletter from "../../model/Newsletter";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method === 'POST') {
      
        const { email } = req.body;
        if (!email) {
            return res.status(422).json({ message: 'Invalid email address' });
        }
        try {
            const existingUser = await Newsletter.findOne({ email: email });
            if (existingUser) {
                return res.status(422).json({ message: 'you are already close to us' });
            }
            const user = new Newsletter({
                email: email,
            });
            await user.save();
            res.status(201).json({ message: 'Thanks for making us smile' });
        } catch (error) {
            res.status(500).json({ message: 'Something went wrong' });
        }

    }
    else {
        res.status(400).json({ message: 'This method is not allowed' });
    }
}

export default connectDB(handler);
