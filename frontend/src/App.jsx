import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Navbar from './Components/Navbar'

function App() {

  return (
    <section className='mainbody'>
      <Header></Header>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </section>
  )
}

export default App
