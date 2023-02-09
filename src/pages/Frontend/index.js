import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Header/Footer'
import Home from '../Frontend/Home'

export default function index() {
  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
    </Routes>
    <Footer />
    </>
  )
}
