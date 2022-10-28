const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    products: { type: Object, required: true },
    orderId: { type: String, required: true },
    paymentInfo: { type: Object, required: true },
    paymentDump: { type: Object, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: Number, required: true },
    amount: { type: Number, required: true },
    dileveryStatus: { type: String, default: 'pending' },
    status: { type: String, default: 'pending', required: true },
}, { timestamps: true });
export default mongoose.models.Order || mongoose.model('Order', OrderSchema);