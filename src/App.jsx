
import { Suspense, useState } from 'react'
import './App.css'
import NavaBar from './components/NavaBar/NavaBar'
import HeroBanner from './components/HerroBanner/HeroBanner'
import Footer from './components/footer/Footer'
import ReadyTrans from './components/ReadyTrans/ReadyTrans'
import SimpleTrans from './components/ReadyTrans/SimpleTrans'
import StepSection from './components/ReadyTrans/StepSection'
import Cards from './components/cards/Cards'




const fetchProducts = async () => {
  const res = await fetch("/Products.json");
  return res.json();
}

function App() {
const productPromise = fetchProducts();
const [shopNow, setShopNow] = useState(0)
  return (
    <>
     <Suspense>
      <NavaBar shopNow={shopNow}> </NavaBar>
     </Suspense>

     {/* hero-Part */}
     <Suspense>
      <HeroBanner></HeroBanner>
      
     </Suspense>

    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <Cards productPromise={productPromise} 
      setShopNow={setShopNow}

      >
      </Cards>
    </Suspense>


     <StepSection></StepSection>
     <SimpleTrans></SimpleTrans>
     <ReadyTrans></ReadyTrans>
     <Footer></Footer>
   

   {/* Tostify-install */}
     {/* <ToastContainer /> */}
    </>
  )
}

export default App
