import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layout/Layout'
import ContactPage from './components/contact/ContactPage'
import MapPage from './components/map/MapPage'

const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* <div className="bg-red-200 min-h-screen flex justify-center items-center">

      </div> */}
      <QueryClientProvider client={queryClient}>
        <Layout>

          <Routes>
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/' element={<Navigate to="/contact" />} />
            <Route path='/maps' element={<MapPage />} />
          </Routes>
        </Layout>
      </QueryClientProvider>
    </>
  )
}

export default App
