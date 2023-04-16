import {ChakraProvider} from '@chakra-ui/react'
import theme from "./styles/index"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "./i18n/i18n"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS={true}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  // </React.StrictMode>,
)
