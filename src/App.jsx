
import { Suspense } from 'react'
import './App.css'
import NavaBar from './components/NavaBar/NavaBar'


function App() {


  return (
    <>
     <Suspense fallback={<span className="loading loading-dots loading-xl">Loading...</span>}>
      <NavaBar>
        
      </NavaBar>
     </Suspense>
    </>
  )
}

export default App
