import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Pricing from './components/PricingSection/Pricing'
import StatsSection from './components/Stat/StatsSection'
import Steps from './components/stepsSection/Steps'
import Workflow from './components/workflowSection/Workflow'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <StatsSection/>
      <Steps/>
      <Pricing/>
      <Workflow/>
    </>
  )
}

export default App
