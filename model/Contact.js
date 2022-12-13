const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String },
    message: { type: String, required: true },

}, { timestamps: true });
export default mongoose.models.Contact_us || mongoose.model('Contact_us', ContactSchema);