
import { Suspense } from 'react'
import './App.css'
import NavaBar from './components/NavaBar/NavaBar'
import HeroBanner from './components/HerroBanner/HeroBanner'
import Footer from './components/footer/Footer'
import ReadyTrans from './components/ReadyTrans/ReadyTrans'




function App() {


  return (
    <>
     <Suspense fallback={<span className="loading loading-dots loading-xl">Loading...</span>}>
      <NavaBar> </NavaBar>
     </Suspense>

     {/* hero-Part */}
     <Suspense>
      <HeroBanner></HeroBanner>
      
     </Suspense>
     
     <ReadyTrans></ReadyTrans>
     <Footer></Footer>
   
    </>
  )
}

export default App
