import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { apiSlice } from './features/apiSlice'
import { ToastContainer } from 'react-toastify'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <App />
      <ToastContainer draggable closeOnClick theme="dark" />
    </ApiProvider>
  </React.StrictMode>
)
