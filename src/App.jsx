import axios from 'axios'
import './App.css'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Pricing from './components/PricingSection/Pricing'
import Products from './components/products/Products'
import StatsSection from './components/Stat/StatsSection'
import Steps from './components/stepsSection/Steps'
import Workflow from './components/workflowSection/Workflow'
import { Suspense, useState } from 'react'
import { toast } from 'react-toastify'


const productsPromise = axios.get('/Products.json')

function App() {

  const [cart, setCart] = useState([])
  const handleCart = (product) => {
    const cartFind = cart.find(item => item.name === product.name);
    if (cartFind) {
      toast.warning(`${product.name} is Already Added`)
      return
    }
    const newCart = cart
    setCart([...newCart, product])
    toast.success(`${product.name} is Added`)

  }

  return (
    <>
      <Navbar key={cart.id} cart={cart} />
      <Banner />
      <StatsSection />
      <Suspense>
        <Products productsPromise={productsPromise} key={cart.id} setCart={setCart} cart={cart} handleCart={handleCart} />
      </Suspense>
      <Steps />
      <Pricing />
      <Workflow />
      <Footer />
    </>
  )
}

export default App
