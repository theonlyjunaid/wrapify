import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Navbar2 from '../components/Navbar2'
import Footer2 from '../components/Footer2'
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function MyApp({ Component, pageProps }) {
    const [size, setSize] = useState('Choose')
  const [progress, setProgress] = useState(0)
  const [user, setUser] = useState({ value: null })
  const [key, setKey] = useState(0)
  const router = useRouter()
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(30)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')))
        saveCart(JSON.parse(localStorage.getItem('cart')))
      }
      // console.log(cart)
    } 
    catch (error) {
      console.log(error)
      localStorage.clear()
    }
    const myuser = JSON.parse(localStorage.getItem('myuser'))
    if (myuser) {
      setUser({ value: myuser.token,email:myuser.email })
      setKey(Math.random())
      // console.log(user)
    }

  }, [router.query])

  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(myCart)
    keys.forEach((k) => {
      subt += myCart[k].price * myCart[k].qty
    })

    setSubTotal(subt)
    // console.log(cart)
  }
  const addToCart = (itemCode, qty, price, name, size, varient,img) => {
    let newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, varient ,img}
    }
console.log(itemCode)
    setCart(newCart)
    saveCart(newCart)
    // console.log(cart)

  }
  const clearCart = () => {
    setCart({})
    saveCart({})
    console.log("cart cleared")
  }
  const removeFromCart = (itemCode, qty, price, name, size, varient) => {
    let newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
    // console.log(cart)
  }
  const buyNow = (itemCode, qty, price, name, size, varient) => {
    let newCart = { }
    newCart[itemCode] = { qty: 1, price, name, size, varient }
    setCart(newCart)
    saveCart(newCart)
    router.push("/checkout")
  }
  const logout = () => {
    localStorage.removeItem('myuser')
    setUser({ value: null })
    setKey(Math.random())
    router.push("/")
  }
  return <div >
    <LoadingBar
      color='#f11946'
      progress={progress}
      waitingTime={500}
      transitionTime={300}
      onLoaderFinished={() => setProgress(0)}
    />
    <Navbar2 logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component user={user} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} setSubTotal={setSubTotal}  {...pageProps} buyNow={buyNow} size={size} setSize={setSize} />
    <Footer2 />
  </div>

}

export default MyApp
