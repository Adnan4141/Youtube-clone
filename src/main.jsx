import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './utils/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
)



// npm install @mui/material @emotion/react @emotion/styled
// npm i @chakra-ui/react
// npm install @reduxjs/toolkit react-redux
// npm install react-icons --save
// npm install axios
// npm install react-avatar --save