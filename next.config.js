/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'v2ecommerce.vercel.app', 'raw.githubusercontent.com','mzart.sgp1.cdn.digitaloceanspaces.com'],
  },
  env: {
    SECRET_KEY: 'process.env.SECRET_KEY',
    PAYTM_HOST: 'https://securegw-stage.paytm.in',
    PAYTM_MID: 'xpGjOH09774467394480',
    PAYTM_MERCHANT_KEY: 'EDsP%U16YSmlWBUZ',
    RAZORPAY_KEY:'rzp_test_ExY3ydUnXeYQN0',
    RAZORPAY_SECRET:'hsz86xOTGtA5iObhlBSHapGO'
  },
}
