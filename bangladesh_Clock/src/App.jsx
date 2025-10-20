import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './assets/components/Colck_heading'
import CurrentTime from './assets/components/CurrentTime'
import ClockSlogan from './assets/components/ClockSlogan'
import 'bootstrap/dist/css/bootstrap.min.css'




function App() {


  return( <> 
  <center>
    <Heading />
    
    <ClockSlogan />
     <CurrentTime />
     </center>
  </>
    
  )
  
}

export default App
