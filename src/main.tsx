// React
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Chakra
import {ChakraProvider} from '@chakra-ui/react'

// Common
import theme from "./styles/index"
import App from './App'
import './index.css'
import "./i18n/i18n"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme} resetCSS={true}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
)
