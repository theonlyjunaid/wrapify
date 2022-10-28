import Head from "next/head"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import Image from "next/image"
import FeaturedPosts from "../components/home/FeaturedPosts.jsx"
import Popular from "../components/home/Popular.jsx"
const Home = () => {

  return (
    <div>
      <Head>
        <title>wrap</title>
      </Head>
      <FeaturedPosts />
      <Popular />
    </div>
  )
}

export default Home
