import Head from "next/head"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import Image from "next/image"
import FeaturedPosts from "../components/home/FeaturedPosts.jsx"
import Popular from "../components/home/Popular.jsx"
const Home = () => {

if (typeof window !== "undefined") {
    window.onscroll = function () {
// console.log(window.scrollY)
        if (window.scrollY/window.innerHeight !== 0) {
          console.log(Math.floor(window.scrollY / window.innerHeight))

        }
    };
  }

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
