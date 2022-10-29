const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
    address1: { type: String, default: '' },
    address2: { type: String, default: '' },
    phone: { type: Number, default: '' },
    wishlist: { type: Array, default: [] },
    cart: { type: Array, default: [] },
    pincode: { type: Number, default: '' },
}, { timestamps: true });
mongoose.models = {};

export default mongoose.model('User', UserSchema);