import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Frontend from '../pages/Frontend'
import Home from '../pages/Frontend/Home'

export default function Router() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/*' element={<Frontend />} />
        {/* <Route path='/' component={<Home />} /> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}
