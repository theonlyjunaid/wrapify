import Product from "../../model/Product";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        // console.log(req.body);
        for(let i = 0 ;i<req.body.length;i++){
        // let { name, slug, img, brand, category, subCategory, desc, price, availableQty, color, size, rating, numReviews } = req.body[i];
            let oldproduct = await Product.findOne({ slug: req.body[i].slug });
        if (!oldproduct) {
            try {
                const product = new Product({
                    name: req.body[i].name,
                    slug: req.body[i].slug,
                    img: req.body[i].img,
                    img2: req.body[i].img2,
                    brand: req.body[i].brand,
                    category: req.body[i].category,
                    subCategory: req.body[i].subCategory,
                    desc: req.body[i].desc,
                    desc2: req.body[i].desc,
                    price: req.body[i].price,
                    for: req.body[i].for,
                    availableQty: req.body[i].availableQty,
                    color: req.body[i].color,
                    size: req.body[i].size,
                    rating: req.body[i].rating,
                    numReviews: req.body[i].numReviews
                });
                const newProduct = await product.save();
                res.status(201).json(newProduct);
            } catch (error) {
                res.status(400).json({ message: error.message });
            }
        } else {
            res.status(400).json({ message: 'Product already exists' });
        }
        // for (let i = 0; i < req.body.length; i++) {
        //     let P = new Product({
        //         name: req.body[i].name,
        //         slug: req.body[i].slug,
        //         img: req.body[i].img,
        //         brand: req.body[i].brand,
        //         category: req.body[i].category,
        //         desc: req.body[i].desc,
        //         price: req.body[i].price,
        //         availableQty: req.body[i].availableQty,
        //         color: req.body[i].color,
        //         size: req.body[i].size,
        //         rating: req.body[i].rating,
        //         numReviews: req.body[i].numReviews,
        //     });
        //     await P.save();

        // }
        // res.status(200).json({ message: 'Products added successfully' });
    }}
    else {
        res.status(400).json({ message: 'This method is not allowed' });
    }

}

export default connectDB(handler);
