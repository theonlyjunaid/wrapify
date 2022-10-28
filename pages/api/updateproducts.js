import Product from "../../model/Product";
import connectDB from "../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method === 'POST') {
        console.log(req.body);
        for (let i = 0; i < req.body.length; i++) {
            let P = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i]);
            // await P.save();
        }
        res.status(200).json({ message: 'successfully' });
    }
    else {
        res.status(400).json({ message: 'This method is not allowed' });
    }
}
export default connectDB(handler);
