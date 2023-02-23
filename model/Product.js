const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    img: { type: String,default:'' },
    img2: { type: String },
    brand: { type: String, required: true },
    category: { type: String, required: true, default: "skin" },
    subCategory: { type: String, required: true },
    for: { type: String, required: true, default: "mobile" },
    desc: { type: String, required: true },
    desc2: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: { type: Number, required: true, default: 499 },
    availableQty: { type: Number, required: true },
    color: { type: String, required: true },
    size: { type: String }
}, { timestamps: true });

mongoose.models = {};
export default mongoose.model('Product', ProductSchema);