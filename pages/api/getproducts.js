import Product from "../../model/Product";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    let products = await Product.find();
    let Skins = {}
    for (let item of products) {
        if (item.name in Skins) {
            if (!Skins[item.name].color.includes(item.color) && item.availableQty > 0) {
                Skins[item.name].color.push(item.color)
            }
            if (!Skins[item.name].size.includes(item.size) && item.availableQty > 0) {
                Skins[item.name].size.push(item.size)
            }
        }

        else {
            Skins[item.name] = JSON.parse(JSON.stringify(item));
            if (item.availableQty > 0) {
                Skins[item.name].color = [item.color];
                Skins[item.name].size = [item.size];

            }
        }
    }
    res.status(200).json({ Skins });
}

export default connectDB(handler);
