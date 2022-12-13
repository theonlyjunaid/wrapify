const mongoose = require('mongoose');

const PincodeSchema = new mongoose.Schema({
    pincode: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    cod: { type: Boolean, required: true },
    prePaid: { type: Boolean, required: true },
    delivery: { type: Boolean },

}, { timestamps: true });
export default mongoose.models.pincodes || mongoose.model('pincodes', PincodeSchema);