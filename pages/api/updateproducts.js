import Product from "../../model/Product";
import connectDB from "../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method === 'POST') {
        // console.log(req.body);
        for (let i = 0; i < req.body.length; i++) {
            // const product = await Product.find({ color: req.body[i].color });
            // await P.save();
            let P = await Product.updateMany({ color: req.body[i].color }, { $inc: { availableQty: +req.body[i].availableQty } });
            // let P = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i]);
            res.status(200).json({ message: P });
        }
    }
    else {
        res.status(400).json({ message: 'This method is not allowed' });
    }
}
export default connectDB(handler);
