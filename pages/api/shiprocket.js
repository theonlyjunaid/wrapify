import connectDB from "../../middleware/mongoose";
import Pincodes from "../../model/Pincodes";


const handler = async (req, res) => {
    if (req.method === 'POST') {
        const email = 'junaidmalik9069@gmail.com'
        const password = 'Malik.@2002'
        fetch('https://apiv2.shiprocket.in/v1/external/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                res.status(200).json(data)
                // if (data && data.token) {
                //     localStorage.setItem('adminToken', data.token)
                // }
            }
            )
    }
}

export default connectDB(handler);
