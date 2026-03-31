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


const productsPromise = axios.get('/Products.json')

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <StatsSection/>
      <Products productsPromise={productsPromise}/>
      <Steps/>
      <Pricing/>
      <Workflow/>
      <Footer/>
    </>
  )
}

export default App
