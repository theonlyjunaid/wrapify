import connectDB from "../../middleware/mongoose";
import Pincodes from "../../model/Pincodes";

const handler = async (req, res) => {
    if (req.method === 'POST') {
// res.send({success:true,message:"Hello"});
// const pin  = await Pincodes.find({pincode:req.body.pincode})
// res.send(req.body.pincode);
res.send({success:true,message:req.body});
    }
}

export default connectDB(handler);
