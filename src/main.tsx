import React from 'react'
import ReactDOM from 'react-dom/client'
import SembraSchool from './SembraSchool'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import SembraNet from './SembraNet'
import SembraTime from './SembraTime'
import SembraCare from './SembraCare'
import DashLogin from './DashLogin'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
  
      <DashLogin />

      <SembraTime />

      <SembraSchool />
      
      <SembraNet />

      <SembraCare />
   
     
    
</ChakraProvider>
  </React.StrictMode>,
)
