import React from 'react'
import ReactDOM from 'react-dom/client'
import SembraSchool from './components/pages/protectedRoutes/SembraSchool'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>

      <App />



    </ChakraProvider>
  </React.StrictMode>,
)
