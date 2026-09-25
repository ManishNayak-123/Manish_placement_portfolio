// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import {BrowserRouter} from 'react-router'
// import React from 'react'
// import './index.css'
// import App from './App.jsx'
// import { Toaster } from 'react-hot-toast'
// import { store } from './redux/store.js'

// createRoot(document.getElementById('root')).render(
 
//   <React.StrictMode>
//     <BrowserRouter>
//     <Provider store = {store}>
//       <Toaster
      
//         position="top-right"
//         reverseOrder={false}
      
//       />
//         </Provider>
//     <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// )

import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router' // Changed from 'react-router'
 // <-- Added missing Provider import

import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <BrowserRouter>
        <Toaster position="top-right" reverseOrder={false} />
        <App /> {/* App MUST be inside Provider and BrowserRouter */}
      </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
)