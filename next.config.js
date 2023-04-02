/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'v2ecommerce.vercel.app', 'raw.githubusercontent.com', 'mzart.sgp1.cdn.digitaloceanspaces.com','ik.imagekit.io'],
  },
  env: {
    SECRET_KEY: 'process.env.SECRET_KEY',
    RAZORPAY_KEY:'rzp_test_ExY3ydUnXeYQN0',
    RAZORPAY_SECRET:'hsz86xOTGtA5iObhlBSHapGO'
    // RAZORPAY_KEY:'rzp_live_J65TuEIWAseFIB',
    // RAZORPAY_SECRET:'DinPkIMBmgwb2leYAT4EFt2d'

  },
}
