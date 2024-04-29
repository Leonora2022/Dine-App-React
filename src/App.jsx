

import React from 'react'
import { Routes, Route } from "react-router-dom"
import MainLayout from '../Components/MainLayout'
import HomePage from './Pages/HomePage'
import ReservationPage from './Pages/ReservatonPage'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/'  element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='reserve' element={<ReservationPage />}/>
        </Route>
      </Routes>
    </div>
  )
}


