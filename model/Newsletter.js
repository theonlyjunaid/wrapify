const mongoose = require('mongoose');

const NewsLetterSchema = new mongoose.Schema({
    email: { type: String, required: true },
}, { timestamps: true });
export default mongoose.models.NewsLetter || mongoose.model('NewsLetter', NewsLetterSchema);