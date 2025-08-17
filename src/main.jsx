import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  once: false,   // animate every time
  mirror: true,  //  play reverse animation when scrolling back up
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>
)
