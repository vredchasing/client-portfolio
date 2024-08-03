import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import InertiaScroll from './Functions/InertiaScroll'

function App() {

  return (
    
    <section className='mainbody'>
      <InertiaScroll></InertiaScroll>
      <Header></Header>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </section>
  )
}

export default App
