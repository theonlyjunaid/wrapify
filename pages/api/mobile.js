import mobile from '../../mobile.json'
export default function handler(req, res) {
    // if (req.method === 'POST') {
    //     let { brand, model, color, customize } = req.body
    //     if (brand) {
    //         let mobiles = mobile.filter((item) => item.brand === brand)
    //         res.status(200).json(mobiles);
    //         return
    //     } else if (model && brand) {
    //         let mobiles = mobile.filter((item) => item.brand === brand && item.brand.model === model)
    //         res.status(200).json(mobiles);
    //         return
    //     }

    // }

    res.status(200).json(mobile);
}
