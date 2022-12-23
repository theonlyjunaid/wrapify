import connectDB from "../../middleware/mongoose";
import { createInvoice } from 'easyinvoice';


const handler = async (req, res) => {
    if(req.method === 'POST'){

let product = req.body.products;
let products = [];
        for (let item in product) {
            for (let i = 0; i < product[item].name.length; i++) {
                products.push({
                    description: product[item].name[i],
                    quantity: product[item].size[i].split(' ')[1],
                    'tax-rate': 18,
                    
                    price: (product[item].price/118) * 100,
                })
            }
        }


        let body  = {
                // "customize": {
                //     "template": "SGVsbG8gd29ybGQh" // Must be base64 encoded html. This example contains 'Hello World!' in base64
                // },
                images: {
                logo: 'https://raw.githubusercontent.com/theonlyjunaid/wrap/main/public/mobile/skin/samsung/s22series/s22ultra/green.webp'
                },
                sender: {
                    company: 'MZ Art',
                    address: 'Shaheed nagar, Sahibabad',
                    city: 'Uttar Pradesh',
                    country: 'India',
                    zip: 'Ghaziabad',
                
                    "custom1": "201005",
                    // "custom2": "custom value 2",
                    // "custom3": "custom value 3"
                },
                client: {
                    company: req.body.name,
                    address: req.body.address,
                    "custom1": req.body.city,
                    "custom2": req.body.state,
                    "custom3": req.body.pincode,


                    // address: 'Clientstreet 456',
                    // zip: '4567 CD',
                    // city: 'Clientcity',
                    // country: 'Clientcountry',
                    // "custom1": "custom value 1",
                    // "custom2": "custom value 2",
                    // "custom3": "custom value 3"
                    // 'mobile': req.body.phone,
                },
                information: {
                    number: req.body.phone,
                    date: req.body.updatedAt.slice(4, 15),
                    'due-date': null
                },
                products: products,
                'bottom-notice': 'thanks for making us smile',
                settings: {
                    currency: 'INR' ,// See documentation 'Locales and Currency' for more info. Leave empty for no currency.,
                    // "locale": "nl-NL", // Defaults to en-US, used for number formatting (see docs)
                    "taxNotation": "gst", // Defaults to vat
                    // "margin-top": 25, // Default to 25
                    // "margin-right": 25, // Default to 25
                    // "margin-left": 25, // Default to 25
                    // "margin-bottom": 25, // Default to 25
                    // "format": "Letter", // Defaults to A4
                    // "height": "1000px", // allowed units: mm, cm, in, px
                    // "width": "500px", // allowed units: mm, cm, in, px
                    // "orientation": "landscape", // portrait or landscape, defaults to portrait

                }
                // Used for translating the headers to your preferred language
                // Defaults to English. Below example is translated to Dutch
                // "translate": {
                //     "invoice": "FACTUUR",
                //     "number": "Nummer",
                //     "date": "Datum",
                //     "due-date": "Verloopdatum",
                //     "subtotal": "Subtotaal",
                //     "products": "Producten",
                //     "quantity": "Aantal",
                //     "price": "Prijs",
                //     "product-total": "Totaal",
                //     "total": "Totaal"
                // },

        }
        const result = await createInvoice(body)
        res.status(200).json({message: 'Invoice created', data: result.pdf});

    }
}

export default connectDB(handler);
