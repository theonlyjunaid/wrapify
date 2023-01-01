import Contact from "../../model/Contact";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method === 'POST') {

        const { email,name,phone,message } = req.body;
        if (!email || !name || !message) {
            return res.status(422).json({ message: 'Invalid email address' });
        }
        try {
            const contact = new Contact({
                email: email,
                name: name,
                phone: phone,
                message: message,
            });
            await contact.save();
            res.status(201).json({ message: 'we have recieved your query our team will contact you shortly' });
        } catch (error) {
            res.status(500).json({ message: 'Something went wrong' });
        }

    }
    else {
        res.status(400).json({ message: 'This method is not allowed' });
    }
}

export default connectDB(handler);
