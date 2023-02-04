const mongoose = require('mongoose');

const SellerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'seller' },
    phone: { type: Number,required:'true' },
}, { timestamps: true });
mongoose.models = {};

export default mongoose.model('Seller', SellerSchema);