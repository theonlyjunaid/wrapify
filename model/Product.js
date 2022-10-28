const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    availableQty: { type: Number, required: true },
    color: { type: String, required: true },
    size: { type: String },
    rating: { type: Number },
    numReviews: { type: Number },
}, { timestamps: true });

mongoose.models = {};
export default mongoose.model('Product', ProductSchema);