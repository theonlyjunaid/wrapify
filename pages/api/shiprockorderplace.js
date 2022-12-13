import connectDB from "../../middleware/mongoose";
import Pincodes from "../../model/Pincodes";


const handler = async (req, res) => {
    if (req.method === 'POST') {
        fetch('https://apiv2.shiprocket.in/v1/external/orders/create/adhoc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${req.body.token}`,
            },
            body: req.body.bode,
        }).then((r) => r.json())
            .then((data) => {
                res.status(200).json(data)
            })
        // res.status(200).json({ "message": "Order Placed Successfully" })
    }
}

export default connectDB(handler);
